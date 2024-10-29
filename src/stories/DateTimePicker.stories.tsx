import type { Meta, StoryObj } from '@storybook/react';
import { DateTimePicker } from '../DateTimePicker';
import React, { useState } from 'react';

const meta: Meta<typeof DateTimePicker> = {
    title: 'DateTimePicker',
    component: DateTimePicker,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        value: new Date(),
        onChange: d => console.log(d)
    }
};

export const UpdatesToReflectNonUiInitiatedValueChange: Story = {
    render: () => {
        const [date, setDate] = useState(new Date());

        function onDateChange(value: Date) {
            setDate(value);
            console.log(`Value changed from UI: ${value}`);
        }

        function onButtonClick() {
            let newDate = new Date(date);
            newDate.setDate(newDate.getDate() + 1);
            newDate.setHours(11, 59);
            setDate(newDate);
            console.log(`Value changed from code: ${newDate}`);
        }

        return (<div>
            <p>Current value: {date.toLocaleString()}</p>
            <DateTimePicker value={date} onChange={onDateChange}/>
            <button onClick={onButtonClick}>Change Date To Tomorrow Almost Midnight</button>
        </div>);
    }
};

export const DateOnly: Story = {
    args: {
        value: new Date(),
        onChange: d => console.log(d),
        showTime: false
    }
};