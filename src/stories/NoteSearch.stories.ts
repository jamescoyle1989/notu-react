import type { Meta, StoryObj } from '@storybook/react';
import { NoteSearch } from '../NoteSearch';
import { Note, Space } from 'notu';

const meta = {
    title: 'NoteSearch',
    component: NoteSearch,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
} satisfies Meta<typeof NoteSearch>;
export default meta;

type Story = StoryObj<typeof meta>;



class FakeHttpClient {
    async getNotes(query: string, spaceId: number): Promise<Array<Note>> {
        console.log({query, spaceId});
        return Promise.resolve([
            new Note('Note 1'),
            new Note('Note 2')
        ]);
    }
}



export const Primary: Story = {
    args: {
        space: (() => {
            const space = new Space('Test');
            space.id = 123;
            return space;
        })(),
        notuClient: new FakeHttpClient() as any,
        onFetch: (notes) => console.log(notes)
    }
};