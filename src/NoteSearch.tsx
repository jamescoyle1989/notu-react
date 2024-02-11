import React from 'react';
import { HttpClient, Note, Space } from 'notu';
import { useState } from 'react';
import 'purecss';
import style from './NoteSearch.module.css';

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
                <select value={activeSpace.id} onChange={onSpaceChange} disabled={true}>
                    <option value={activeSpace.id}>{activeSpace.name}</option>
                </select>
            );
        }
        else {
            return (
                <select value={activeSpace.id} onChange={onSpaceChange}>
                    {availableSpaces.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                </select>
            );
        }
    }

    return (
        <div className={style.notesearch_base}>
            {renderSpaceDropdown()}
            <input type="text" className={style.notesearch_text}
                value={searchText} onChange={onSearchTextChange}></input>

            <button onClick={onSearchSubmit}>Search</button>
        </div>
    );
}