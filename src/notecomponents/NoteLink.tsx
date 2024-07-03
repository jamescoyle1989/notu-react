import { Note } from 'notu';
import { NoteComponent, NoteComponentInfo, NoteComponentProcessor } from './NoteComponent';
import React from 'react';

export class NoteLink implements NoteComponent {
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

export class NoteLinkProcessor implements NoteComponentProcessor {

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

    create(
        text: string,
        note: Note,
        save: () => Promise<void>,
        previous: NoteComponentInfo,
        next: NoteComponentInfo
    ): NoteComponent {
        const content = text.replace('<Link>', '').replace('</Link>', '').trim();

        return new NoteLink(content);
    }
}