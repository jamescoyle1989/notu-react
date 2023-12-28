import type { Meta, StoryObj } from '@storybook/react';
import { NoteAttrEditor } from '../NoteAttrEditor';
import { Attr, Note, Space } from 'notu';
import 'purecss';

const meta = {
    title: 'NoteAttrEditor',
    component: NoteAttrEditor,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
} satisfies Meta<typeof NoteAttrEditor>;
export default meta;

type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {
        noteAttr: (() => {
            const attr = new Attr('Test').in(1).asText().clean();
            attr.id = 123;
            return new Note('Test').in(1).clean().addAttr(attr).withValue('abc');
        })(),
        spaces: (() => {
            const space1 = new Space('Test Space').clean();
            space1.id = 1;
            return [space1];
        })(),
        onRemove: () => {
            console.log('Requested to remove NoteAttr');
        }
    }
}

export const DateAttr: Story = {
    args: {
        noteAttr: (() => {
            const attr = new Attr('Test').in(1).asDate().clean();
            attr.id = 123;
            return new Note('Test').in(1).clean().addAttr(attr).withValue(new Date(2023, 3, 4));
        })(),
        spaces: (() => {
            const space1 = new Space('Test Space').clean();
            space1.id = 1;
            return [space1];
        })(),
        onRemove: () => {
            console.log('Requested to remove NoteAttr');
        }
    }
}

export const BooleanAttr: Story = {
    args: {
        noteAttr: (() => {
            const attr = new Attr('Test').in(1).asBoolean().clean();
            attr.id = 123;
            return new Note('Test').in(1).clean().addAttr(attr);
        })(),
        spaces: (() => {
            const space1 = new Space('Test Space').clean();
            space1.id = 1;
            return [space1];
        })(),
        onRemove: () => {
            console.log('Requested to remove NoteAttr');
        }
    }
}

export const NumberAttr: Story = {
    args: {
        noteAttr: (() => {
            const attr = new Attr('Test').in(1).asNumber().clean();
            attr.id = 123;
            return new Note('Test').in(1).clean().addAttr(attr);
        })(),
        spaces: (() => {
            const space1 = new Space('Test Space').clean();
            space1.id = 1;
            return [space1];
        })(),
        onRemove: () => {
            console.log('Requested to remove NoteAttr');
        }
    }
}