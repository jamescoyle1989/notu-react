import { Note } from 'notu';
import { NoteComponent, NoteComponentInfo, NoteComponentProcessor } from './NoteComponent';
import React, { useState } from 'react';

export class NoteRandomChoice implements NoteComponent {
    private _displayText: string;
    get displayText(): string { return this._displayText; }
    private _fullText: string;
    get fullText(): string { return this._fullText; }

    constructor(displayText: string, fullText: string) {
        this._displayText = displayText;
        this._fullText = fullText;
    }

    render() {
        return (
            <p>{this.displayText ?? ''}</p>
        );
    }

    getText(): string {
        return this.fullText;
    }
}


export class NoteRandomChoiceProcessor implements NoteComponentProcessor {
    
    identify(text: string): NoteComponentInfo {
        const start = text.indexOf('<RandomChoice>');
        if (start < 0)
            return null;

        let end = text.indexOf('</RandomChoice>', start + 1);
        if (end < 0)
            return null;
        end += '</RandomChoice>'.length;

        const componentText = text.substring(start, end);
        return new NoteComponentInfo(componentText, start, this);
    }

    create(text: string, note: Note, save: () => Promise<void>, previous: NoteComponentInfo, next: NoteComponentInfo): NoteComponent {
        const lines = text
            .replace('<RandomChoice>', '')
            .replace('</RandomChoice>', '')
            .trim().split('\n');

        const regex = /(?:(\d+(?:\.\d+)?)\s*x)?(.*)/;
        const weightedLines = lines.map(x => {
            const result = regex.exec(x.trim());
            return {
                text: result[2].trim(),
                weight: Number(result[1] ?? 1)
            };
        });

        return new NoteRandomChoice(this._chooseLine(weightedLines), text);
    }

    private _chooseLine(lines: Array<{text: string, weight: number}>): string {
        const weightSum = lines.map(x => x.weight).reduce((acc, cur) => acc + cur, 0);
        const randomVal = Math.random() * weightSum;
        let weightAcc = 0;
        for (const line of lines) {
            weightAcc += line.weight;
            if (randomVal < weightAcc)
                return line.text;
        }
        return null;
    }
}