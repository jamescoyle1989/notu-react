import { Note, NoteComponentInfo } from 'notu';
import { NoteComponent } from 'notu/dist/types/notecomponents/NoteComponent';
import React from 'react';
import { NoteText } from './NoteText';

export class NoteParagraph {
    private _children: Array<NoteComponent>;
    get children(): Array<NoteComponent> { return this._children; }

    constructor(children: Array<NoteComponent>) {
        console.log(children);
        this._children = children;
        if (children.length == 0)
            return;
        if (children[0] instanceof NoteText) {
            const firstText = children[0] as NoteText;
            firstText.displayText = firstText.displayText.trimStart();
        }
        if (children[children.length - 1] instanceof NoteText) {
            const lastText = children[children.length - 1] as NoteText;
            lastText.displayText = lastText.displayText.trimEnd();
        }
    }

    render() {
        return (
            <p>
                {this._children.map((x, index) => (
                    <span key={index}>{(x as any).render()}</span>
                ))}
            </p>
        )
    }

    getText(): string {
        return this._children.map(x => x.getText()).join('');
    }
}