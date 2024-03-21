import type { Meta, StoryObj } from '@storybook/react';
import { NoteAttrEditor } from '../NoteAttrEditor';
import { Attr, Note, Space, Tag } from 'notu';
import 'bulma';

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
        tags: [],
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
        tags: [],
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
        tags: [],
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
        tags: [],
        onRemove: () => {
            console.log('Requested to remove NoteAttr');
        }
    }
}

export const CanAddTag: Story = {
    args: {
        noteAttr: (() => {
            const attr = new Attr('Test').in(space1).asNumber().clean();
            attr.id = 123;
            return new Note('Test').clean().addAttr(attr);
        })(),
        contextSpaceId: 1,
        tags: (() => {
            const tag1 = new Tag('Tag1', space1.id);
            tag1.id = 123;
            tag1.space = space1;
            const tag2 = new Tag('Tag2', space2.id);
            tag2.id = 234;
            tag2.space = space2;
            return [tag1.clean(), tag2.clean()];
        })(),
        onRemove: noteAttr => {
            console.log('Requested to remove NoteAttr', noteAttr);
        }
    }
}

export const DisplaysPreviouslySelectedTagCorrectly: Story = {
    args: {
        noteAttr: (() => {
            const attr = new Attr('Test').in(space1).asNumber().clean();
            attr.id = 123;
            return new Note('Test').clean().addAttr(attr).onTag(234);
        })(),
        contextSpaceId: 1,
        tags: (() => {
            const tag1 = new Tag('Tag1', space1.id);
            tag1.id = 123;
            tag1.space = space1;
            const tag2 = new Tag('Tag2', space2.id);
            tag2.id = 234;
            tag2.space = space2;
            return [tag1.clean(), tag2.clean()];
        })(),
        onRemove: noteAttr => {
            console.log('Requested to remove NoteAttr', noteAttr);
        }
    }
}