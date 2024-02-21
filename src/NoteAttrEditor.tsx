import React from 'react';
import { NoteAttr } from 'notu';
import { useState } from 'react';

interface NoteAttrEditorProps {
    noteAttr: NoteAttr,
    contextSpaceId: number,
    onRemove: () => void
}


export const NoteAttrEditor = ({
    noteAttr,
    contextSpaceId,
    onRemove
}: NoteAttrEditorProps) => {
    const [value, setValue] = useState(noteAttr.value);

    function getAttrName(): string {
        if (noteAttr.attr.spaceId == contextSpaceId)
            return noteAttr.attr.name;
        return `${noteAttr.attr.space.name}.${noteAttr.attr.name}`;
    }

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

    function renderLabelPortion() {
        return (
            <p className="control">
                <a className="button is-static">
                    {getAttrName()}
                    <button className="delete ml-2" onClick={onRemove}></button>
                </a>
            </p>
        );
    }

    function renderForm() {
        if (noteAttr.attr.isText) {
            return (
                <div className="field has-addons">
                    {renderLabelPortion()}
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
                    <p className="control">
                        <button className={`button ${noteAttr.value ? 'is-success' : 'is-danger'}`}
                                onClick={onBooleanChange}/>
                    </p>
                </div>
            );
        }
    }

    return renderForm();
};