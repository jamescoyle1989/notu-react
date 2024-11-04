import { Note, NoteComponentInfo } from 'notu';
import { NoteComponent } from 'notu/dist/types/notecomponents/NoteComponent';
import React from 'react';

export class NoteParagraph {
    private _children: Array<NoteComponent>;
    get children(): Array<NoteComponent> { return this._children; }

    constructor(children: Array<NoteComponent>) {
        this._children = children;
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