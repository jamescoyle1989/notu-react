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


const space1 = new Space('Space 1').clean();
space1.id = 1;
const space2 = new Space('Space 2').clean();
space2.id = 2;


export const Primary: Story = {
    args: {
        noteAttr: (() => {
            const attr = new Attr('Test').in(space1).asText().clean();
            attr.id = 123;
            return new Note('Test').clean().addAttr(attr).withValue('abc');
        })(),
        contextSpaceId: 1,
        onRemove: () => {
            console.log('Requested to remove NoteAttr');
        }
    }
}

export const DateAttr: Story = {
    args: {
        noteAttr: (() => {
            const attr = new Attr('Test').in(space1).asDate().clean();
            attr.id = 123;
            return new Note('Test').clean().addAttr(attr).withValue(new Date(2023, 3, 4));
        })(),
        contextSpaceId: 1,
        onRemove: () => {
            console.log('Requested to remove NoteAttr');
        }
    }
}

export const BooleanAttr: Story = {
    args: {
        noteAttr: (() => {
            const attr = new Attr('Test').in(space1).asBoolean().clean();
            attr.id = 123;
            return new Note('Test').clean().addAttr(attr);
        })(),
        contextSpaceId: 1,
        onRemove: () => {
            console.log('Requested to remove NoteAttr');
        }
    }
}

export const NumberAttr: Story = {
    args: {
        noteAttr: (() => {
            const attr = new Attr('Test').in(space1).asNumber().clean();
            attr.id = 123;
            return new Note('Test').clean().addAttr(attr);
        })(),
        contextSpaceId: 1,
        onRemove: () => {
            console.log('Requested to remove NoteAttr');
        }
    }
}

export const ShowsSpaceName: Story = {
    args: {
        noteAttr: (() => {
            const attr = new Attr('Test').in(space2).asNumber().clean();
            attr.id = 123;
            return new Note('Test').clean().addAttr(attr);
        })(),
        contextSpaceId: 1,
        onRemove: () => {
            console.log('Requested to remove NoteAttr');
        }
    }
}