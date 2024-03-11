import React from 'react';
import { HttpClient, Note, Space } from 'notu';
import { useState } from 'react';
import 'bulma';

interface NoteSearchProps {
    /** The client used for fetching results from the server */
    notuClient: HttpClient,
    /** The space which we're fetching notes from */
    space: Space,
    /** Callback that gets fired when the search has been executed and notes returned from the server */
    onFetch: (notes: Array<Note>) => void
}


export const NoteSearch = ({
    notuClient,
    space,
    onFetch
}: NoteSearchProps) => {

    const [searchText, setSearchText] = useState('');

    function onSearchTextChange(event): void {
        setSearchText(event.target.value);
    }

    async function onSearchSubmit(): Promise<void> {
        const searchResults = await notuClient.getNotes(searchText, space.id);
        onFetch(searchResults);
    }

    return (
        <div className="field has-addons is-flex">
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