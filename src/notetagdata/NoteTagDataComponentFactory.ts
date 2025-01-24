import { Note, NoteTag, Notu, Tag } from 'notu';

export interface NoteTagDataComponentFactory {
    
    getBadgeComponent(noteTag: NoteTag, note: Note, notu: Notu): JSX.Element;

    getEditorComponent(noteTag: NoteTag, note: Note, notu: Notu, refreshCallback: () => void): JSX.Element;

    /** Called when onConfirm has indicated that the NoteEditor should proceed with the save automatically, and the save has gone through successfully */
    validate(noteTag: NoteTag, note: Note, notu: Notu): Promise<boolean>;
}