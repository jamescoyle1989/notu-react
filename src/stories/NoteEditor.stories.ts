import type { Meta, StoryObj } from '@storybook/react';
import { NoteEditor } from '../NoteEditor';
import { Attr, Note, Space, Tag } from 'notu';

const meta = {
    title: 'NoteEditor',
    component: NoteEditor,
    parameters: {
        layout: 'left'
    },
    tags: ['autodocs']
} satisfies Meta<typeof NoteEditor>;
export default meta;

type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {
        note: new Note('hello').at(new Date(1987, 6, 5, 4, 3, 2)),
        spaces: (() => {
            const space1 = new Space('Test Space').clean();
            space1.id = 1;
            return [space1];
        })(),
        tags: (() => {
            const tag1 = new Tag('Test Tag', 1).clean();
            tag1.id = 1;
            return [tag1];
        })(),
        attrs: (() => {
            const attr1 = new Attr('Test Attr').in(1).clean();
            attr1.id = 1;
            return [attr1];
        })(),
        onConfirm: () => {
            console.log('Confirm clicked');
            return null;
        }
    }
};