import React from 'react';
import { Note } from 'notu';
import { SimpleNoteViewer, SimpleNoteViewerAction } from './SimpleNoteViewer';
import { useState } from 'react';

interface SimpleNoteListProps {
    notes: Array<Note>,
    contextSpaceId: number,
    actionsGenerator: (note: Note) => Array<SimpleNoteViewerAction>,
    noteViewer?: (
        note: Note,
        actions: Array<SimpleNoteViewerAction>,
        isSelected: boolean
    ) => JSX.Element
}


export const SimpleNoteList = ({
    notes,
    contextSpaceId,
    actionsGenerator,
    noteViewer = null
}: SimpleNoteListProps) => {

    const [selectedNote, setSelectedNote] = useState(null);

    function onNoteClick(note: Note) {
        setSelectedNote(note);
    }

    function renderNoteViewer(note: Note) {
        if (!noteViewer) {
            return (
                <SimpleNoteViewer note={note}
                                  contextSpaceId={contextSpaceId}
                                  actions={actionsGenerator(note)}
                                  isSelected={selectedNote === note}/>
            )
        }

        return noteViewer(note, actionsGenerator(note), selectedNote === note);
    }

    return (
        <div>
            {notes.map(n => (
                <div key={n.id} onClick={() => onNoteClick(n)}>
                    {renderNoteViewer(n)}
                </div>
            ))}
        </div>
    );
}