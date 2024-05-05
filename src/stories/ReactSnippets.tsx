import React from 'react';
import { SimpleNoteViewer } from "../SimpleNoteViewer";

export function simpleNoteViewerWithoutDate(note, actions, isSelected, contextSpaceId) {
    return (
        <SimpleNoteViewer note={note} actions={actions}
                          isSelected={isSelected}
                          contextSpaceId={contextSpaceId}
                          showDate={false}/>
    )
}