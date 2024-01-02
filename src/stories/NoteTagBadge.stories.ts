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
            const tag = new Tag('Test', 1).clean();
            tag.id = 123;
            return new Note().addTag(tag);
        })(),
        contextSpaceId: 1,
        onDelete: null
    }
};

export const WithDeleteButton: Story = {
    args: {
        noteTag: (() => {
            const tag = new Tag('Test', 1).clean();
            tag.id = 123;
            return new Note().addTag(tag);
        })(),
        contextSpaceId: 1,
        onDelete: () => { console.log('Delete clicked'); }
    }
};

export const ShowsSpaceNameIfRequired: Story = {
    args: {
        noteTag: (() => {
            const tag = new Tag('Test', 2).clean();
            tag.id = 123;
            const space = new Space('Space 2').clean();
            space.id = 2;
            tag.space = space;
            return new Note().addTag(tag);
        })(),
        contextSpaceId: 1,
        onDelete: null
    }
}

export const RedBadge: Story = {
    args: {
        noteTag: (() => {
            const tag = new Tag('Test', 1).clean();
            tag.color = '#FF0000';
            tag.id = 123;
            const space = new Space('Space').clean();
            space.id = 1;
            tag.space = space;
            return new Note().addTag(tag);
        })(),
        contextSpaceId: 1,
        onDelete: null
    }
}

export const GreenBadge: Story = {
    args: {
        noteTag: (() => {
            const tag = new Tag('Test', 1).clean();
            tag.color = '#00FF00';
            tag.id = 123;
            const space = new Space('Space').clean();
            space.id = 1;
            tag.space = space;
            return new Note().addTag(tag);
        })(),
        contextSpaceId: 1,
        onDelete: null
    }
}