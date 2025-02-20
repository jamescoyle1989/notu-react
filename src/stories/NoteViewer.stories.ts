import type { Meta, StoryObj } from '@storybook/react';
import { NoteViewer } from '../NoteViewer';
import { NoteViewerAction } from '../NoteActionsViewer';
import { Note, Notu, NotuCache } from 'notu';
import { FakeCacheFetcher, newSpace, newTag } from './StoryHelpers';
import { NotuRenderTools } from '../helpers/NotuRender';
import { MockHttpClient } from '../helpers/MockHttpClient';

const meta: Meta<typeof NoteViewer> = {
    title: 'NoteViewer',
    component: NoteViewer,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof meta>;

const space1 = newSpace('Space 1', 1).clean();

const tag1 = newTag('Tag 1', 1).in(space1);
tag1.color = '#FF0000';
tag1.clean();

const cache = new FakeCacheFetcher();
cache.spaces = [space1];
cache.tags = [tag1];

const notu = new Notu(
    new MockHttpClient() as any,
    new NotuCache(cache)
);
notu.cache.populate();

const renderTools = new NotuRenderTools(notu, NotuRenderTools.defaultNoteComponentProcessors(), t => null);
console.log({renderTools});


export const Primary: Story = {
    args: {
        note: (() => {
            const output = new Note('Test test')
                .in(space1)
                .at(new Date(2023, 11, 18))
                .setOwnTag('My Tag');
            output.ownTag.color = '#0000FF';
            output.addTag(tag1);
            return output;
        })(),
        actions: [
            new NoteViewerAction('Say Hello', n => console.log('Hello')),
            new NoteViewerAction('Say Goodbye', n => console.log('Goodbye'))
        ],
        isSelected: true,
        notuRenderTools: renderTools
    }
};


export const NoActions: Story = {
    args: {
        note: (() => {
            const output = new Note('Test test')
                .in(space1)
                .at(new Date(2023, 11, 18))
                .setOwnTag('My Tag');
            output.ownTag.color = '#0000FF';
            output.addTag(tag1);
            return output;
        })(),
        actions: [],
        isSelected: true,
        notuRenderTools: renderTools
    }
};


export const CanHideDate: Story = {
    args: {
        note: (() => {
            const output = new Note('Test test')
                .in(space1)
                .at(new Date(2023, 11, 18))
                .setOwnTag('My Tag');
            output.ownTag.color = '#0000FF';
            output.addTag(tag1);
            return output;
        })(),
        actions: [],
        isSelected: true,
        showDate: false,
        notuRenderTools: renderTools
    }
};


export const DisplaysNewLinesCorrectly: Story = {
    args: {
        note: (() => {
            const output = new Note('Test test \n\n and another test test')
                .in(space1)
            return output;
        })(),
        actions: [],
        isSelected: true,
        showDate: true,
        notuRenderTools: renderTools
    }
};


export const DisplaysChecklistsCorrectly: Story = {
    args: {
        note: (() => {
            const output = new Note('Test test\n\n<Checklist>\n✔ Swim\nFight bear\n</Checklist>')
                .in(space1)
            return output;
        })(),
        actions: [],
        isSelected: true,
        showDate: true,
        notuRenderTools: renderTools
    }
};


export const DisplaysImagesCorrectly: Story = {
    args: {
        note: (() => {
            const output = new Note('Ive embedded an image into this note\n\n<Image>\n./src/stories/assets/docs.png\n</Image>')
                .in(space1)
            return output;
        })(),
        actions: [],
        isSelected: true,
        showDate: true,
        notuRenderTools: renderTools
    }
};


export const DisplaysLinksCorrectly: Story = {
    args: {
        note: (() => {
            const output = new Note(`I've embedded a link into this note: <Link>https://www.npmjs.com/~jamescoyle1989</Link>`)
                .in(space1);
            return output;
        })(),
        actions: [],
        isSelected: true,
        showDate: true,
        notuRenderTools: renderTools
    }
};

export const DisplaysAliasedLinksCorrectly: Story = {
    args: {
        note: (() => {
            const output = new Note(`I've embedded a link into this note: <Link>(npm)https://www.npmjs.com/~jamescoyle1989</Link>`)
                .in(space1);
            return output;
        })(),
        actions: [],
        isSelected: true,
        showDate: true,
        notuRenderTools: renderTools
    }
};


export const DisplaysRandomChoiceCorrectly: Story = {
    args: {
        note: (() => {
            const output = new Note(`Back stretch
<RandomChoice>
4x Cobra
Halasana
</RandomChoice>`)
                .in(space1);
            return output;
        })(),
        actions: [],
        isSelected: true,
        showDate: true,
        notuRenderTools: renderTools
    }
};


export const DisplaysDailyRandomChoiceCorrectly: Story = {
    args: {
        note: (() => {
            const output = new Note(`<RandomChoice Frequency="Daily">
abc
def
ghi
jkl
mno
pqr
stu
vwx
</RandomChoice>`)
                .in(space1);
            return output;
        })(),
        actions: [],
        isSelected: true,
        showDate: true,
        notuRenderTools: renderTools
    }
};


export const LinksDisplayInline: Story = {
    args: {
        note: (() => {
            const output = new Note('This is a piece of text that has a <Link>(link)https://www.google.com</Link> buried within it.')
                .in(space1);
            return output;
        })(),
        actions: [],
        isSelected: true,
        showDate: true,
        notuRenderTools: renderTools
    }
};


export const LinkNewlineTextDisplaysCorrectly: Story = {
    args: {
        note: (() => {
            const output = new Note('<Link>(link)https://www.google.com</Link>\nThen text on a new line afterwards')
                .in(space1);
            return output;
        })(),
        actions: [],
        isSelected: true,
        showDate: true,
        notuRenderTools: renderTools
    }
};


export const ImagesDisplayOnSeparateLines: Story = {
    args: {
        note: (() => {
            const output = new Note('This is a piece of text that has an image <Image>./src/stories/assets/docs.png</Image> buried within it.')
                .in(space1);
            return output;
        })(),
        actions: [],
        isSelected: true,
        showDate: true,
        notuRenderTools: renderTools
    }
};