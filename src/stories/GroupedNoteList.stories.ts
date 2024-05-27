import type { Meta, StoryObj } from '@storybook/react';
import { GroupedNoteList } from '../GroupedNoteList';
import { Note, Space } from 'notu';
import { NoteViewerAction, NoteViewer } from '../NoteViewer';
import { noteViewerWithoutDate } from './ReactSnippets';
import { newSpace } from './StoryHelpers';

const meta: Meta<typeof GroupedNoteList> = {
    title: 'GroupedNoteList',
    component: GroupedNoteList,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof meta>;


const space1 = newSpace('Space 1', 1).clean();


export const Primary: Story = {
    args: {
        notes: (() => {
            const note1 = new Note('I am a first note').in(space1)
                .at(new Date(2000 + Math.floor(Math.random() * 50), 0, 14, 20, 6));
            note1.id = 123;
            const note2 = new Note('And I\'m another note').in(space1)
                .at(new Date(2000 + Math.floor(Math.random() * 50), 0, 15, 21, 15))
            note2.id = 124;
            return [note1, note2];
        })(),
        actionsGenerator: note => [
            new NoteViewerAction('Do something', async n => Promise.resolve(true))
        ],
        groupBy: n => n.date.getDay(),
        groupHeader: (key, notes) => {
            const day = Number(key);
            return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
        }
    }
}


export const CanShowNotesWithoutDates: Story = {
    args: {
        notes: (() => {
            const note1 = new Note('I am a first note').in(space1)
                .at(new Date(2000 + Math.floor(Math.random() * 50), 0, 14, 20, 6));
            note1.id = 123;
            const note2 = new Note('And I\'m another note').in(space1)
                .at(new Date(2000 + Math.floor(Math.random() * 50), 0, 15, 21, 15))
            note2.id = 124;
            return [note1, note2];
        })(),
        actionsGenerator: note => [
            new NoteViewerAction('Do something', async n => Promise.resolve(true))
        ],
        groupBy: n => n.date.getDay(),
        groupHeader: (key, notes) => {
            const day = Number(key);
            return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
        },
        noteViewer: (note, actions, isSelected) => noteViewerWithoutDate(note, actions, isSelected)
    }
}


export const CanAddGroupsThatNoNoteSatisfies: Story = {
    args: {
        notes: (() => {
            const note1 = new Note('I am a first note').in(space1)
                .at(new Date(2000 + Math.floor(Math.random() * 50), 0, 14, 20, 6));
            note1.id = 123;
            const note2 = new Note('And I\'m another note').in(space1)
                .at(new Date(2000 + Math.floor(Math.random() * 50), 0, 15, 21, 15))
            note2.id = 124;
            return [note1, note2];
        })(),
        actionsGenerator: note => [
            new NoteViewerAction('Do something', async n => Promise.resolve(true))
        ],
        groupBy: n => n.date.getDay(),
        groupHeader: (key, notes) => {
            const day = Number(key);
            return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
        },
        groups: notes => [0,1,2,3,4,5,6],
        noteViewer: (note, actions, isSelected) => noteViewerWithoutDate(note, actions, isSelected)
    }
}