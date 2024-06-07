import type { Meta, StoryObj } from '@storybook/react';
import { NoteViewer, NoteViewerAction } from '../NoteViewer';
import { Note } from 'notu';
import { newAttr, newSpace, newTag } from './StoryHelpers';
import { noteTextSplitter } from '../helpers/NoteComponentHelpers';

const meta: Meta<typeof NoteViewer> = {
    title: 'NoteViewer',
    component: NoteViewer,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof meta>;


const space1 = newSpace('Space 1', 1).clean();

const tag1 = newTag('Tag 1', 1).in(space1);
tag1.color = '#FF0000';
tag1.clean();

const attr1 = newAttr('Attr 1', 1).in(space1).asNumber().clean();


export const Primary: Story = {
    args: {
        note: (() => {
            const output = new Note('Test test')
                .in(space1)
                .at(new Date(2023, 11, 18))
                .setOwnTag('My Tag');
            output.ownTag.color = '#0000FF';
            output.addAttr(attr1, 12345);
            output.addTag(tag1).addAttr(attr1, 23456);
            return output;
        })(),
        actions: [
            new NoteViewerAction('Say Hello', n => console.log('Hello')),
            new NoteViewerAction('Say Goodbye', n => console.log('Goodbye'))
        ],
        isSelected: true,
        noteTextSplitter: noteTextSplitter
    }
};


export const NoActions: Story = {
    args: {
        note: (() => {
            const output = new Note('Test test')
                .in(space1)
                .at(new Date(2023, 11, 18))
                .setOwnTag('My Tag');
            output.ownTag.color = '#0000FF';
            output.addTag(tag1);
            return output;
        })(),
        actions: [],
        isSelected: true,
        noteTextSplitter: noteTextSplitter
    }
}


export const CanHideDate: Story = {
    args: {
        note: (() => {
            const output = new Note('Test test')
                .in(space1)
                .at(new Date(2023, 11, 18))
                .setOwnTag('My Tag');
            output.ownTag.color = '#0000FF';
            output.addTag(tag1);
            return output;
        })(),
        actions: [],
        isSelected: true,
        showDate: false,
        noteTextSplitter: noteTextSplitter
    }
}


export const DisplaysNewLinesCorrectly: Story = {
    args: {
        note: (() => {
            const output = new Note('Test test \n\n and another test test')
                .in(space1)
            return output;
        })(),
        actions: [],
        isSelected: true,
        showDate: true,
        noteTextSplitter: noteTextSplitter
    }
}


export const DisplaysChecklistsCorrectly: Story = {
    args: {
        note: (() => {
            const output = new Note('Test test \n\n<Checklist>\n✔ Swim\nFight bear\n</Checklist>')
                .in(space1)
            return output;
        })(),
        actions: [],
        isSelected: true,
        showDate: true,
        noteTextSplitter: noteTextSplitter
    }
}