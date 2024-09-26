import { NoteTag, Tag } from 'notu';

export interface NoteTagDataComponentFactory {
    
    getBadgeComponent(noteTag: NoteTag): JSX.Element;

    getEditorComponent(noteTag: NoteTag): JSX.Element;
}