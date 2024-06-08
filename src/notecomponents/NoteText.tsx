import { Note } from 'notu';
import { NoteComponent, NoteComponentInfo, NoteComponentProcessor } from './NoteComponent';
import React from 'react';

export class NoteText implements NoteComponent {
    private _displayText: string;
    get displayText(): string { return this._displayText; }

    private _originalText: string;
    get originalText(): string { return this._originalText; }

    constructor(displayText: string, originalText: string) {
        this._displayText = displayText;
        this._originalText = originalText;
    }

    render() {
        if (this._displayText.length == 0)
            return;

        return (
            <p style={{whiteSpace: 'pre-line'}}>{this._displayText}</p>
        )
    }

    getText(): string {
        return this._originalText;
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

    create(text: string, note: Note, save: () => Promise<void>, previous: NoteComponentInfo, next: NoteComponentInfo): NoteComponent {
        let displayText = text.replace('<Text>', '').replace('</Text>', '');
        const firstLineBreakIndex = displayText.indexOf('\n');
        if (firstLineBreakIndex >= 0 && displayText.substring(0, firstLineBreakIndex).trim() == '')
            displayText = displayText.substring(firstLineBreakIndex + 1);
        const lastLineBreakIndex = displayText.lastIndexOf('\n');
        if (lastLineBreakIndex >= 0 && displayText.substring(lastLineBreakIndex).trim() == '')
            displayText = displayText.substring(0, lastLineBreakIndex);
        return new NoteText(displayText, text);
    }
}


export class DefaultTextProcessor implements NoteComponentProcessor {

    identify(text: string): NoteComponentInfo {
        return new NoteComponentInfo(text, 0, this);
    }

    create(text: string, note: Note, save: () => Promise<void>, previous: NoteComponentInfo, next: NoteComponentInfo): NoteComponent {
        let displayText = text;
        const firstLineBreakIndex = displayText.indexOf('\n');
        if (firstLineBreakIndex >= 0 && !!previous && displayText.substring(0, firstLineBreakIndex).trim() == '')
            displayText = displayText.substring(firstLineBreakIndex + 1);
        const lastLineBreakIndex = displayText.lastIndexOf('\n');
        if (lastLineBreakIndex >= 0 && !!next && displayText.substring(lastLineBreakIndex).trim() == '')
            displayText = displayText.substring(0, lastLineBreakIndex);
        return new NoteText(displayText, text);
    }
}