import { Note, Notu, splitNoteTextIntoComponents, Tag } from "notu";
import { NoteTagDataComponentFactory } from "../notetagdata/NoteTagDataComponentFactory";
import { NoteComponent, NoteComponentProcessor } from "notu/dist/types/notecomponents/NoteComponent";
import { DefaultTextProcessor, NoteTextProcessor } from "../notecomponents/NoteText";
import { NoteParagraph } from "../notecomponents/NoteParagraph";
import { NoteRandomChoiceProcessor } from "../notecomponents/NoteRandomChoice";
import { NoteChecklistProcessor } from "../notecomponents/NoteChecklist";
import { NoteImageProcessor } from "../notecomponents/NoteImage";
import { NoteLinkProcessor } from "../notecomponents/NoteLink";


export class NotuRenderTools {
    private _notu: Notu;
    get notu(): Notu { return this._notu; }

    private _noteComponentProcessors: Array<NoteComponentProcessor>;
    get noteComponentProcessors(): Array<NoteComponentProcessor> { return this._noteComponentProcessors; }

    private _noteTextSplitter: (note: Note) => Array<any>;
    get noteTextSplitter(): (note: Note) => Array<any> { return this._noteTextSplitter; }

    private _noteTagDataComponentResolver: (tag: Tag, note: Note) => NoteTagDataComponentFactory;
    get noteTagDataComponentResolver(): (tag: Tag, note: Note) => NoteTagDataComponentFactory {
        return this._noteTagDataComponentResolver;
    }

    constructor(
        notu: Notu,
        noteComponentProcessors: Array<NoteComponentProcessor>,
        noteTagDataComponentResolver: (tag: Tag, note: Note) => NoteTagDataComponentFactory
    ) {
        this._notu = notu;
        this._noteComponentProcessors = noteComponentProcessors;
        this._noteTagDataComponentResolver = noteTagDataComponentResolver;

        this._noteTextSplitter = (note: Note) => splitNoteTextIntoComponents(
            note,
            notu,
            noteComponentProcessors,
            new DefaultTextProcessor(),
            (components: Array<NoteComponent>) => new NoteParagraph(components)
        );
    }

    static defaultNoteComponentProcessors(): Array<NoteComponentProcessor> {
        return [
            new NoteTextProcessor(),
            new NoteChecklistProcessor(),
            new NoteImageProcessor(),
            new NoteLinkProcessor(),
            new NoteRandomChoiceProcessor()
        ];
    }
}