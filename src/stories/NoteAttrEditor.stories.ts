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
const boolAttr = newAttr('Bool Test', 234).asBoolean().clean();
const dateAttr = newAttr('Date Attr', 345).asDate().clean();
const numberAttr = newAttr('Number Attr', 456).asNumber().clean();

const tag1 = newTag('Tag 1', 123).in(space1).clean();
const tag2 = newTag('Tag 2', 234).in(space2).clean();


export const Primary: Story = {
    args: {
        noteAttr: (() => {
            const note = new Note('Test').in(space1).clean().addAttr(attr, 'abc');
            return note.getAttr(attr);
        })(),
        onRemove: () => console.log('Requested to remove NoteAttr'),
        onChanged: na => console.log('Text changed')
    }
}

export const DateAttr: Story = {
    args: {
        noteAttr: (() => {
            const note = new Note('Test').in(space1).clean().addAttr(dateAttr, new Date(2023, 3, 4));
            return note.getAttr(dateAttr);
        })(),
        onRemove: () => console.log('Requested to remove NoteAttr'),
        onChanged: na => console.log('Date changed')
    }
}

export const BooleanAttr: Story = {
    args: {
        noteAttr: (() => {
            const note = new Note('Test').in(space1).clean().addAttr(boolAttr);
            return note.getAttr(boolAttr);
        })(),
        onRemove: () => console.log('Requested to remove NoteAttr'),
        onChanged: na => console.log('Boolean changed')
    }
}

export const NumberAttr: Story = {
    args: {
        noteAttr: (() => {
            const note = new Note('Test').in(space1).clean().addAttr(numberAttr);
            return note.getAttr(numberAttr);
        })(),
        onRemove: () => console.log('Requested to remove NoteAttr'),
        onChanged: na => console.log('Number changed')
    }
}