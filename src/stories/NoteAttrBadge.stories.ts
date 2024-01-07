import type { Meta, StoryObj } from '@storybook/react';
import { NoteAttrBadge } from '../NoteAttrBadge';
import { Note, Space, Attr } from 'notu';

const meta = {
    title: 'NoteAttrBadge',
    component: NoteAttrBadge,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof NoteAttrBadge>;
export default meta;

type Story = StoryObj<typeof meta>;


const space1 = new Space('Space 1').clean();
space1.id = 1;
const space2 = new Space('Space 2').clean();
space2.id = 2;


export const Primary: Story = {
    args: {
        noteAttr: (() => {
            const attr = new Attr('Test').in(space1).asNumber().clean();
            attr.id = 123;
            return new Note().addAttr(attr).withValue(15);
        })(),
        contextSpaceId: 1,
        onDelete: null
    }
};

export const WithDeleteButton: Story = {
    args: {
        noteAttr: (() => {
            const attr = new Attr('Test').in(space1).asNumber().clean();
            attr.id = 123;
            return new Note().addAttr(attr).withValue(15);
        })(),
        contextSpaceId: 1,
        onDelete: () => { console.log('Delete clicked'); }
    }
};

export const ShowsSpaceNameIfRequired: Story = {
    args: {
        noteAttr: (() => {
            const attr = new Attr('Test').in(space2).asNumber().clean();
            attr.id = 123;
            return new Note().addAttr(attr).withValue(15);
        })(),
        contextSpaceId: 1,
        onDelete: null
    }
}