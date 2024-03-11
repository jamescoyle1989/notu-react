import React from 'react';
import { Attr, Note, Space, Tag } from 'notu';
import { useState } from 'react';
import { NoteTagBadge } from './NoteTagBadge';
import 'bulma';
import { NoteAttrEditor } from './NoteAttrEditor';

interface NoteEditorProps {
    note: Note,
    tags: Array<Tag>,
    attrs: Array<Attr>,
    onConfirm: (note: Note) => Promise<string>
}


export const NoteEditor = ({
    note,
    tags,
    attrs,
    onConfirm
}: NoteEditorProps) => {
    if (!note.space)
        throw new Error('Note must define the space that it belongs to');

    const [date, setDate] = useState(note.date.toISOString().split('T')[0]);
    const [time, setTime] = useState(note.date.toTimeString().split(' ')[0].substring(0, 5));
    const [ownTagName, setOwnTagName] = useState(note.ownTag?.name ?? '');
    const [text, setText] = useState(note.text);
    const [archived, setArchived] = useState(note.archived);
    const [tagIds, setTagIds] = useState(note.tags.map(x => x.tagId));
    const [attrIds, setAttrIds] = useState(note.attrs.filter(x => x.tagId == null).map(x => x.attrId));

    function onDateChange(event): void {
        setDate(event.target.value);
        note.date = new Date(`${event.target.value} ${time}`);
    }

    function onTimeChange(event): void {
        setTime(event.target.value);
        note.date = new Date(`${date} ${event.target.value}`);
    }

    function onOwnTagNameChange(event): void {
        setOwnTagName(event.target.value);
        if (event.target.value.length == 0)
            note.removeOwnTag();
        else
            note.setOwnTag(event.target.value);
    }

    function onTextChange(event): void {
        setText(event.target.value);
        note.text = event.target.value;
    }

    function onArchivedChange(event): void {
        setArchived(event.target.checked);
        note.archived = event.target.checked;
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
        return tags.filter(x => !note.tags.find(y => x.id == y.tagId));
    }

    function getTagName(tag: Tag): string {
        if (tag.spaceId == note.spaceId)
            return tag.name;
        return `${tag.space.name}.${tag.name}`;
    }

    function removeTag(tag: Tag): void {
        setTagIds(tagIds.filter(x => x != tag.id));
        note.removeTag(tag);
    }

    function attrsThatCanBeAdded(): Array<Attr> {
        return attrs.filter(x => !attrIds.find(y => y == x.id));
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
                            .map(x => (<option key={x.id} value={x.id}>{getTagName(x)}</option>))}
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
                    {note.tags.map(x => (<NoteTagBadge key={x.tag.id} noteTag={x} contextSpaceId={note.spaceId} onDelete={() => removeTag(x.tag)}/>))}
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
                {note.attrs.map(noteAttr => (
                    <NoteAttrEditor key={noteAttr.attrId} noteAttr={noteAttr} contextSpaceId={note.spaceId} onRemove={() => removeAttr(noteAttr.attr)}/>
                ))}
            </div>
        );
    }

    function removeAttr(attr: Attr): void {
        setAttrIds(attrIds.filter(x => x != attr.id));
        note.removeAttr(attr);
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
    }

    return (
        <form>
            <fieldset>
                <div className="field">
                    <label className="label">Date</label>
                    <div className="control">
                        <div className="field has-addons">
                            <p className="control">
                                <input type="date" className="input" value={date} onChange={onDateChange}></input>
                            </p>
                            <p className="control">
                                <input type="time" className="input" value={time} onChange={onTimeChange}></input>
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
                        <textarea value={text} className="textarea" onChange={onTextChange}/>
                    </div>
                </div>

                <label className="label">Archived
                    <input type="checkbox" className="ml-2" checked={archived} onChange={onArchivedChange}></input>
                </label>
                
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
                    <button type="button" onClick={() => onConfirm(note)}
                            className="button is-link">Confirm</button>
                </div>
            </fieldset>
        </form>
    );
};