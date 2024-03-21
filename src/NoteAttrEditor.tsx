import React from 'react';
import { NoteAttr, Tag } from 'notu';
import { useState } from 'react';

interface NoteAttrEditorProps {
    noteAttr: NoteAttr,
    contextSpaceId: number,
    tags: Array<Tag>,
    onRemove: (noteAttr: NoteAttr) => void
}


export const NoteAttrEditor = ({
    noteAttr,
    contextSpaceId,
    tags,
    onRemove
}: NoteAttrEditorProps) => {
    const [value, setValue] = useState(noteAttr.value);
    const [tagId, setTagId] = useState(noteAttr.tagId);

    function onValueChange(event): void {
        noteAttr.value = event.target.value;
        setValue(noteAttr.value);
    }

    function onDateChange(event, time): void {
        noteAttr.value = new Date(`${event.target.value} ${time}`);
        setValue(noteAttr.value);
    }

    function onTimeChange(event, date): void {
        noteAttr.value = new Date(`${date} ${event.target.value}`);
        setValue(noteAttr.value);
    }

    function onBooleanChange(): void {
        noteAttr.value = !noteAttr.value;
        setValue(noteAttr.value);
    }

    function getTagName(tag: Tag): string {
        if (tag.spaceId == contextSpaceId)
            return tag.name;
        return `${tag.space.name}.${tag.name}`;
    }

    function onTagSelected(evt): void {
        const newTagId = Number(evt.target.value);
        const newTag = tags.find(x => x.id == newTagId);
        noteAttr.tag = newTag;
        setTagId(newTagId);
    }

    function renderLabelPortion() {
        return (
            <p className="control">
                <a className="button is-static">
                    {noteAttr.attr.name}
                    <button className="delete ml-2" onClick={() => onRemove(noteAttr)}></button>
                </a>
            </p>
        );
    }

    function renderTagDropdown() {
        if (tags.length == 0)
            return;
        return (
            <div className="control">
                <div className="select">
                    <select value={noteAttr.tagId ?? 0} onChange={onTagSelected}>
                        <option key="0" value={0}></option>
                        {tags.map(x => (<option key={x.id} value={x.id}>{getTagName(x)}</option>))}
                    </select>
                </div>
            </div>
        );
    }

    function renderForm() {
        if (noteAttr.attr.isText) {
            return (
                <div className="field has-addons">
                    {renderLabelPortion()}
                    {renderTagDropdown()}
                    <p className="control">
                        <input type="text" className="input" value={noteAttr.value} onChange={onValueChange}/>
                    </p>
                </div>
            );
        }

        if (noteAttr.attr.isDate) {
            const date = noteAttr.value.toISOString().split('T')[0];
            const time = noteAttr.value.toTimeString().split(' ')[0].substring(0, 5);
            return (
                <div className="field has-addons">
                    {renderLabelPortion()}
                    {renderTagDropdown()}
                    <p className="control">
                        <input type="date" className="input" value={date} onChange={evt => onDateChange(evt, time)}></input>
                    </p>
                    <p className="control">
                        <input type="time" className="input" value={time} onChange={evt => onTimeChange(evt, date)}></input>
                    </p>
                </div>
            );
        }

        if (noteAttr.attr.isNumber) {
            return (
                <div className="field has-addons">
                    {renderLabelPortion()}
                    {renderTagDropdown()}
                    <p className="control">
                        <input type="number" className="input" value={noteAttr.value} onChange={onValueChange}/>
                    </p>
                </div>
            );
        }

        if (noteAttr.attr.isBoolean) {
            return (
                <div className="field has-addons">
                    {renderLabelPortion()}
                    {renderTagDropdown()}
                    <p className="control">
                        <button type="button" className={`button ${noteAttr.value ? 'is-success' : 'is-danger'}`}
                                onClick={onBooleanChange}/>
                    </p>
                </div>
            );
        }
    }

    return renderForm();
};