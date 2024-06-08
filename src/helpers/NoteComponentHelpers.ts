import { Note } from 'notu';
import { NoteComponent, splitNoteTextIntoComponents } from '../notecomponents/NoteComponent';
import { MockHttpClient } from './MockHttpClient';
import { DefaultTextProcessor, NoteTextProcessor } from '../notecomponents/NoteText';
import { NoteChecklistProcessor } from '../notecomponents/NoteChecklist';


export function noteTextSplitter(note: Note): Array<NoteComponent> {
    return splitNoteTextIntoComponents(
        note,
        new MockHttpClient() as any,
        [new NoteTextProcessor(), new NoteChecklistProcessor()],
        new DefaultTextProcessor()
    );
}