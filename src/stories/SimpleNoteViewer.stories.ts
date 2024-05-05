import type { Meta, StoryObj } from '@storybook/react';
import { SimpleNoteViewer, SimpleNoteViewerAction } from '../SimpleNoteViewer';
import { Attr, Note, NoteAttr, Space, Tag } from 'notu';

const meta: Meta<typeof SimpleNoteViewer> = {
    title: 'SimpleNoteViewer',
    component: SimpleNoteViewer,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof meta>;


const space1 = new Space('Space 1').clean();
space1.id = 1;
const space2 = new Space('Space 2').clean();
space2.id = 2;

const tag1 = new Tag('Tag 1').in(space1).clean();
tag1.color = '#FF0000';
tag1.id = 1;
tag1.clean();

const attr1 = new Attr('Attr 1').in(space1).asNumber().clean();
attr1.id = 1;


export const Primary: Story = {
    args: {
        note: (() => {
            const output = new Note('Test test')
                .at(new Date(2023, 11, 18))
                .setOwnTag('My Tag');
            output.ownTag.color = '#0000FF';
            output.addTag(tag1);
            output.attrs.push(new NoteAttr(1, attr1, 12345));
            output.attrs.push(new NoteAttr(1, attr1, 23456).onTag(tag1));
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
            const tag1 = new Tag('Tag 1').in(space1).clean();
            tag1.id = 1;
            tag1.color = '#FF0000';
            output.addTag(tag1);
            return output;
        })(),
        contextSpaceId: 1,
        actions: [],
        isSelected: true
    }
}


export const CanHideDate: Story = {
    args: {
        note: (() => {
            const output = new Note('Test test')
                .at(new Date(2023, 11, 18))
                .setOwnTag('My Tag');
            output.ownTag.color = '#0000FF';
            const tag1 = new Tag('Tag 1').in(space1).clean();
            tag1.id = 1;
            tag1.color = '#FF0000';
            output.addTag(tag1);
            return output;
        })(),
        contextSpaceId: 1,
        actions: [],
        isSelected: true,
        showDate: false
    }
}