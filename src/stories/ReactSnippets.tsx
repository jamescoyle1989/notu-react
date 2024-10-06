import React from 'react';
import { NoteViewer, NoteViewerAction } from "../NoteViewer";
import { Note, NoteTag, Notu, Tag } from 'notu';
import { NoteTagDataComponentFactory } from '../notetagdata/NoteTagDataComponentFactory';

export function noteViewerWithoutDate(
    note: Note,
    notu: Notu,
    actions: Array<NoteViewerAction>,
    isSelected: boolean,
    noteTextSplitter: (note: Note) => Array<any>,
    noteTagDataComponentResolver: (tag: Tag) => NoteTagDataComponentFactory
) {
    return (
        <NoteViewer note={note} notu={notu} actions={actions}
                    isSelected={isSelected}
                    showDate={false}
                    noteTextSplitter={noteTextSplitter}
                    noteTagDataComponentResolver={noteTagDataComponentResolver}/>
    )
}


export class TestNoteTagDataComponentFactory {

    getBadgeComponent(noteTag: NoteTag): JSX.Element {
        return (<span className="ml-1">Name: {noteTag.data.name}</span>);
    }

    getEditorComponent(noteTag: NoteTag): JSX.Element {
        return (<p>Name: {noteTag.data.name}</p>);
    }
}