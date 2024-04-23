import React from 'react';
import { Note } from 'notu';
import { SimpleNoteViewer, SimpleNoteViewerAction } from './SimpleNoteViewer';
import { useState } from 'react';

interface SimpleNoteListProps {
    notes: Array<Note>,
    contextSpaceId: number,
    actionsGenerator: (note: Note) => Array<SimpleNoteViewerAction>,
    postActionRefreshCallback: () => void
}


export const SimpleNoteList = ({
    notes,
    contextSpaceId,
    actionsGenerator,
    postActionRefreshCallback
}: SimpleNoteListProps) => {

    const [selectedNote, setSelectedNote] = useState(null);

    function onNoteClick(note: Note) {
        setSelectedNote(note);
    }

    return (
        <div>
            {notes.map(n => (
                <div key={n.id} onClick={() => onNoteClick(n)}>
                    <SimpleNoteViewer key={n.id} note={n} contextSpaceId={contextSpaceId} 
                        actions={actionsGenerator(n)}
                        isSelected={selectedNote === n}
                        postActionRefreshCallback={postActionRefreshCallback}/>
                </div>
            ))}
        </div>
    );
}