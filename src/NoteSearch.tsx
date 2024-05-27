import React from 'react';
import { Note, Space, Notu } from 'notu';
import { useState } from 'react';
import 'bulma';
import { NotesPanelSelector } from './NotesPanel';

interface NoteSearchProps {
    /** The space which we're fetching notes from */
    space: Space,
    /** The client used for fetching results from the server, only add this if you want notes to be auto-fetched for you */
    notu?: Notu,
    /** The query string which the search field will display and use for querying */
    query?: string,
    /** Optional callback for handling changes to the query text */
    onQueryChanged?: (query: string) => void,
    /** If notu param has not been defined, then use this prop for handling the manual fetching of notes */
    onFetchRequested?: (query: string, space: Space) => Promise<Array<Note>>,
    /** Callback that gets fired when the search has been executed and notes returned */
    onFetched?: (notes: Array<Note>) => void
}


export const NoteSearch = ({
    space,
    notu = null,
    query = '',
    onQueryChanged = null,
    onFetchRequested = null,
    onFetched = null
}: NoteSearchProps) => {

    function onSearchTextChange(event): void {
        if (!!onQueryChanged)
            onQueryChanged(event.target.value);
    }

    async function onSearchSubmit(): Promise<void> {
        let searchResults: Array<Note>;
        if (!!notu)
            searchResults = await notu.getNotes(query, space.id);
        else
            searchResults = await onFetchRequested(query, space);
        if (!!onFetched)
            onFetched(searchResults);
    }

    return (
        <div className="field has-addons is-flex">
            <div className="control is-flex-grow-1">
                <input type="text" className="input" disabled={!onQueryChanged}
                    value={query} onChange={onSearchTextChange}></input>
            </div>
            <div className="control">
                <button className="button" onClick={onSearchSubmit}>Search</button>
            </div>
        </div>
    );
}


export class PanelNoteSearch implements NotesPanelSelector {

    private _notu: Notu;
    private _space: Space;
    private _query: string;

    onNotesRetrieved: (notes: Array<Note>) => void;

    constructor(notu: Notu, space: Space, query: string) {
        this._notu = notu;
        this._space = space;
        this._query = query;
    }

    async requestNotes(): Promise<void> {
        const notes = await this._notu.getNotes(this._query, this._space.id);
        this.onNotesRetrieved(notes);
    }

    handleFetchRequestFromNoteSearch(): Promise<Array<Note>> {
        this.requestNotes();
        return Promise.resolve([]);
    }

    render() {
        const [updatedQuery, setUpdatedQuery] = useState(this._query);
        this._query = updatedQuery;

        return (<NoteSearch space={this._space}
                            query={updatedQuery}
                            onQueryChanged={query => setUpdatedQuery(query)}
                            onFetchRequested={() => this.handleFetchRequestFromNoteSearch()}/>);
    }
}