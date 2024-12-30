import type { Meta, StoryObj } from '@storybook/react';
import { NoteEditor } from '../NoteEditor';
import { Note } from 'notu';
import { MockHttpClient } from '../helpers/MockHttpClient';
import { newSpace, newTag } from './StoryHelpers';
import { TestNoteTagDataComponentFactory } from './ReactSnippets';
import { NotuRenderTools } from '../helpers/NotuRender';

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

const tag1 = newTag('Tag 1', 1).in(space1);
tag1.color = '#FF8800';
tag1.clean();
const tag2 = newTag('Tag 2', 2).in(space2).asPublic();
tag2.color = '#112211';
tag2.clean();

const notu = new MockHttpClient();

const renderTools = new NotuRenderTools(notu as any, null, t => null);


export const Primary: Story = {
    args: {
        notuRenderTools: renderTools,
        note: new Note('hello')
            .in(space1)
            .at(new Date(1987, 6, 5, 4, 3, 2)),
        tags: [tag2, tag1],
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
        notuRenderTools: renderTools,
        note: new Note('hello')
            .in(space1)
            .at(new Date(1987, 6, 5, 4, 3, 2)),
        tags: [tag1, tag2],
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
        notuRenderTools: renderTools,
        note: new Note('hello')
            .in(space1)
            .at(new Date(1987, 6, 5, 4, 3, 2)),
        tags: [tag1, tag2],
        onConfirm: note => {
            console.log('Confirm Clicked', note);
            return Promise.resolve(false);
        },
        onCancel: note => { console.log('Cancel Clicked'); },
        onSave: note => { console.log('Note saved'); }
    }
};


export const DisplaysCorrectDateLateAtNightCanadianTime: Story = {
    args: {
        notuRenderTools: renderTools,
        note: (() => {
            const output = new Note('Hello').in(space1).at(new Date(2024, 8, 10, 23, 30));
            output.id = 123;
            return output;
        })(),
        tags: [tag1, tag2],
        onConfirm: note => {
            console.log('Confirm Clicked', note);
            return Promise.resolve(false);
        },
        onCancel: note => { console.log('Cancel Clicked'); },
        onSave: note => { console.log('Note saved'); }
    }
};


export const EditorSupportsNoteTagDataComponent: Story = {
    args: {
        notuRenderTools: new NotuRenderTools(notu as any, null, t => {
            if (t == tag1)
                return new TestNoteTagDataComponentFactory();
        }),
        note: (() => {
            const output = new Note('Hello').in(space1);
            output.addTag(tag1).withData({name: 'Barnabus'});
            output.id = 123;
            return output;
        })(),
        tags: [tag1, tag2],
        onConfirm: note => {
            console.log('Confirm Clicked', note);
            return Promise.resolve(false);
        },
        onCancel: note => { console.log('Cancel Clicked'); },
        onSave: note => { console.log('Note saved'); }
    }
};


export const EditorSupportsAddingNewNoteTagDataComponent: Story = {
    args: {
        notuRenderTools: new NotuRenderTools(notu as any, null, t => {
            if (t == tag1)
                return new TestNoteTagDataComponentFactory();
        }),
        note: (() => {
            const output = new Note('Add Tag 1 to this note').in(space1);
            output.id = 123;
            return output;
        })(),
        tags: [tag1, tag2],
        onConfirm: note => {
            console.log('Confirm Clicked', note);
            return Promise.resolve(false);
        },
        onCancel: note => { console.log('Cancel Clicked'); },
        onSave: note => { console.log('Note saved'); }
    }
};


export const CanSetOwnTagModeToRequired: Story = {
    args: {
        notuRenderTools: renderTools,
        note: new Note('hello')
            .in(space1)
            .at(new Date(1987, 6, 5, 4, 3, 2)),
        tags: [tag2, tag1],
        ownTagMode: 'Required',
        onConfirm: note => {
            console.log('Confirm Clicked', note);
            return Promise.resolve(true);
        },
        onCancel: note => { console.log('Cancel Clicked'); },
        onSave: note => { console.log('Note saved'); }
    }
};


export const CanSetOwnTagModeToNone: Story = {
    args: {
        notuRenderTools: renderTools,
        note: new Note('hello')
            .in(space1)
            .at(new Date(1987, 6, 5, 4, 3, 2)),
        tags: [tag2, tag1],
        ownTagMode: 'None',
        onConfirm: note => {
            console.log('Confirm Clicked', note);
            return Promise.resolve(true);
        },
        onCancel: note => { console.log('Cancel Clicked'); },
        onSave: note => { console.log('Note saved'); }
    }
};