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

    const [error, setError] = useState<string>(null);

    function onSearchTextChange(event): void {
        setError(null);
        if (!!onQueryChanged)
            onQueryChanged(event.target.value);
    }

    async function onSearchSubmit(): Promise<void> {
        try {
            let searchResults: Array<Note>;
            if (!!notu)
                searchResults = await notu.getNotes(query, space.id);
            else
                searchResults = await onFetchRequested(query, space);
            if (!!onFetched)
                onFetched(searchResults);
        }
        catch (err) {
            setError(err.message);
        }
    }

    function renderButton() {
        if (!!error) {
            return (
                <button className="button is-danger" disabled title={error}>Error!</button>
            );
        }
        else {
            return (
                <button className="button" onClick={onSearchSubmit}>Search</button>
            );
        }
    }

    return (
        <div className="field has-addons is-flex">
            <div className="control is-flex-grow-1">
                <input type="text" className="input" disabled={!onQueryChanged}
                    value={query} onChange={onSearchTextChange}></input>
            </div>
            <div className="control">
                {renderButton()}
            </div>
        </div>
    );
}


export class PanelNoteSearch implements NotesPanelSelector {

    private _notu: Notu;
    private _space: Space;

    private _query: string;
    private _setQuery: React.Dispatch<React.SetStateAction<string>>;

    private _customQueryHandling: (query: string, spaceId: number) => Promise<Array<Note>>;

    onNotesRetrieved: (notes: Array<Note>) => void;

    constructor(notu: Notu, space: Space, query: string) {
        this._notu = notu;
        this._space = space;
        this._query = query;
    }

    withCustomQueryHandling(handler: (query: string, spaceId: number) => Promise<Array<Note>>): PanelNoteSearch {
        this._customQueryHandling = handler;
        return this;
    }

    async requestNotes(): Promise<void> {
        const notes = (!!this._customQueryHandling)
            ? await this._customQueryHandling(this._query, this._space.id)
            : await this._notu.getNotes(this._query, this._space.id);
        this.onNotesRetrieved(notes);
    }

    async handleFetchRequestFromNoteSearch(): Promise<Array<Note>> {
        await this.requestNotes();
        return Promise.resolve([]);
    }

    renderHooks(): void {
        [this._query, this._setQuery] = useState(this._query);
    }

    render() {
        return (<NoteSearch space={this._space}
                            query={this._query}
                            onQueryChanged={query => this._setQuery(query)}
                            onFetchRequested={async () => await this.handleFetchRequestFromNoteSearch()}/>);
    }
}