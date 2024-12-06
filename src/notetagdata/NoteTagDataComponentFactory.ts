import { Note, NoteTag, Notu, Tag } from 'notu';

export interface NoteTagDataComponentFactory {
    
    getBadgeComponent(noteTag: NoteTag, note: Note, notu: Notu): JSX.Element;

    getEditorComponent(noteTag: NoteTag, note: Note, notu: Notu): JSX.Element;
}