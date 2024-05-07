import type { Meta, StoryObj } from '@storybook/react';
import { NoteList } from '../NoteList';
import { Note, Space } from 'notu';
import { NoteViewerAction } from '../NoteViewer';
import { newSpace } from './StoryHelpers';

const meta: Meta<typeof NoteList> = {
    title: 'NoteList',
    component: NoteList,
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
                .at(new Date(2024, 0, 14, 20, 6));
            note1.id = 123;
            const note2 = new Note('And I\'m another note').in(space1)
                .at(new Date(2024, 0, 15, 21, 15))
            note2.id = 124;
            return [note1, note2];
        })(),
        contextSpaceId: 1,
        actionsGenerator: n => {
            const output = new Array<NoteViewerAction>();
            output.push(new NoteViewerAction('Test', n => {}));
            if (n.text.endsWith('first note'))
                output.push(new NoteViewerAction('Special First Note Action', n => {}));
            return output;
        }
    }
};