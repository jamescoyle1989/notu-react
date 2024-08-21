import { Note, NoteComponentInfo } from 'notu';
import React from 'react';

export class NoteImage {
    private _paths: Array<string>;
    get paths(): Array<string> { return this._paths; }

    constructor(paths: Array<string>) {
        this._paths = paths;
    }

    render() {
        return (
            <div>
                {this._paths.map((x, index) => (
                    <img key={index} src={x} alt={x}/>
                ))}
            </div>
        );
    }

    getText(): string {
        return `<Image>\n${this._paths.join('\n')}\n</Image>`;
    }
}

export class NoteImageProcessor {

    constructor() {
        this.creator = this.create;
    }

    identify(text: string): NoteComponentInfo {
        const start = text.indexOf('<Image>');
        if (start < 0)
            return null;

        let end = text.indexOf('</Image>', start + 1);
        if (end < 0)
            return null;
        end += '</Image>'.length;
        
        const componentText = text.substring(start, end);
        return new NoteComponentInfo(componentText, start, this);
    }

    creator: (
        info: NoteComponentInfo,
        note: Note,
        save: () => Promise<void>,
        previous: NoteComponentInfo,
        next: NoteComponentInfo
    ) => NoteImage;

    create(
        info: NoteComponentInfo,
        note: Note,
        save: () => Promise<void>,
        previous: NoteComponentInfo,
        next: NoteComponentInfo
    ): NoteImage {
        const lines = info.text
            .replace('<Image>', '')
            .replace('</Image>', '')
            .trim().split('\n');

        return new NoteImage(lines);
    }
}