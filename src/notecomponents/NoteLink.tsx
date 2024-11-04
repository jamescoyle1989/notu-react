import { Note, NoteComponentInfo } from 'notu';
import React from 'react';

export class NoteLink {
    private _url: string;
    get url(): string { return this._url; }

    private _alias: string;
    get alias(): string { return this._alias; }

    constructor(url: string, alias: string) {
        this._url = url;
        this._alias = alias;
    }

    render() {
        return (
            <a href={this.url} target="_blank">{this.alias ?? this.url}</a>
        );
    }

    getText(): string {
        if (!!this.alias)
            return `<Link>(${this.alias}) ${this.url}</Link>`;
        return `<Link>${this.url}</Link>`;
    }
}

export class NoteLinkProcessor {

    get componentShowsInlineInParagraph(): boolean { return true; }

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

    create(info: NoteComponentInfo, note: Note, save: () => Promise<void>): NoteLink {
        const content = info.text.replace('<Link>', '').replace('</Link>', '').trim();

        const regexResult = /(?:\((.*?)\))?(.*)/.exec(content);
        const url = regexResult[2];
        let alias = regexResult[1];
        if (!alias)
            alias = null;

        return new NoteLink(url, alias);
    }
}