import type { Meta, StoryObj } from '@storybook/react';
import { NoteSearch } from '../NoteSearch';
import { Note, Space } from 'notu';

const meta: Meta<typeof NoteSearch> = {
    title: 'NoteSearch',
    component: NoteSearch,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs']
};
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


const space1 = new Space('Test1');
space1.id = 1;
const space2 = new Space('Test2');
space2.id = 2;


export const Primary: Story = {
    args: {
        space: space1,
        notuClient: new FakeHttpClient() as any,
        onFetch: (notes) => console.log(notes)
    }
};