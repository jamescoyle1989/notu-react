import type { Meta, StoryObj } from '@storybook/react';
import { AttrEditor } from '../AttrEditor';
import { Attr, Space } from 'notu';
import { MockHttpClient } from '../helpers/MockHttpClient';
import { newSpace } from './StoryHelpers';

const meta: Meta<typeof AttrEditor> = {
    title: 'AttrEditor',
    component: AttrEditor,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof meta>;


const space1 = newSpace('Space 1', 1).clean();

const notuClient = new MockHttpClient();


export const Primary: Story = {
    args: {
        notuClient: notuClient as any,
        attr: new Attr('Test').in(space1),
        onConfirm: attr => {
            console.log('Confirm clicked', attr);
            return Promise.resolve(true);
        }
    }
}


export const ShowsErrorMessageOnConfirm: Story = {
    args: {
        notuClient: notuClient as any,
        attr: new Attr('Test').in(space1),
        onConfirm: attr => {
            console.log('Confirm clicked', attr);
            throw Error('Something went wrong')
        }
    }
}