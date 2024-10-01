import { NoteTag, Notu, Tag } from 'notu';

export interface NoteTagDataComponentFactory {
    
    getBadgeComponent(noteTag: NoteTag, notu: Notu): JSX.Element;

    getEditorComponent(noteTag: NoteTag, notu: Notu): JSX.Element;
}