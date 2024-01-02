import { Attr, Note, Space, Tag } from 'notu';
import { useState, useRef } from 'react';
import { NoteTagBadge } from './NoteTagBadge';
import 'purecss';
import './NoteEditor.css';
import { NoteAttrEditor } from './NoteAttrEditor';

interface NoteEditorProps {
    note: Note,
    spaces: Array<Space>,
    tags: Array<Tag>,
    attrs: Array<Attr>,
    onConfirm: () => string
}


export const NoteEditor = ({
    note,
    spaces,
    tags,
    attrs,
    onConfirm
}: NoteEditorProps) => {
    const [date, setDate] = useState(note.date.toISOString().split('T')[0]);
    const [spaceId, setSpaceId] = useState(note.spaceId);
    const [time, setTime] = useState(note.date.toTimeString().split(' ')[0].substring(0, 5));
    const [text, setText] = useState(note.text);
    const [archived, setArchived] = useState(note.archived);
    const [tagIds, setTagIds] = useState(note.tags.map(x => x.tagId));
    const [attrIds, setAttrIds] = useState(note.attrs.filter(x => x.tagId == null).map(x => x.attrId));
    const textAreaRef = useRef(null);

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
        if (!!textAreaRef.current) {
            const textArea = textAreaRef.current;
            textArea.style.height = '';
            textArea.style.height = textArea.scrollHeight + 'px';
        }
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

    function attrsThatCanBeAdded(): Array<Attr> {
        return attrs.filter(x => !attrIds.find(y => y == x.id));
    }

    function getAttrName(attr: Attr): string {
        if (attr.spaceId == note.spaceId)
            return attr.name;
        return `${spaces.find(x => x.id == attr.spaceId).name}.${attr.name}`;
    }

    function renderAttrFields() {
        if (note.attrs.length == 0)
            return;
        
        return (
            <div className="attrFieldsContainer">
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
        <form className="pure-form pure-form-aligned">
            <fieldset>
                <div className="pure-control-group">
                    <label>Space</label>
                    <select value={spaceId} onChange={onSpaceIdChange}>
                        <option key="0" value={null}></option>
                        {spaces.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                    </select>
                </div>

                <div className="pure-control-group">
                    <label>Date</label>
                    <input type="date" value={date} onChange={onDateChange}></input>
                    <input type="time" value={time} onChange={onTimeChange}></input>
                </div>

                <div className="pure-control-group">
                    <label>Text</label>
                    <textarea value={text} onChange={onTextChange} ref={textAreaRef} className="textfield"/>
                </div>

                <div className="pure-control-group">
                    <label>Archived</label>
                    <input type="checkbox" checked={archived} onChange={onArchivedChange}></input>
                </div>

                <div className="pure-control-group">
                    <label>Tags</label>
                    <select onChange={onTagSelected}>
                        <option key="0" value={null}></option>
                        {tagsThatCanBeAdded()
                            .map(x => (<option key={x.id} value={x.id}>{getTagName(x)}</option>))}
                    </select>
                </div>
                
                <div className="pure-controls">
                    {note.tags.map(x => (<NoteTagBadge key={x.tag.id} noteTag={x} contextSpaceId={note.spaceId} onDelete={() => removeTag(x.tag)}/>))}
                </div>

                <div className="pure-control-group">
                    <label>Attrs</label>
                    <select onChange={onAttrSelected}>
                        <option key="0" value={null}></option>
                        {attrsThatCanBeAdded()
                            .map(x => (<option key={x.id} value={x.id}>{getAttrName(x)}</option>))}
                    </select>
                </div>

                {renderAttrFields()}

                <div className="pure-controls">
                    <button type="button" onClick={onConfirm}
                            className="pure-button pure-button-primary">Confirm</button>
                </div>
            </fieldset>
        </form>
    );
};