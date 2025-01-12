import { Note, NoteComponentInfo } from 'notu';
import React, { useState } from 'react';

export class NoteChecklist {
    private _lines: Array<string>;
    get lines(): Array<string> { return this._lines; }
    private _save: () => Promise<void>;

    constructor(lines: Array<string>, save: () => Promise<void>) {
        this._lines = lines;
        this._save = save;
    }

    render() {
        const myself = this;
        const [manualRefresh, setManualRefresh] = useState(false);

        function onCheckboxChange(evt, lineIndex: number) {
            const isChecked = evt.target.checked;
            let line = myself.lines[lineIndex];
            if (isChecked && !line.startsWith('✔'))
                line = '✔ ' + line;
            else if (!isChecked && line.startsWith('✔'))
                line = line.substring('✔'.length).trim();
            myself._lines[lineIndex] = line;
            setManualRefresh(!manualRefresh);
            myself._save();
        }

        function getLineRenderText(line: string) {
            if (line.startsWith('✔'))
                return line.substring(1).trim();
            return line.trim();
        }

        return (
            <div>
                {this._lines.map((line, index) => {
                    const isChecked = line.startsWith('✔');
                    return (
                        <div key={index} className="control">
                            <label className={`checkbox ${isChecked ? 'has-text-grey-light' : ''}`}
                                    style={{textDecoration: isChecked ? 'line-through' : 'none'}}>
                                <input type="checkbox" className="mr-2" checked={isChecked} onChange={evt => onCheckboxChange(evt, index)}/>
                                {getLineRenderText(line)}
                            </label>
                        </div>
                    );
                })}
            </div>
        );
    }

    getText(): string {
        return `<Checklist>\n${this._lines.join('\n')}\n</Checklist>`;
    }
}


export class NoteChecklistProcessor {

    get displayName(): string { return 'Checklist'; }

    newComponentText(textContent: string): string {
        return `<Checklist>
${textContent}
</Checklist>`;
    }

    get componentShowsInlineInParagraph(): boolean { return false; }

    identify(text: string): NoteComponentInfo {
        const start = text.indexOf('<Checklist>');
        if (start < 0)
            return null;

        let end = text.indexOf('</Checklist>', start + 1);
        if (end < 0)
            return null;
        end += '</Checklist>'.length;
        
        const componentText = text.substring(start, end);
        return new NoteComponentInfo(componentText, start, this);
    }

    create(info: NoteComponentInfo, note: Note, save: () => Promise<void>): NoteChecklist {
        const lines = info.text
            .replace('<Checklist>', '')
            .replace('</Checklist>', '')
            .trim().split('\n');
    
        return new NoteChecklist(lines, save);
    }
}