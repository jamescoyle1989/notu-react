import { Note, NoteComponentInfo } from 'notu';
import React from 'react';

export class NoteText {
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
            <span style={{whiteSpace: 'pre-line'}}>{this._displayText}</span>
        )
    }

    getText(): string {
        return this._originalText;
    }
}


export class NoteTextProcessor {

    get componentShowsInlineInParagraph(): boolean { return true; }

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

    create(info: NoteComponentInfo, note: Note, save: () => Promise<void>): NoteText {
        let displayText = info.text.replace('<Text>', '').replace('</Text>', '');
        return new NoteText(displayText, info.text);
    }
}


export class DefaultTextProcessor {

    get componentShowsInlineInParagraph(): boolean { return true; }

    identify(text: string): NoteComponentInfo {
        return new NoteComponentInfo(text, 0, this);
    }

    create(info: NoteComponentInfo, note: Note, save: () => Promise<void>): NoteText {
        let displayText = info.text;
        const firstLineBreakIndex = displayText.indexOf('\n');
        if (firstLineBreakIndex >= 0 && displayText.substring(0, firstLineBreakIndex).trim() == '')
            displayText = displayText.substring(firstLineBreakIndex + 1);
        const lastLineBreakIndex = displayText.lastIndexOf('\n');
        if (lastLineBreakIndex >= 0 && displayText.substring(lastLineBreakIndex).trim() == '')
            displayText = displayText.substring(0, lastLineBreakIndex);
        return new NoteText(displayText, info.text);
    }
}