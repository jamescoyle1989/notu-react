import React from 'react';
import { NoteViewer } from "../NoteViewer";

export function noteViewerWithoutDate(note, actions, isSelected, contextSpaceId) {
    return (
        <NoteViewer note={note} actions={actions}
                          isSelected={isSelected}
                          contextSpaceId={contextSpaceId}
                          showDate={false}/>
    )
}