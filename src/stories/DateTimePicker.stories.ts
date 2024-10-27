import type { Meta, StoryObj } from '@storybook/react';
import { DateTimePicker } from '../DateTimePicker';

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