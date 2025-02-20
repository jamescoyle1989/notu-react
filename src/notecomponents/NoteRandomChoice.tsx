import { Note, NoteComponentInfo } from 'notu';
import React from 'react';
import { DateProvider, RealDateProvider } from '../helpers/DateProvider';
import Rand from 'rand-seed';

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

    constructor(dateProvider: DateProvider = null) {
        if (dateProvider == null)
            dateProvider = new RealDateProvider();
        this._dateProvider = dateProvider;
    }

    private _dateProvider: DateProvider;

    get displayName(): string { return 'Random Choice'; }

    newComponentText(textContent: string): string {
        return `<RandomChoice Frequency="Every Load">
${textContent}
</RandomChoice>`;
    }

    get componentShowsInlineInParagraph(): boolean { return false; }

    private _openTagRegex = /<RandomChoice(?: Frequency="(.*)")?>/;
    
    identify(text: string): NoteComponentInfo {
        const start = text.search(this._openTagRegex);
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
        const openTagInfo = this._openTagRegex.exec(info.text);
        const frequency = openTagInfo[1] ?? 'Every Load';
        const lines = info.text
            .replace(openTagInfo[0], '')
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

        return new NoteRandomChoice(this._chooseLine(weightedLines, frequency), info.text);
    }

    private _chooseLine(lines: Array<{text: string, weight: number}>, frequency: string): string {
        const weightSum = lines.map(x => x.weight).reduce((acc, cur) => acc + cur, 0);
        const randomVal = this._getRandomGenerator(frequency).next() * weightSum;
        let weightAcc = 0;
        for (const line of lines) {
            weightAcc += line.weight;
            if (randomVal < weightAcc)
                return line.text;
        }
        return null;
    }

    private _getRandomGenerator(frequency: string): Rand {
        let date = this._dateProvider.now();
        switch (frequency) {
            case 'Every Load':
                return new Rand();
            case 'Daily':
                return new Rand(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
            case 'Weekly':
                date.setDate(date.getDate() - date.getDay());
                return new Rand(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
            case 'Monthly':
                return new Rand(`${date.getFullYear()}-${date.getMonth()}`);
            case 'Yearly':
                return new Rand(`${date.getFullYear()}`);
            default:
                throw new Error(`Unknown frequency: ${frequency}`);
        }
    }
}