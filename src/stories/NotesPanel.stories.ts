import type { Meta, StoryObj } from '@storybook/react';
import { NotesPanel } from '../NotesPanel';
import { MockNotu, newSpace } from './StoryHelpers';
import { PanelNoteSearch } from '../NoteSearch';
import { PanelNoteList } from '../NoteList';
import { NoteViewerAction } from '../NoteActionsViewer';
import { PanelGroupedNoteList } from '../GroupedNoteList';
import { PanelRelatedTagSelector } from '../RelatedTagSelector';
import { noteTextSplitter } from '../helpers/NoteComponentHelpers';
import { NotuRenderTools } from '../helpers/NotuRender';

const meta: Meta<typeof NotesPanel> = {
    title: 'NotesPanel',
    component: NotesPanel,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof meta>;


const space1 = newSpace('Space1', 1).clean();

const notu = new MockNotu();

const renderTools = new NotuRenderTools(
    notu as any,
    noteTextSplitter,
    t => null
);


export const Primary: Story = {
    args: {
        selector: new PanelNoteSearch(notu as any, space1, 'Test'),
        display: new PanelNoteList(
            renderTools,
            n => [new NoteViewerAction('Do something', n => console.log('Something done'))]
        )
    }
}

export const Grouped: Story = {
    args: {
        selector: new PanelNoteSearch(notu as any, space1, 'Test'),
        display: new PanelGroupedNoteList(
            renderTools,
            n => [new NoteViewerAction('Do something', n => console.log('Something done'))],
            n => n.text.length
        ).withHeaders((key, notes) => `Text length: ${key}`)
    }
}

export const FetchRelatedTags: Story = {
    args: {
        selector: new PanelRelatedTagSelector(notu as any, null, null),
        display: new PanelNoteList(
            renderTools,
            n => [new NoteViewerAction('Do something', n => console.log('Something done'))]
        )
    }
}

export const AutoRefresh: Story = {
    args: {
        selector: new PanelNoteSearch(notu as any, space1, 'Test'),
        display: new PanelNoteList(
            renderTools,
            n => [new NoteViewerAction('Do something', n => { n.text += ' asdf'; console.log('Something done'); })]
        ),
        autoRefresh: true
    }
}

export const ErrorOnFetch: Story = {
    args: {
        selector: new PanelNoteSearch(notu as any, space1, 'Test')
            .withCustomQueryHandling((query, spaceId) => { throw Error('Boo hoo! Its broken')}),
        display: new PanelNoteList(
            renderTools,
            n => [new NoteViewerAction('Do something', n => console.log('Something done'))]
        )
    }
}

export const WorksProperlyWithChecklists: Story = {
    args: {
        selector: new PanelNoteSearch(notu as any, space1, 'Test'),
        display: new PanelNoteList(
            renderTools,
            n => [new NoteViewerAction('Do something', n => console.log(n))]
        ),
        autoRefresh: true
    }
}