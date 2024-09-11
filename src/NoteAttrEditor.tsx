import React, { useRef } from 'react';
import { NoteAttr, Tag } from 'notu';
import { useState } from 'react';

interface NoteAttrEditorProps {
    noteAttr: NoteAttr,
    onRemove: (noteAttr: NoteAttr) => void,
    onChanged?: (noteAttr: NoteAttr) => void
}


export const NoteAttrEditor = ({
    noteAttr,
    onRemove,
    onChanged
}: NoteAttrEditorProps) => {
    const [value, setValue] = useState(noteAttr.value);
    const dateRef = useRef();
    const timeRef = useRef();

    function onValueChange(event): void {
        noteAttr.value = event.target.value;
        setValue(noteAttr.value);
        if (!!onChanged)
            onChanged(noteAttr);
    }

    function updateDateTimeValue(): void {
        if (!!dateRef.current && !!timeRef.current) {
            const newDate = (dateRef.current as any).value;
            const newTime = (timeRef.current as any).value;
            noteAttr.value = new Date(`${newDate} ${newTime}`);
            setValue(noteAttr.value);
            if (!!onChanged)
                onChanged(noteAttr);
        }
    }

    function onBooleanChange(): void {
        noteAttr.value = !noteAttr.value;
        setValue(noteAttr.value);
        if (!!onChanged)
            onChanged(noteAttr);
    }

    function renderLabelPortion() {
        return (
            <p className="control">
                <a className="button is-static">
                    {noteAttr.attr.name}
                    <button type="button" className="delete ml-2" onClick={() => onRemove(noteAttr)}></button>
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
            const dt = noteAttr.value as Date;
            const date = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}-${dt.getDate().toString().padStart(2, '0')}`;
            const time = `${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}`;
            return (
                <div className="field has-addons">
                    {renderLabelPortion()}
                    <p className="control">
                        <input ref={dateRef} type="date" className="input" defaultValue={date} onBlur={updateDateTimeValue}></input>
                    </p>
                    <p className="control">
                        <input ref={timeRef} type="time" className="input" defaultValue={time} onBlur={updateDateTimeValue}></input>
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
                        <button type="button" className={`button ${noteAttr.value ? 'is-success' : 'is-danger'}`}
                                onClick={onBooleanChange}/>
                    </p>
                </div>
            );
        }
    }

    return renderForm();
};