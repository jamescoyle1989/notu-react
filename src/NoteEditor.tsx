import { Attr, Note, NoteAttr, NoteTag, Space, Tag } from 'notu';
import { useState } from 'react';

interface NoteEditorProps {
    note: Note,
    spaces: Array<Space>,
    tags: Array<Tag>,
    attrs: Array<Attr>,
    confirm: () => string
}


export const NoteEditor = ({
    note,
    spaces,
    tags,
    attrs,
    confirm
}: NoteEditorProps) => {
    const [date, setDate] = useState(note.date.toISOString().split('T')[0]);
    const [spaceId, setSpaceId] = useState(note.spaceId);
    const [time, setTime] = useState(note.date.toTimeString().split(' ')[0].substring(0, 5));
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

    function onSpaceIdChange(event): void {
        setSpaceId(event.target.value);
        note.space = spaces.find(x => x.id == event.target.value);
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
        return `${spaces.find(x => x.id == tag.spaceId).name}.${tag.name}`;
    }

    function removeTag(tag: Tag): void {
        setTagIds(tagIds.filter(x => x != tag.id));
        note.removeTag(tag);
    }

    function tagBadge(noteTag: NoteTag) {
        return (
            <div key={noteTag.tag.id}>
                {getTagName(noteTag.tag)}
                <button onClick={() => removeTag(noteTag.tag)}>X</button>
            </div>
        );
    }

    function attrsThatCanBeAdded(): Array<Attr> {
        return attrs.filter(x => !attrIds.find(y => y == x.id));
    }

    function getAttrName(attr: Attr): string {
        if (attr.spaceId == note.spaceId)
            return attr.name;
        return `${spaces.find(x => x.id == attr.spaceId).name}.${attr.name}`;
    }

    function attrField(noteAttr: NoteAttr) {
        return (
            <div key={noteAttr.attr.id}>
                <label>{getAttrName(noteAttr.attr)}</label>
                <label>TO DO: Add AttrValueEditor component that goes here</label>
                <button onClick={() => removeAttr(noteAttr.attr)}>X</button>
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
        <div>
            <div>
                <label>Space</label>
                <select value={spaceId} onChange={onSpaceIdChange}>
                    <option key="0" value={null}></option>
                    {spaces.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                </select>
            </div>

            <div>
                <label>Date</label>
                <input type="date" value={date} onChange={onDateChange}></input>
                <input type="time" value={time} onChange={onTimeChange}></input>
            </div>

            <div>
                <label>Text</label>
                <input type="text" value={text} onChange={onTextChange}></input>
            </div>

            <div>
                <label>Archived</label>
                <input type="checkbox" checked={archived} onChange={onArchivedChange}></input>
            </div>

            <div>
                <label>Tags</label>
                {note.tags.map(x => tagBadge(x))}
                <select onChange={onTagSelected}>
                    <option key="0" value={null}></option>
                    {tagsThatCanBeAdded()
                        .map(x => (<option key={x.id} value={x.id}>{getTagName(x)}</option>))}
                </select>
            </div>

            <div>
                <label>Attrs</label>
                {note.attrs.map(x => attrField(x))}
                <select onChange={onAttrSelected}>
                    <option key="0" value={null}></option>
                    {attrsThatCanBeAdded()
                        .map(x => (<option key={x.id} value={x.id}>{getAttrName(x)}</option>))}
                </select>
            </div>

            <button onClick={confirm}>Confirm</button>
        </div>
    );
};