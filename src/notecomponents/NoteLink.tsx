import { Note, NoteComponentInfo } from 'notu';
import React from 'react';

export class NoteLink {
    private _url: string;
    get url(): string { return this._url; }

    constructor(url: string) {
        this._url = url;
    }

    render() {
        return (
            <a href={this.url} target="_blank">{this.url}</a>
        );
    }

    getText(): string {
        return `<Link>${this.url}</Link>`;
    }
}

export class NoteLinkProcessor {

    constructor() {
        this.creator = this.create;
    }

    identify(text: string): NoteComponentInfo {
        const start = text.indexOf('<Link>');
        if (start < 0)
            return null;

        let end = text.indexOf('</Link>', start + 1);
        if (end < 0)
            return null;
        end += '</Link>'.length;

        const componentText = text.substring(start, end);
        return new NoteComponentInfo(componentText, start, this);
    }

    creator: (
        info: NoteComponentInfo,
        note: Note,
        save: () => Promise<void>,
        previous: NoteComponentInfo,
        next: NoteComponentInfo
    ) => NoteLink;

    create(
        info: NoteComponentInfo,
        note: Note,
        save: () => Promise<void>,
        previous: NoteComponentInfo,
        next: NoteComponentInfo
    ): NoteLink {
        const content = info.text.replace('<Link>', '').replace('</Link>', '').trim();

        return new NoteLink(content);
    }
}