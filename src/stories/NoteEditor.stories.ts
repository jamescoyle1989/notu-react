import type { Meta, StoryObj } from '@storybook/react';
import { NoteEditor } from '../NoteEditor';
import { Attr, Note, Space, Tag } from 'notu';
import { MockHttpClient } from '../helpers/MockHttpClient';

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


const space1 = new Space('Space 1').clean();
space1.id = 1;
const space2 = new Space('Space 2').clean();
space2.id = 2;

const tag1 = new Tag('Tag 1').in(space1);
tag1.id = 1;
tag1.space = space1;
tag1.clean();
const tag2 = new Tag('Tag 2').in(space2);
tag2.id = 2;
tag2.space = space2;
tag2.clean();

const attr1 = new Attr('Text Attr').in(space1).asText().clean();
attr1.id = 1;
const attr2 = new Attr('Date Attr').in(space1).asDate().clean();
attr2.id = 2;

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


export const ShowsErrorIfNoteDoesntSetSpace: Story = {
    args: {
        notuClient: notuClient as any,
        note: new Note('hello'),
        tags: [tag1, tag2],
        attrs: [attr1, attr2],
        onConfirm: note => {
            console.log('Confirm Clicked', note);
            return Promise.resolve(true);
        },
        onCancel: note => { console.log('Cancel Clicked'); },
        onSave: note => { console.log('Note saved'); }
    }
}


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