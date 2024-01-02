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



export const Primary: Story = {
    args: {
        noteAttr: (() => {
            const attr = new Attr('Test').asNumber().clean();
            attr.id = 123;
            return new Note().in(1).addAttr(attr).withValue(15);
        })(),
        contextSpaceId: 1,
        onDelete: null
    }
};

export const WithDeleteButton: Story = {
    args: {
        noteAttr: (() => {
            const attr = new Attr('Test').asNumber().clean();
            attr.id = 123;
            return new Note().in(1).addAttr(attr).withValue(15);
        })(),
        contextSpaceId: 1,
        onDelete: () => { console.log('Delete clicked'); }
    }
};

export const ShowsSpaceNameIfRequired: Story = {
    args: {
        noteAttr: (() => {
            const attr = new Attr('Test').asNumber().clean();
            attr.id = 123;
            const space = new Space('Space 2').clean();
            space.id = 2;
            return new Note().in(space).addAttr(attr).withValue(15);
        })(),
        contextSpaceId: 1,
        onDelete: null
    }
}