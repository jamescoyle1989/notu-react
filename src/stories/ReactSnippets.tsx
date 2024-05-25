import React from 'react';
import { NoteViewer } from "../NoteViewer";

export function noteViewerWithoutDate(note, actions, isSelected) {
    return (
        <NoteViewer note={note} actions={actions}
                          isSelected={isSelected}
                          showDate={false}/>
    )
}