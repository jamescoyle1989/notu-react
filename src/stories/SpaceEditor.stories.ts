import type { Meta, StoryObj } from '@storybook/react';
import { SpaceEditor } from '../SpaceEditor';
import { Space } from 'notu';

const meta = {
    title: 'SpaceEditor',
    component: SpaceEditor,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
} satisfies Meta<typeof SpaceEditor>;
export default meta;

type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {
        space: new Space('Test'),
        onConfirm: () => {
            console.log('Confirm clicked');
            return null;
        }
    }
};


export const ShowsErrorMessageOnConfirm: Story = {
    args: {
        space: new Space(),
        onConfirm: () => {
            console.log('Confirm clicked');
            return 'Name already exists';
        }
    }
};