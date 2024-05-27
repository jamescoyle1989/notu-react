import React from 'react';
import { useState } from 'react';
import 'bulma';
import { NotesPanelSelector } from './NotesPanel';
import { Note, Notu, Tag } from 'notu';

interface RelatedTagSelectorProps {
    /** The client used for fetching results from the server, only add this if you want notes to be auto-fetched for you */
    notu?: Notu,
    /** The set of tags which you're allowed to choose from, leave empty to get all from notu */
    tags?: Array<Tag>,
    /** The tag which should start off as selected */
    selectedTag?: Tag,
    /** Optional callback for handling changes to the selected tag */
    onTagChanged?: (tag: Tag) => void,
    /** If notu param has not been defined, use this prop for handling the manual fetching of notes */
    onFetchRequested?: (tag: Tag) => Promise<Array<Note>>,
    /** Callback that gets fired when the search has been executed and notes returned */
    onFetched?: (notes: Array<Note>) => void
}


export const RelatedTagSelector = ({
    notu = null,
    tags = null,
    selectedTag = null,
    onTagChanged = null,
    onFetchRequested = null,
    onFetched = null
}: RelatedTagSelectorProps) => {

    function getAvailableTags(): Array<Tag> {
        if (!!tags)
            return tags;
        return notu.getTags();
    }

    function onSelectedTagChange(event): void {
        const tagId = Number(event.target.value);
        const newSelectedTag = getAvailableTags().find(x => x.id == tagId) ?? null;
        if (newSelectedTag != selectedTag)
            onTagChanged(newSelectedTag);
    }

    async function onSearchSubmit(): Promise<void> {
        if (!selectedTag)
            return;

        let searchResults: Array<Note>;
        if (!!notu)
            searchResults = await notu.getRelatedNotes(selectedTag);
        else
            searchResults = await onFetchRequested(selectedTag);
        if (!!onFetched)
            onFetched(searchResults);
    }

    return (
        <div className="field has-addons is-flex">
            <div className="control is-flex-grow-1">
                <div className="select is-fullwidth">
                    <select onChange={onSelectedTagChange}>
                        <option key="0" value={null}></option>
                        {getAvailableTags().map(x => (<option key={x.id} value={x.id}>{x.getQualifiedName(-1)}</option>))}
                    </select>
                </div>
            </div>
            <div className="control">
                <button className="button" onClick={onSearchSubmit}>Search</button>
            </div>
        </div>
    )
};


export class PanelRelatedTagSelector implements NotesPanelSelector {

    private _notu: Notu;
    private _tags: Array<Tag>;
    private _selectedTag: Tag;

    onNotesRetrieved: (notes: Array<Note>) => void;

    constructor(notu: Notu, tags: Array<Tag> = null, selectedTag: Tag = null) {
        this._notu = notu;
        this._tags = tags;
        this._selectedTag = selectedTag;
    }

    async requestNotes(): Promise<void> {
        if (!this._selectedTag)
            return;
        const notes = await this._notu.getRelatedNotes(this._selectedTag);
        this.onNotesRetrieved(notes);
    }

    handleFetchRequestFromNoteSearch(): Promise<Array<Note>> {
        this.requestNotes();
        return Promise.resolve([]);
    }

    render() {
        const [updatedSelectedTag, setUpdatedSelectedTag] = useState(this._selectedTag);
        this._selectedTag = updatedSelectedTag;

        return (<RelatedTagSelector tags={this._tags ?? this._notu.getTags()}
                                    selectedTag={this._selectedTag}
                                    onTagChanged={tag => setUpdatedSelectedTag(tag)}
                                    onFetchRequested={() => this.handleFetchRequestFromNoteSearch()}/>);
    }
}