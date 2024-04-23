import type { Meta, StoryObj } from '@storybook/react';
import { SimpleNoteList } from '../SimpleNoteList';
import { Note, Space } from 'notu';
import { SimpleNoteViewerAction } from '../SimpleNoteViewer';

const meta: Meta<typeof SimpleNoteList> = {
    title: 'SimpleNoteList',
    component: SimpleNoteList,
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
        notes: (() => {
            const note1 = new Note('I am a first note').in(space1)
                .at(new Date(2024, 0, 14, 20, 6));
            note1.id = 123;
            const note2 = new Note('And I\'m another note').in(space1)
                .at(new Date(2024, 0, 15, 21, 15))
            note2.id = 124;
            return [note1, note2];
        })(),
        contextSpaceId: 1,
        actionsGenerator: n => {
            const output = new Array<SimpleNoteViewerAction>();
            output.push(new SimpleNoteViewerAction('Test', async n => {}));
            if (n.text.endsWith('first note'))
                output.push(new SimpleNoteViewerAction('Special First Note Action', async n => {}));
            return output;
        }
    }
};