import { NoteAttr } from 'notu';
import { useState } from 'react';
import style from './NoteAttrEditor.module.css';

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

    function onBooleanChange(event): void {
        noteAttr.value = event.target.checked;
        setValue(noteAttr.value);
    }

    function renderInput() {
        if (noteAttr.attr.isText)
            return (<input type="text" value={noteAttr.value} onChange={onValueChange}/>);

        if (noteAttr.attr.isDate) {
            const date = noteAttr.value.toISOString().split('T')[0];
            const time = noteAttr.value.toTimeString().split(' ')[0].substring(0, 5);
            return (<div className={style.dateTimeContainer}>
                <input type="date" value={date} onChange={evt => onDateChange(evt, time)}></input>
                <input type="time" value={time} onChange={evt => onTimeChange(evt, date)}></input>
            </div>);
        }

        if (noteAttr.attr.isNumber)
            return (<input type="number" value={noteAttr.value} onChange={onValueChange}/>);

        if (noteAttr.attr.isBoolean)
            return (<input type="checkbox" checked={noteAttr.value} onChange={onBooleanChange}/>);
    }

    return (
        <div className="pure-control-group">
            <label>{getAttrName()}</label>
            {renderInput()}
            <button onClick={onRemove}>X</button>
        </div>
    );
};