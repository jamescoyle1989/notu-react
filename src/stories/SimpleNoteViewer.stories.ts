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



export const Primary: Story = {
    args: {
        note: (() => {
            const output = new Note('Test test').at(new Date(2023, 11, 18));
            const tag1 = new Tag('Tag 1', 1).clean();
            tag1.id = 1;
            output.addTag(tag1);
            const tag2 = new Tag('Tag 2', 2).clean();
            tag2.id = 2;
            output.addTag(tag2);
            return output;
        })(),
        spaces: (() => {
            const space1 = new Space('Test Space').clean();
            space1.id = 1;
            return [space1];
        })()
    }
};