import type { Meta, StoryObj } from '@storybook/react';
import { NoteAttrEditor } from '../NoteAttrEditor';
import { Attr, Note, Space, Tag } from 'notu';
import 'bulma';
import { newAttr, newSpace, newTag } from './StoryHelpers';

const meta: Meta<typeof NoteAttrEditor> = {
    title: 'NoteAttrEditor',
    component: NoteAttrEditor,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof meta>;


const space1 = newSpace('Space 1', 1).clean();
const space2 = newSpace('Space 2', 2).clean();

const attr = newAttr('Test', 123).in(space1).asText().clean();

const tag1 = newTag('Tag 1', 123).in(space1).clean();
const tag2 = newTag('Tag 2', 234).in(space2).clean();


export const Primary: Story = {
    args: {
        noteAttr: (() => {
            const note = new Note('Test').in(space1).clean().addAttr(attr, 'abc');
            return note.getAttr(attr);
        })(),
        contextSpaceId: 1,
        tags: [],
        onRemove: () => {
            console.log('Requested to remove NoteAttr');
        }
    }
}

export const DateAttr: Story = {
    args: {
        noteAttr: (() => {
            const note = new Note('Test').in(space1).clean().addAttr(attr, new Date(2023, 3, 4));
            return note.getAttr(attr);
        })(),
        contextSpaceId: 1,
        tags: [],
        onRemove: () => {
            console.log('Requested to remove NoteAttr');
        }
    }
}

export const BooleanAttr: Story = {
    args: {
        noteAttr: (() => {
            const note = new Note('Test').in(space1).clean().addAttr(attr);
            return note.getAttr(attr);
        })(),
        contextSpaceId: 1,
        tags: [],
        onRemove: () => {
            console.log('Requested to remove NoteAttr');
        }
    }
}

export const NumberAttr: Story = {
    args: {
        noteAttr: (() => {
            const note = new Note('Test').in(space1).clean().addAttr(attr);
            return note.getAttr(attr);
        })(),
        contextSpaceId: 1,
        tags: [],
        onRemove: () => {
            console.log('Requested to remove NoteAttr');
        }
    }
}

export const CanAddTag: Story = {
    args: {
        noteAttr: (() => {
            const note = new Note('Test').in(space1).clean().addAttr(attr);
            return note.getAttr(attr);
        })(),
        contextSpaceId: 1,
        tags: [tag1, tag2],
        onRemove: noteAttr => {
            console.log('Requested to remove NoteAttr', noteAttr);
        }
    }
}

export const DisplaysPreviouslySelectedTagCorrectly: Story = {
    args: {
        noteAttr: (() => {
            const nt = new Note('Test').in(space1).clean().addTag(tag1).addAttr(attr);
            return nt.getAttr(attr);
        })(),
        contextSpaceId: 1,
        tags: [tag1, tag2],
        onRemove: noteAttr => {
            console.log('Requested to remove NoteAttr', noteAttr);
        }
    }
}