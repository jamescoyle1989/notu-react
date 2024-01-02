import type { Meta, StoryObj } from '@storybook/react';
import { SimpleNoteViewer } from '../SimpleNoteViewer';
import { Note, Space, Tag } from 'notu';

const meta = {
    title: 'SimpleNoteViewer',
    component: SimpleNoteViewer,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
} satisfies Meta<typeof SimpleNoteViewer>;
export default meta;

type Story = StoryObj<typeof meta>;


const space1 = new Space('Space 1').clean();
space1.id = 1;
const space2 = new Space('Space 2').clean();
space2.id = 2;


export const Primary: Story = {
    args: {
        note: (() => {
            const output = new Note('Test test').at(new Date(2023, 11, 18));
            const tag1 = new Tag('Tag 1', 1).clean();
            tag1.id = 1;
            tag1.space = space1;
            output.addTag(tag1);
            const tag2 = new Tag('Tag 2', 2).clean();
            tag2.id = 2;
            tag2.space = space2;
            output.addTag(tag2);
            return output;
        })(),
        contextSpaceId: 1
    }
};