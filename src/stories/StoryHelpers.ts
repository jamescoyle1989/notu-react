import { Note, Space, Tag } from 'notu';


export function newNote(text?: string, id: number = null): Note {
    const output = new Note(text);
    output.id = id;
    return output;
}

export function newSpace(name?: string, id: number = null): Space {
    const output = new Space(name);
    output.id = id;
    return output;
}

export function newTag(name?: string, id: number = null): Tag {
    const output = new Tag(name);
    output.id = id;
    return output;
}


export class MockNotu {
    log: Array<string> = [];

    private _space1 = newSpace('Space 1', 1).clean();

    getNotes(query: string, spaceId: number): Promise<Array<Note>> {
        this.log.push(`getNotes('${query}', ${spaceId})`);
        return Promise.resolve([
            newNote('Hello, this is a test', 1).clean(),
            newNote('I like cherries', 2).clean(),
            newNote('Curtain flappps', 3).clean(),
            newNote(`Hello...
<Checklist>
Woop
Doop
</Checklist>`, 4).clean()
        ]);
    }

    getTags(space?: number | Space, includeOtherSpacePublics?: boolean): Array<Tag> {
        this.log.push(`getTags('${space}', ${includeOtherSpacePublics})`);
        return [
            newTag('Tag 1', 1).in(this._space1).clean(),
            newTag('Tag 2', 2).in(this._space1).clean(),
            newTag('Tag 3', 3).in(this._space1).clean()
        ];
    }
}


export class FakeCacheFetcher {
    spaces: Array<Space> = [];
    tags: Array<Tag> = [];

    getSpacesData(): Promise<Array<any>> {
        return Promise.resolve(this.spaces.map(x => x.toJSON()));
    }

    getTagsData(): Promise<Array<any>> {
        return Promise.resolve(this.tags.map(x => x.toJSON()));
    }
}