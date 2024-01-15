import type { Meta, StoryObj } from '@storybook/react';
import { SimpleNoteList } from '../SimpleNoteList';
import { Note, Space } from 'notu';

const meta = {
    title: 'SimpleNoteList',
    component: SimpleNoteList,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
} satisfies Meta<typeof SimpleNoteList>;
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
        contextSpaceId: 1
    }
};