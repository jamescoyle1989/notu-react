import React from 'react';
import { HttpClient, Note, Space } from 'notu';
import { useState } from 'react';
import 'bulma';

interface NoteSearchProps {
    /** The space which we're fetching notes from */
    space: Space,
    /** The client used for fetching results from the server, only add this if you want notes to be auto-fetched for you */
    notuClient?: HttpClient,
    /** If notuClient has not been defined, then use this prop for handling the manual fetching of notes */
    onFetchRequested?: (query: string, space: Space) => Promise<Array<Note>>,
    /** Callback that gets fired when the search has been executed and notes returned */
    onFetched?: (notes: Array<Note>) => void,
    /** The optional default value for the search field to have. If not defined then defaults to empty */
    defaultValue?: string
}


export const NoteSearch = ({
    space,
    notuClient = null,
    onFetchRequested = null,
    onFetched = null,
    defaultValue = null
}: NoteSearchProps) => {

    const [searchText, setSearchText] = useState(defaultValue ?? '');

    function onSearchTextChange(event): void {
        setSearchText(event.target.value);
    }

    async function onSearchSubmit(): Promise<void> {
        let searchResults: Array<Note>;
        if (!!notuClient)
            searchResults = await notuClient.getNotes(searchText, space.id);
        else
            searchResults = await onFetchRequested(searchText, space);
        onFetched(searchResults);
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