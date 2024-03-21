import type { Meta, StoryObj } from '@storybook/react';
import { SpaceEditor } from '../SpaceEditor';
import { Space } from 'notu';
import { MockHttpClient } from '../helpers/MockHttpClient';

const meta: Meta<typeof SpaceEditor> = {
    title: 'SpaceEditor',
    component: SpaceEditor,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof meta>;


const notuClient = new MockHttpClient();


export const Primary: Story = {
    args: {
        notuClient: notuClient as any,
        space: new Space('Test'),
        onConfirm: () => {
            console.log('Confirm clicked');
            return Promise.resolve(true);
        }
    }
};


export const ShowsErrorMessageOnConfirm: Story = {
    args: {
        notuClient: notuClient as any,
        space: new Space(),
        onConfirm: space => {
            console.log('Confirm clicked', space);
            throw Error('Something went wrong!');
        }
    }
};