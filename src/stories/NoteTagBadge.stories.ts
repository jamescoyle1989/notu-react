import type { Meta, StoryObj } from '@storybook/react';
import { NoteTagBadge } from '../NoteTagBadge';
import { Attr, Note, Space, Tag } from 'notu';
import { newSpace, newTag } from './StoryHelpers';

const meta: Meta<typeof NoteTagBadge> = {
    title: 'NoteTagBadge',
    component: NoteTagBadge,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof meta>;


const space1 = newSpace('Space', 1).clean();
const space2 = newSpace('Space 2', 2).clean();



export const Primary: Story = {
    args: {
        noteTag: (() => {
            const tag = newTag('Test', 123).in(space1).clean();
            return new Note().addTag(tag);
        })(),
        contextSpaceId: 1,
        onDelete: null,
        showAttrs: true
    }
};

export const WithDeleteButton: Story = {
    args: {
        noteTag: (() => {
            const tag = newTag('Test', 123).in(space1).clean();
            return new Note().addTag(tag);
        })(),
        contextSpaceId: 1,
        onDelete: () => { console.log('Delete clicked'); },
        showAttrs: true
    }
};

export const ShowsSpaceNameIfRequired: Story = {
    args: {
        noteTag: (() => {
            const tag = newTag('Test', 123).in(space2).clean();
            return new Note().addTag(tag);
        })(),
        contextSpaceId: 1,
        onDelete: null,
        showAttrs: true
    }
}

export const RedBadge: Story = {
    args: {
        noteTag: (() => {
            const tag = newTag('Test', 123).in(space1).clean();
            tag.color = '#FF0000';
            return new Note().addTag(tag);
        })(),
        contextSpaceId: 1,
        onDelete: null,
        showAttrs: true
    }
}

export const GreenBadge: Story = {
    args: {
        noteTag: (() => {
            const tag = newTag('Test', 123).in(space1).clean();
            tag.color = '#00FF00';
            return new Note().addTag(tag);
        })(),
        contextSpaceId: 1,
        onDelete: null,
        showAttrs: true
    }
}