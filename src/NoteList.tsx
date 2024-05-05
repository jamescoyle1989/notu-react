import React from 'react';
import { Note } from 'notu';
import { NoteViewer, NoteViewerAction } from './NoteViewer';
import { useState } from 'react';

interface NoteListProps {
    notes: Array<Note>,
    contextSpaceId: number,
    actionsGenerator: (note: Note) => Array<NoteViewerAction>,
    noteViewer?: (
        note: Note,
        actions: Array<NoteViewerAction>,
        isSelected: boolean
    ) => JSX.Element
}


export const NoteList = ({
    notes,
    contextSpaceId,
    actionsGenerator,
    noteViewer = null
}: NoteListProps) => {

    const [selectedNote, setSelectedNote] = useState(null);

    function onNoteClick(note: Note) {
        setSelectedNote(note);
    }

    function renderNoteViewer(note: Note) {
        if (!noteViewer) {
            return (
                <NoteViewer note={note}
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