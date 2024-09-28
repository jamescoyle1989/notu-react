import React from 'react';
import { NoteViewer } from "../NoteViewer";
import { NoteTag } from 'notu';

export function noteViewerWithoutDate(note, actions, isSelected, noteTextSplitter, noteTagDataComponentResolver) {
    return (
        <NoteViewer note={note} actions={actions}
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