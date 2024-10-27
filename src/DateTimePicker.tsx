import React, { useState } from 'react';
import 'bulma';

interface DateTimePicker {
    value: Date,
    onChange: (date: Date) => void
}


export const DateTimePicker = ({ value, onChange }: DateTimePicker) => {

    const [dateStr, setDateStr] = useState(`${value.getFullYear()}-${(value.getMonth() + 1).toString().padStart(2, '0')}-${value.getDate().toString().padStart(2, '0')}`);
    const [timeStr, setTimeStr] = useState(`${value.getHours().toString().padStart(2, '0')}:${value.getMinutes().toString().padStart(2, '0')}`);

    function onDateChange(evt) {
        const val = evt.target.value;
        if (!val)
            return;
        setDateStr(val);
        emitChange(val, timeStr);
    }

    function onTimeChange(evt) {
        const val = evt.target.value;
        if (!val)
            return;
        setTimeStr(val);
        emitChange(dateStr, val);
    }

    function emitChange(dStr: string, tStr: string): void {
        if (!!onChange)
            onChange(new Date(`${dStr}T${tStr}`));
    }

    return (<div className="field has-addons">
        <p className="control">
            <input type="date" className="input" value={dateStr} onChange={onDateChange}></input>
        </p>
        <p className="control">
            <input type="time" className="input" value={timeStr} onChange={onTimeChange}></input>
        </p>
    </div>);
}