import React, { useEffect, useRef } from 'react';
import { Note } from 'notu';
import { NoteViewer, NoteViewerAction } from './NoteViewer';
import { useState } from 'react';
import { NotesPanelDisplay } from './NotesPanel';
import { NoteComponent } from './notecomponents/NoteComponent';

interface NoteListProps {
    notes: Array<Note>,
    actionsGenerator: (note: Note) => Array<NoteViewerAction>,
    noteTextSplitter: (note: Note) => Array<NoteComponent>,
    noteViewer?: (
        note: Note,
        actions: Array<NoteViewerAction>,
        isSelected: boolean,
        noteTextSplitter: (note: Note) => Array<NoteComponent>
    ) => JSX.Element
}


export const NoteList = ({
    notes,
    actionsGenerator,
    noteViewer = null,
    noteTextSplitter
}: NoteListProps) => {

    const [selectedNote, setSelectedNote] = useState(null);
    const mainDivRef = useRef();
    useEffect(() => {
        console.log('effect', mainDivRef);
        if (!mainDivRef.current)
            return;
        document.addEventListener('click', onDocumentClick);
        return () => document.removeEventListener('click', onDocumentClick);
    }, [mainDivRef]);

    function onDocumentClick(evt) {
        if (!(mainDivRef.current as any).contains(evt.target))
            setSelectedNote(null);
    }

    function onNoteClick(note: Note) {
        setSelectedNote(note);
    }

    function renderNoteViewer(note: Note) {
        if (!noteViewer) {
            return (
                <NoteViewer note={note}
                            actions={actionsGenerator(note)}
                            isSelected={selectedNote === note}
                            noteTextSplitter={noteTextSplitter}/>
            )
        }

        return noteViewer(note, actionsGenerator(note), selectedNote === note, noteTextSplitter);
    }

    return (
        <div ref={mainDivRef}>
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
    private _noteTextSplitter: (note: Note) => Array<NoteComponent>;
    private _noteViewer: (
        note: Note,
        actions: Array<NoteViewerAction>,
        isSelected: boolean
    ) => JSX.Element = null;

    constructor(
        actionsGenerator: (note: Note) => Array<NoteViewerAction>,
        noteTextSplitter: (note: Note) => Array<NoteComponent>
    ) {
        this._actionsGenerator = actionsGenerator;
        this._noteTextSplitter = noteTextSplitter;
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
                          noteViewer={this._noteViewer}
                          noteTextSplitter={this._noteTextSplitter}/>);
    }
}