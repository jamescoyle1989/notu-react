import type { Meta, StoryObj } from '@storybook/react';
import { NoteSearch } from '../NoteSearch';
import { Note, Space } from 'notu';
import { newSpace } from './StoryHelpers';

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


const space1 = newSpace('Test1', 1);


export const Primary: Story = {
    args: {
        space: space1,
        notu: new FakeHttpClient() as any,
        onFetched: console.log,
        onQueryChanged: query => console.log('Query changed: ' + query)
    }
};


export const TextBoxIsDisabledIfNoOnQueryChanged: Story = {
    args: {
        space: space1,
        notu: new FakeHttpClient() as any,
        onFetched: console.log,
        query: '#Tag AND @Attr.Exists'
    }
}


export const OnQueryChangedCallbackGetsCalled: Story = {
    args: {
        space: space1,
        notu: new FakeHttpClient() as any,
        onFetched: (notes) => console.log(notes),
        query: 'I like pies',
        onQueryChanged: console.log
    }
}


export const CanManuallyProcessNoteFetching: Story = {
    args: {
        space: space1,
        onFetchRequested: (query: string, space: Space) => {
            return Promise.resolve([
                new Note('I am a manually generated note.')
            ]);
        },
        onFetched: console.log
    }
}