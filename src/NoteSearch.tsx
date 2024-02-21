import React from 'react';
import { HttpClient, Note, Space } from 'notu';
import { useState } from 'react';
import 'bulma';

interface NoteSearchProps {
    notuClient: HttpClient,
    space: Space,
    availableSpaces: Array<Space>,
    onFetch: (notes: Array<Note>) => void
}


export const NoteSearch = ({
    notuClient,
    space,
    availableSpaces,
    onFetch
}: NoteSearchProps) => {

    const [searchText, setSearchText] = useState('');
    const [activeSpace, setActiveSpace] = useState(space);

    function onSearchTextChange(event): void {
        setSearchText(event.target.value);
    }

    function onSpaceChange(event): void {
        setActiveSpace(availableSpaces.find(x => x.id == event.target.value));
    }

    async function onSearchSubmit(): Promise<void> {
        const searchResults = await notuClient.getNotes(searchText, activeSpace.id);
        onFetch(searchResults);
    }

    function renderSpaceDropdown() {
        if (!availableSpaces) {
            return (
                <div className="control">
                    <div className="select">
                        <select value={activeSpace.id} onChange={onSpaceChange} disabled={true}>
                            <option value={activeSpace.id}>{activeSpace.name}</option>
                        </select>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="control">
                    <div className="select">
                        <select value={activeSpace.id} onChange={onSpaceChange}>
                            {availableSpaces.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                        </select>
                    </div>
                </div>
            );
        }
    }

    return (
        <div className="field has-addons is-flex">
            {renderSpaceDropdown()}
            <div className="control is-flex-grow-1">
                <input type="text" className="input"
                    value={searchText} onChange={onSearchTextChange}></input>
            </div>
            <div className="control">
                <button className="button" onClick={onSearchSubmit}>Search</button>
            </div>
        </div>
    );
}