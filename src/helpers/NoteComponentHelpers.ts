import { Note } from 'notu';
import { NoteComponent, splitNoteTextIntoComponents } from '../notecomponents/NoteComponent';
import { MockHttpClient } from './MockHttpClient';
import { DefaultTextProcessor, NoteTextProcessor } from '../notecomponents/NoteText';
import { NoteChecklistProcessor } from '../notecomponents/NoteChecklist';
import { NoteImageProcessor } from '../notecomponents/NoteImage';
import { NoteLinkProcessor } from '../notecomponents/NoteLink';
import { NoteRandomChoiceProcessor } from '../notecomponents/NoteRandomChoice';


export function noteTextSplitter(note: Note): Array<NoteComponent> {
    return splitNoteTextIntoComponents(
        note,
        new MockHttpClient() as any,
        [
            new NoteTextProcessor(),
            new NoteChecklistProcessor(),
            new NoteImageProcessor(),
            new NoteLinkProcessor(),
            new NoteRandomChoiceProcessor()
        ],
        new DefaultTextProcessor()
    );
}