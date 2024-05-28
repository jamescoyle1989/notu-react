import React from 'react';
import { Note } from 'notu';
import { NoteViewer, NoteViewerAction } from './NoteViewer';
import { useState } from 'react';
import { NotesPanelDisplay } from './NotesPanel';

interface NoteListProps {
    notes: Array<Note>,
    actionsGenerator: (note: Note) => Array<NoteViewerAction>,
    noteViewer?: (
        note: Note,
        actions: Array<NoteViewerAction>,
        isSelected: boolean
    ) => JSX.Element
}


export const NoteList = ({
    notes,
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


export class PanelNoteList implements NotesPanelDisplay {

    private _actionsGenerator: (note: Note) => Array<NoteViewerAction>;
    private _noteViewer: (
        note: Note,
        actions: Array<NoteViewerAction>,
        isSelected: boolean
    ) => JSX.Element = null;

    constructor(
        actionsGenerator: (note: Note) => Array<NoteViewerAction>
    ) {
        this._actionsGenerator = actionsGenerator;
    }

    withNoteViewer(
        func: (note: Note, actions: Array<NoteViewerAction>, isSelected: boolean) => JSX.Element
    ): PanelNoteList {
        this._noteViewer = func;
        return this;
    }

    renderHooks(): void {
    }

    render(notes: Array<Note>) {
        return (<NoteList notes={notes} 
                          actionsGenerator={this._actionsGenerator}
                          noteViewer={this._noteViewer}/>);
    }
}