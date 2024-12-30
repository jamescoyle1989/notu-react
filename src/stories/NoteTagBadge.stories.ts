import type { Meta, StoryObj } from '@storybook/react';
import { NoteTagBadge } from '../NoteTagBadge';
import { Note, Notu, NotuCache } from 'notu';
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

const cacheFetcher = {
    getSpacesData: async function() { return [
        { state:'CLEAN', id:1, name:'Space', version:'1.0.0', useCommonSpace:false },
        { state:'CLEAN', id:2, name:'Space 2', version:'1.0.0', useCommonSpace:false }
    ]; },
    getTagsData: async function() { return [
        { state:'CLEAN', id:123, name:'Test', spaceId:1, color:null, isPublic:true, links:[] },
        { state:'CLEAN', id:234, name:'Test 2', spaceId:2, color:null, isPUblic:true, links:[] }
    ]; }
};
const notu = new Notu(
    null,
    new NotuCache(cacheFetcher)
);
notu.cache.populate();
const renderTools = new NotuRenderTools(notu, null, t => null);



export const Primary: Story = {
    args: {
        noteTag: (() => {
            const tag = newTag('Test', 123).in(space1).clean();
            return new Note().in(space1).addTag(tag);
        })(),
        contextSpaceId: 1,
        onDelete: null,
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
        notuRenderTools: renderTools
    }
};

export const ShowsSpaceNameIfRequired: Story = {
    args: {
        noteTag: (() => {
            const tag = newTag('Test 2', 234).in(space2).asPublic().clean();
            return new Note().in(space1).addTag(tag);
        })(),
        contextSpaceId: 1,
        onDelete: null,
        notuRenderTools: renderTools
    }
}

export const SupportsUsingUniqueName: Story = {
    args: {
        noteTag: (() => {
            const tag = newTag('Test 2', 234).in(space2).asPublic().clean();
            return new Note().in(space1).addTag(tag);
        })(),
        contextSpaceId: 1,
        onDelete: null,
        notuRenderTools: renderTools,
        useUniqueName: true
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
        notuRenderTools: new NotuRenderTools(null, null, t => {
            if (t.id == 123)
                return new TestNoteTagDataComponentFactory();
        })
    }
}