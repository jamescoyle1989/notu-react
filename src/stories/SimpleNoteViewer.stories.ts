import type { Meta, StoryObj } from '@storybook/react';
import { SimpleNoteViewer, SimpleNoteViewerAction } from '../SimpleNoteViewer';
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
            const output = new Note('Test test')
                .at(new Date(2023, 11, 18))
                .setOwnTag('My Tag');
            output.ownTag.color = '#0000FF';
            const tag1 = new Tag('Tag 1', 1).clean();
            tag1.id = 1;
            tag1.color = '#FF0000';
            tag1.space = space1;
            output.addTag(tag1);
            return output;
        })(),
        contextSpaceId: 1,
        actions: [
            new SimpleNoteViewerAction('Say Hello', n => console.log('Hello')),
            new SimpleNoteViewerAction('Say Goodbye', n => console.log('Goodbye'))
        ],
        isSelected: true
    }
};


export const NoActions: Story = {
    args: {
        note: (() => {
            const output = new Note('Test test')
                .at(new Date(2023, 11, 18))
                .setOwnTag('My Tag');
            output.ownTag.color = '#0000FF';
            const tag1 = new Tag('Tag 1', 1).clean();
            tag1.id = 1;
            tag1.color = '#FF0000';
            tag1.space = space1;
            output.addTag(tag1);
            return output;
        })(),
        contextSpaceId: 1,
        actions: [],
        isSelected: true
    }
}