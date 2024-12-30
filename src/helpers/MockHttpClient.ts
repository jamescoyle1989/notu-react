import { Note, Space } from "notu";

export class MockHttpClient {
    calls: Array<any> = [];

    login(username: string, password: string): Promise<string> {
        this.calls.push({name: 'login', username, password});
        return Promise.resolve('123.456.789');
    }

    getSpaces(): Promise<Array<Space>> {
        this.calls.push({name: 'getSpaces'});
        return Promise.resolve([]);
    }

    saveSpace(space: Space): Promise<Space> {
        this.calls.push({name: 'saveSpace', space});
        return Promise.resolve(space);
    }

    getNotes(query: string, spaceId: number): Promise<Array<Note>> {
        this.calls.push({name: 'getNotes', query, spaceId});
        return Promise.resolve([]);
    }

    getNoteCount(query: string, spaceId: number): Promise<number> {
        this.calls.push({name: 'getNoteCount', query, spaceId});
        return Promise.resolve(0);
    }

    saveNotes(notes: Array<Note>): Promise<Array<Note>> {
        this.calls.push({name: 'saveNotes', notes});
        return Promise.resolve(notes);
    }

    customJob(name: string, data: any): Promise<any> {
        this.calls.push({name: 'customJob', jobName: name, data});
        return Promise.resolve(null);
    }
}