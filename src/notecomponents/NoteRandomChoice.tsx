import { Note, NoteComponentInfo } from 'notu';
import React from 'react';

export class NoteRandomChoice {
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


export class NoteRandomChoiceProcessor {

    get displayName(): string { return 'Random Choice'; }

    newComponentText(textContent: string): string {
        return `<RandomChoice>
${textContent}
</RandomChoice>`;
    }

    get componentShowsInlineInParagraph(): boolean { return false; }
    
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

    create(info: NoteComponentInfo, note: Note, save: () => Promise<void>): NoteRandomChoice {
        const lines = info.text
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

        return new NoteRandomChoice(this._chooseLine(weightedLines), info.text);
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