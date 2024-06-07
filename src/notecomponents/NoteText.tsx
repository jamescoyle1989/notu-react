import { Note } from 'notu';
import { NoteComponent, NoteComponentInfo, NoteComponentProcessor } from './NoteComponent';
import React from 'react';

export class NoteText implements NoteComponent {
    private _text: string;
    get text(): string { return this._text; }

    constructor(text: string) {
        this._text = text;
    }

    render() {
        return (
            <p style={{whiteSpace: 'pre-line'}}>{this._text}</p>
        )
    }

    getText(): string {
        return this._text;
    }
}


export class NoteTextProcessor implements NoteComponentProcessor {

    identify(text: string): NoteComponentInfo {
        const start = text.indexOf('<Text>');
        if (start < 0)
            return null;

        let end = text.indexOf('</Text>', start + 1);
        if (end < 0)
            return null;
        end += '</Text>'.length;

        const componentText = text.substring(start, end);
        return new NoteComponentInfo(componentText, start, this);
    }

    create(text: string, note: Note, save: () => Promise<void>): NoteComponent {
        return new NoteText(text);
    }
}


export class DefaultTextProcessor implements NoteComponentProcessor {

    identify(text: string): NoteComponentInfo {
        return new NoteComponentInfo(text, 0, this);
    }

    create(text: string, note: Note, save: () => Promise<void>): NoteComponent {
        return new NoteText(text);
    }
}