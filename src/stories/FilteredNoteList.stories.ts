import type { Meta, StoryObj } from '@storybook/react';
import { FilteredNoteList } from '../FilteredNoteList';
import { Note, Space } from 'notu';
import { NoteViewerAction } from '../NoteViewer';

const meta: Meta<typeof FilteredNoteList> = {
    title: 'FilteredNoteList',
    component: FilteredNoteList,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof meta>;


const space1 = new Space('Space 1');
space1.id = 1;


export const Primary: Story = {
    args: {
        space: space1,
        onFetchRequested: (query, space) => {
            const note1 = new Note('I am a first note').in(space1)
                .at(new Date(2000 + Math.floor(Math.random() * 50), 0, 14, 20, 6));
            note1.id = 123;
            const note2 = new Note('And I\'m another note').in(space1)
                .at(new Date(2000 + Math.floor(Math.random() * 50), 0, 15, 21, 15))
            note2.id = 124;
            return Promise.resolve([note1, note2]);
        },
        defaultQuery: '#Tag1 AND NOT #Tag2',
        noteActionsGenerator: note => [
            new NoteViewerAction('Do something', async n => Promise.resolve(true))
        ],
        isVisible: true
    }
}