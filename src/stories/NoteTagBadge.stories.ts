import type { Meta, StoryObj } from '@storybook/react';
import { NoteTagBadge } from '../NoteTagBadge';
import { Attr, Note, Space, Tag } from 'notu';

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


const space1 = new Space('Space').clean();
space1.id = 1;
const space2 = new Space('Space 2').clean();
space2.id = 2;



export const Primary: Story = {
    args: {
        noteTag: (() => {
            const tag = new Tag('Test').in(space1).clean();
            tag.id = 123;
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
            const tag = new Tag('Test').in(space1).clean();
            tag.id = 123;
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
            const tag = new Tag('Test').in(space2).clean();
            tag.id = 123;
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
            const tag = new Tag('Test').in(space1).clean();
            tag.color = '#FF0000';
            tag.id = 123;
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
            const tag = new Tag('Test').in(space1).clean();
            tag.color = '#00FF00';
            tag.id = 123;
            return new Note().addTag(tag);
        })(),
        contextSpaceId: 1,
        onDelete: null,
        showAttrs: true
    }
}