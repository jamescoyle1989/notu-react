import type { Meta, StoryObj } from '@storybook/react';
import { NoteAttrBadge } from '../NoteAttrBadge';
import { Note, Space, Attr, Tag } from 'notu';
import { newAttr, newSpace, newTag } from './StoryHelpers';

const meta: Meta<typeof NoteAttrBadge> = {
    title: 'NoteAttrBadge',
    component: NoteAttrBadge,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof meta>;


const space1 = newSpace('Space 1', 1).clean();

const numAttr = newAttr('Num', 1).in(space1).asNumber().clean();
const boolAttr = newAttr('Bool', 2).in(space1).asBoolean().clean();
const dateAttr = newAttr('Date', 3).in(space1).asDate().clean();

const tag = newTag('Tag', 1).in(space1).clean();


export const Primary: Story = {
    args: {
        noteAttr: (() => {
            const attr = new Attr('Test').in(space1).asNumber().clean();
            attr.id = 123;
            const note = new Note().addAttr(attr, 15);
            return note.getAttr(attr);
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
            const note = new Note().addAttr(attr, 15);
            return note.getAttr(attr);
        })(),
        contextSpaceId: 1,
        onDelete: () => { console.log('Delete clicked'); }
    }
};

export const OnTag: Story = {
    args: {
        noteAttr: (() => {
            const nt = new Note().addTag(tag).addAttr(numAttr, 15);
            return nt.getAttr(numAttr);
        })(),
        contextSpaceId: 1,
        onDelete: () => { console.log('Delete clicked'); }
    }
}

export const ForBooleanValue: Story = {
    args: {
        noteAttr: (() => {
            const note = new Note().addAttr(boolAttr, false);
            return note.getAttr(boolAttr);
        })(),
        contextSpaceId: 1,
        onDelete: () => { console.log('Delete clicked'); }
    }
}

export const ForDateValue: Story = {
    args: {
        noteAttr: (() => {
            const note = new Note().addAttr(dateAttr, new Date(2024, 6, 5, 17, 23, 46));
            return note.getAttr(dateAttr);
        })(),
        contextSpaceId: 1,
        onDelete: () => { console.log('Delete clicked'); }
    }
}