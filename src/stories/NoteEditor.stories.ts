import type { Meta, StoryObj } from '@storybook/react';
import { NoteEditor } from '../NoteEditor';
import { Attr, Note, Space, Tag } from 'notu';

const meta = {
    title: 'NoteEditor',
    component: NoteEditor,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
} satisfies Meta<typeof NoteEditor>;
export default meta;

type Story = StoryObj<typeof meta>;


const space1 = new Space('Space 1').clean();
space1.id = 1;
const space2 = new Space('Space 2').clean();
space2.id = 2;

const tag1 = new Tag('Tag 1', 1);
tag1.id = 1;
tag1.space = space1;
tag1.clean();
const tag2 = new Tag('Tag 2', 2);
tag2.id = 2;
tag2.space = space2;
tag2.clean();

const attr1 = new Attr('Test Attr').in(space1).clean();
attr1.id = 1;


export const Primary: Story = {
    args: {
        note: new Note('hello')
            .in(space1)
            .at(new Date(1987, 6, 5, 4, 3, 2)),
        tags: [tag1, tag2],
        attrs: [attr1],
        onConfirm: (note) => {
            console.log('Confirm clicked', note);
            return null;
        }
    }
};


export const ThrowsErrorIfNoteDoesntSetSpace: Story = {
    args: {
        note: new Note('hello'),
        tags: [tag1, tag2],
        attrs: [attr1],
        onConfirm: note => {
            return null;
        }
    }
}