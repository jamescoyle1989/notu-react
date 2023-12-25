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
            const na = new Note().in(1).addAttr(attr);
            na.value = 15;
            return na;
        })(),
        spaces: (() => {
            const space1 = new Space('Test Space').clean();
            space1.id = 1;
            return [space1];
        })(),
        onDelete: null
    }
};

export const WithDeleteButton: Story = {
    args: {
        noteAttr: (() => {
            const attr = new Attr('Test').asNumber().clean();
            attr.id = 123;
            const na = new Note().in(1).addAttr(attr);
            na.value = 15;
            return na;
        })(),
        spaces: (() => {
            const space1 = new Space('Test Space').clean();
            space1.id = 1;
            return [space1];
        })(),
        onDelete: () => { console.log('Delete clicked'); }
    }
};