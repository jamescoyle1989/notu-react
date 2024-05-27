import type { Meta, StoryObj } from '@storybook/react';
import { NotesPanel } from '../NotesPanel';
import { MockNotu, newSpace } from './StoryHelpers';
import { PanelNoteSearch } from '../NoteSearch';
import { Notu } from 'notu';
import { PanelNoteList } from '../NoteList';
import { NoteViewerAction } from '../NoteViewer';
import { PanelGroupedNoteList } from '../GroupedNoteList';

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


export const Primary: Story = {
    args: {
        selector: new PanelNoteSearch(notu as any, space1, 'Test'),
        display: new PanelNoteList(n => [new NoteViewerAction('Do something', n => console.log('Something done'))])
    }
}

export const Grouped: Story = {
    args: {
        selector: new PanelNoteSearch(notu as any, space1, 'Test'),
        display: new PanelGroupedNoteList(
            n => [new NoteViewerAction('Do something', n => console.log('Something done'))],
            n => n.text.length
        ).withHeaders((key, notes) => `Text length: ${key}`)
    }
}