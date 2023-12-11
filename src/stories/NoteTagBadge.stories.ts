import type { Meta, StoryObj } from '@storybook/react';
import { NoteTagBadge } from '../NoteTagBadge';
import { Note, Space, Tag } from 'notu';

const meta = {
    title: 'NoteTagBadge',
    component: NoteTagBadge,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof NoteTagBadge>;
export default meta;

type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {
        noteTag: (() => {
            const tag = new Tag('Test').clean();
            tag.id = 123;
            return new Note().in(1).addTag(tag);
        })(),
        spaces: (() => {
            const space1 = new Space('Test Space').clean();
            space1.id = 1;
            return [space1];
        })(),
        onDelete: null
    }
};

export const WithDeleteButton: Story = {
    args: {
        noteTag: (() => {
            const tag = new Tag('Test').clean();
            tag.id = 123;
            return new Note().in(1).addTag(tag);
        })(),
        spaces: (() => {
            const space1 = new Space('Test Space').clean();
            space1.id = 1;
            return [space1];
        })(),
        onDelete: () => { console.log('Delete clicked'); }
    }
};