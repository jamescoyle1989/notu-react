import type { Meta, StoryObj } from '@storybook/react';
import { newAttr, newNote, newSpace, newTag } from './StoryHelpers';
import { MultiSpaceNoteList } from '../MultiSpaceNoteList';
import { NoteViewerAction } from '../NoteViewer';

const meta: Meta<typeof MultiSpaceNoteList> = {
    title: 'MultiSpaceNoteList',
    component: MultiSpaceNoteList,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof meta>;


const space1 = newSpace('Space 1', 1).clean();
const space2 = newSpace('Space 2', 2).clean();

const tag1 = newTag('Tag 1', 1).in(space1);
tag1.color = '#FF0000';
tag1.clean();

const tag2 = newTag('Tag 2', 2).in(space2);
tag2.color = '#00FF00';
tag2.clean();

const attr1 = newAttr('Attr 1', 1).in(space1).asNumber().clean();
const attr2 = newAttr('Attr 2', 2).in(space1).asNumber().clean();


export const Primary: Story = {
    args: {
        notes: (() => {
            const note1 = newNote('I am a note in space 1', 123).in(space1);
            note1.addTag(tag1).addAttr(attr1, 500);

            const note2 = newNote('I am a note in space 2', 234).in(space2);
            note2.addTag(tag2).addAttr(attr2, 600);

            return [note1, note2];
        })(),
        actionsGenerator: n => {
            return [new NoteViewerAction('Test', n => {})];
        },
        isVisible: true
    }
}