import { Note, NoteAttr, Notu, Tag } from "notu";
import { NoteTagDataComponentFactory } from "../notetagdata/NoteTagDataComponentFactory";

export function renderNoteAttrValue(noteAttr: NoteAttr) {
    if (noteAttr.value === true)
        return 'True';
    else if (noteAttr.value === false)
        return 'False';
    else if (noteAttr.value instanceof Date) {
        const date = noteAttr.value as Date;
        return `${date.toDateString()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    }
    return noteAttr.value;
}


export class NotuRenderTools {
    private _notu: Notu;
    get notu(): Notu { return this._notu; }

    private _noteTextSplitter: (note: Note) => Array<any>;
    get noteTextSplitter(): (note: Note) => Array<any> { return this._noteTextSplitter; }

    private _noteTagDataComponentResolver: (tag: Tag, note: Note) => NoteTagDataComponentFactory;
    get noteTagDataComponentResolver(): (tag: Tag, note: Note) => NoteTagDataComponentFactory {
        return this._noteTagDataComponentResolver;
    }

    constructor(
        notu: Notu,
        noteTextSplitter: (note: Note) => Array<any>,
        noteTagDataComponentResolver: (tag: Tag, note: Note) => NoteTagDataComponentFactory
    ) {
        this._notu = notu;
        this._noteTextSplitter = noteTextSplitter;
        this._noteTagDataComponentResolver = noteTagDataComponentResolver;
    }
}