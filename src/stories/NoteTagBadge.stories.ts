import type { Meta, StoryObj } from '@storybook/react';
import { NoteTagBadge } from '../NoteTagBadge';
import { Note } from 'notu';
import { newSpace, newTag } from './StoryHelpers';
import { TestNoteTagDataComponentFactory } from './ReactSnippets';
import { NotuRenderTools } from '../helpers/NotuRender';

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

const renderTools = new NotuRenderTools(null, null, t => null);



export const Primary: Story = {
    args: {
        noteTag: (() => {
            const tag = newTag('Test', 123).in(space1).clean();
            return new Note().in(space1).addTag(tag);
        })(),
        contextSpaceId: 1,
        onDelete: null,
        showAttrs: true,
        notuRenderTools: renderTools
    }
};

export const WithDeleteButton: Story = {
    args: {
        noteTag: (() => {
            const tag = newTag('Test', 123).in(space1).clean();
            return new Note().in(space1).addTag(tag);
        })(),
        contextSpaceId: 1,
        onDelete: () => { console.log('Delete clicked'); },
        showAttrs: true,
        notuRenderTools: renderTools
    }
};

export const ShowsSpaceNameIfRequired: Story = {
    args: {
        noteTag: (() => {
            const tag = newTag('Test', 123).in(space2).asPublic().clean();
            return new Note().in(space1).addTag(tag);
        })(),
        contextSpaceId: 1,
        onDelete: null,
        showAttrs: true,
        notuRenderTools: renderTools
    }
}

export const RedBadge: Story = {
    args: {
        noteTag: (() => {
            const tag = newTag('Test', 123).in(space1).clean();
            tag.color = '#FF0000';
            return new Note().in(space1).addTag(tag);
        })(),
        contextSpaceId: 1,
        onDelete: null,
        showAttrs: true,
        notuRenderTools: renderTools
    }
}

export const GreenBadge: Story = {
    args: {
        noteTag: (() => {
            const tag = newTag('Test', 123).in(space1).clean();
            tag.color = '#00FF00';
            return new Note().in(space1).addTag(tag);
        })(),
        contextSpaceId: 1,
        onDelete: null,
        showAttrs: true,
        notuRenderTools: renderTools
    }
}

export const BadgeSupportsDataComponent: Story = {
    args: {
        noteTag: (() => {
            const tag = newTag('Test', 123).in(space1).clean();
            return new Note().in(space1).addTag(tag).withData({name: 'James'});
        })(),
        contextSpaceId: 1,
        onDelete: null,
        showAttrs: true,
        notuRenderTools: new NotuRenderTools(null, null, t => {
            if (t.id == 123)
                return new TestNoteTagDataComponentFactory();
        })
    }
}