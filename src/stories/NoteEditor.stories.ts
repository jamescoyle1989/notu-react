import type { Meta, StoryObj } from '@storybook/react';
import { NoteEditor } from '../NoteEditor';
import { Attr, Note, Space, Tag } from 'notu';
import { MockHttpClient } from '../helpers/MockHttpClient';
import { newAttr, newSpace, newTag } from './StoryHelpers';

const meta: Meta<typeof NoteEditor> = {
    title: 'NoteEditor',
    component: NoteEditor,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof meta>;


const space1 = newSpace('Space 1', 1).clean();
const space2 = newSpace('Space 2', 2).clean();

const tag1 = newTag('Tag 1', 1).in(space1).clean();
const tag2 = newTag('Tag 2', 2).in(space2).clean();

const attr1 = newAttr('Text Attr', 1).in(space1).asText().clean();
const attr2 = newAttr('Date Attr', 2).in(space1).asDate().clean();

const notuClient = new MockHttpClient();


export const Primary: Story = {
    args: {
        notuClient: notuClient as any,
        note: new Note('hello')
            .in(space1)
            .at(new Date(1987, 6, 5, 4, 3, 2)),
        tags: [tag1, tag2],
        attrs: [attr1, attr2],
        onConfirm: note => {
            console.log('Confirm Clicked', note);
            return Promise.resolve(true);
        },
        onCancel: note => { console.log('Cancel Clicked'); },
        onSave: note => { console.log('Note saved'); }
    }
};


export const DisplaysErrorMessageOnFailedConfirm: Story = {
    args: {
        notuClient: notuClient as any,
        note: new Note('hello')
            .in(space1)
            .at(new Date(1987, 6, 5, 4, 3, 2)),
        tags: [tag1, tag2],
        attrs: [attr1, attr2],
        onConfirm: note => {
            console.log('Confirm Clicked', note);
            throw new Error('This note is crap, try again!');
        },
        onCancel: note => { console.log('Cancel Clicked'); },
        onSave: note => { console.log('Note saved'); }
    }
};


export const DoesntCallNotuClientIfOnConfirmReturnsFalse: Story = {
    args: {
        notuClient: notuClient as any,
        note: new Note('hello')
            .in(space1)
            .at(new Date(1987, 6, 5, 4, 3, 2)),
        tags: [tag1, tag2],
        attrs: [attr1, attr2],
        onConfirm: note => {
            console.log('Confirm Clicked', note);
            return Promise.resolve(false);
        },
        onCancel: note => { console.log('Cancel Clicked'); },
        onSave: note => { console.log('Note saved'); }
    }
};


export const AllowsRemovalOfAttrsFromSavedNote: Story = {
    args: {
        notuClient: notuClient as any,
        note: (() => {
            const output = new Note('Hello').in(space1);
            output.id = 123;
            output.addAttr(attr1, 'Woo woo');
            output.getAttr(attr1).clean();
            output.clean();
            return output;
        })(),
        tags: [tag1, tag2],
        attrs: [attr1, attr2],
        onConfirm: note => {
            console.log('Confirm Clicked', note);
            return Promise.resolve(false);
        },
        onCancel: note => { console.log('Cancel Clicked'); },
        onSave: note => { console.log('Note saved'); }
    }
}