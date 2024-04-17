import React from 'react';
import { Attr, Note, NoteAttr, Tag } from 'notu';
import { useState } from 'react';
import { NoteTagBadge } from './NoteTagBadge';
import 'bulma';
import { NoteAttrEditor } from './NoteAttrEditor';
import { NotuClient } from 'notu/dist/types/services/HttpClient';

interface NoteEditorProps {
    /** Used for saving the note once changes have been confirmed */
    notuClient: NotuClient,
    /** The note to be edited */
    note: Note,
    /** The collection of tags that can be added to the note */
    tags: Array<Tag>,
    /** The collection of attrs that can be added to the note */
    attrs: Array<Attr>,
    /** Called when the confirm button is clicked. A false return value will prevent saving, so will a thrown error, which will also display on the note editor */
    onConfirm: (note: Note) => Promise<boolean>,
    /** Called when the cancel button is clicked */
    onCancel: (note: Note) => void,
    /** Called when onConfirm has indicated that the NoteEditor should proceed with the save automatically, and the save has gone through successfully */
    onSave: (note: Note) => void
}


export const NoteEditor = ({
    notuClient,
    note,
    tags,
    attrs,
    onConfirm,
    onCancel,
    onSave
}: NoteEditorProps) => {
    if (!note.space)
        return (<p>Note must define the space that it belongs to</p>);

    const date = note.date.toISOString().split('T')[0];
    const time = note.date.toTimeString().split(' ')[0].substring(0, 5);

    const [ownTagName, setOwnTagName] = useState(note.ownTag?.name ?? '');
    const [tagIds, setTagIds] = useState(note.tags.map(x => x.tagId));
    const [attrIds, setAttrIds] = useState(note.attrs.filter(x => x.tagId == null).map(x => x.attrId));
    const [error, setError] = useState(null);

    async function submitNote(evt): Promise<void> {
        evt.preventDefault();
        note.date = new Date(`${evt.target.elements.date.value} ${evt.target.elements.time.value}`);
        note.text = evt.target.elements.text.value;
        try {
            const confirmResult = await onConfirm(note);
            if (!!confirmResult) {
                await notuClient.saveNotes([note]);
                try { onSave(note); } catch (err) { }
            }
            setError(null);
        }
        catch (err) {
            setError(err.message);
        }
    }

    function onOwnTagNameChange(event): void {
        setOwnTagName(event.target.value);
        if (event.target.value.length == 0)
            note.removeOwnTag();
        else
            note.setOwnTag(event.target.value);
    }

    function onTagSelected(event): void {
        const tagId = event.target.value;
        const tag = tagsThatCanBeAdded().find(x => x.id == tagId);
        if (!tag)
            return;
        const newTagIds = tagIds.slice();
        newTagIds.push(tag.id);
        setTagIds(newTagIds);
        note.addTag(tag);
    }

    function tagsThatCanBeAdded(): Array<Tag> {
        return tags.filter(x => (x.isPublic || x.spaceId == note.spaceId) && !note.tags.find(y => x.id == y.tagId));
    }

    function removeTag(tag: Tag): void {
        setTagIds(tagIds.filter(x => x != tag.id));
        note.removeTag(tag);
    }

    function attrsThatCanBeAdded(): Array<Attr> {
        return attrs.filter(x => x.spaceId == note.spaceId);
    }

    function removeAttr(noteAttr: NoteAttr): void {
        setAttrIds(attrIds.filter(x => x != noteAttr.attrId));
        note.removeAttr(noteAttr.attr, noteAttr.tag);
    }

    function onAttrSelected(event): void {
        const attrId = event.target.value;
        const attr = attrsThatCanBeAdded().find(x => x.id == attrId);
        if (!attr)
            return;
        const newAttrIds = attrIds.slice();
        newAttrIds.push(attr.id);
        setAttrIds(newAttrIds);
        note.addAttr(attr);
        event.target.value = null;
    }

    function onCancelClick() {
        onCancel(note);
    }

    function renderErrorMessage() {
        if (!error)
            return;
        return (
            <div className="notification is-danger">
                <label>Error: {error}</label>
            </div>
        )
    }

    function renderTagsDropdown() {
        if (tagsThatCanBeAdded().length == 0)
            return;

        return (
            <div className="control">
                <div className="select">
                    <select onChange={onTagSelected}>
                        <option key="0" value={null}></option>
                        {tagsThatCanBeAdded()
                            .map(x => (<option key={x.id} value={x.id}>{x.getQualifiedName(note.spaceId)}</option>))}
                    </select>
                </div>
            </div>
        );
    }

    function renderTags() {
        if (note.tags.length == 0)
            return;

        return (
            <div className="box">
                <div>
                    {note.tags.map(x => (
                        <NoteTagBadge key={x.tag.id} noteTag={x}
                                      contextSpaceId={note.spaceId}
                                      onDelete={() => removeTag(x.tag)}
                                      showAttrs={false}/>
                    ))}
                </div>
            </div>
        );
    }

    function renderAttrsDropdown() {
        if (attrsThatCanBeAdded().length == 0)
            return;

        return (
            <div className="control">
                <div className="select">
                    <select onChange={onAttrSelected}>
                        <option key="0" value={null}></option>
                        {attrsThatCanBeAdded()
                            .map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                    </select>
                </div>
            </div>
        );
    }

    function renderAttrFields() {
        if (note.attrs.length == 0)
            return;
        
        return (
            <div className="box">
                {note.attrs.map((noteAttr, index) => (
                    <NoteAttrEditor key={index} noteAttr={noteAttr} contextSpaceId={note.spaceId} 
                                    tags={tagIds.map(id => tags.find(x => x.id == id))} onRemove={removeAttr}/>
                ))}
            </div>
        );
    }

    return (
        <form onSubmit={submitNote}>
            <fieldset>
                {renderErrorMessage()}

                <div className="field">
                    <label className="label">Date</label>
                    <div className="control">
                        <div className="field has-addons">
                            <p className="control">
                                <input type="date" className="input" name="date" defaultValue={date}></input>
                            </p>
                            <p className="control">
                                <input type="time" className="input" name="time" defaultValue={time}></input>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Own Tag</label>
                    <div className="control">
                        <input type="text" className="input" value={ownTagName} onChange={onOwnTagNameChange}></input>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Text</label>
                    <div className="control">
                        <textarea defaultValue={note.text} name="text" className="textarea"/>
                    </div>
                </div>
                
                <div className="field">
                    <label className="label">Tags</label>
                    {renderTagsDropdown()}
                </div>

                {renderTags()}

                <div className="field">
                    <label className="label">Attrs</label>
                    {renderAttrsDropdown()}
                </div>

                {renderAttrFields()}

                <div className="field">
                    <button type="submit" className="button is-link mr-3">Confirm</button>
                    <button type="button" className="button is-danger" onClick={onCancelClick}>Cancel</button>
                </div>
            </fieldset>
        </form>
    );
};