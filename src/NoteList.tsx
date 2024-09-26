import React from 'react';
import { Note, Tag } from 'notu';
import { NoteViewer, NoteViewerAction } from './NoteViewer';
import { useState } from 'react';
import { NotesPanelDisplay } from './NotesPanel';
import styles from './NoteList.module.css'
import { NoteTagDataComponentFactory } from './notetagdata/NoteTagDataComponentFactory';

interface NoteListProps {
    notes: Array<Note>,
    actionsGenerator: (note: Note) => Array<NoteViewerAction>,
    noteTextSplitter: (note: Note) => Array<any>,
    noteTagDataComponentResolver: (tag: Tag) => NoteTagDataComponentFactory,
    noteViewer?: (
        note: Note,
        actions: Array<NoteViewerAction>,
        isSelected: boolean,
        noteTextSplitter: (note: Note) => Array<any>
    ) => JSX.Element
}


export const NoteList = ({
    notes,
    actionsGenerator,
    noteTagDataComponentResolver,
    noteViewer = null,
    noteTextSplitter
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
                            isSelected={selectedNote === note}
                            noteTextSplitter={noteTextSplitter}
                            noteTagDataComponentResolver={noteTagDataComponentResolver}/>
            )
        }

        return noteViewer(note, actionsGenerator(note), selectedNote === note, noteTextSplitter);
    }



    return (
        <div>
            {notes.map((n, index) => (
                <div key={n.id} onClick={() => onNoteClick(n)}
                        className={`${index > 0 ? styles.upperBorderDivider : ''}`}>
                    {renderNoteViewer(n)}
                </div>
            ))}
        </div>
    );
}


export class PanelNoteList implements NotesPanelDisplay {

    private _actionsGenerator: (note: Note) => Array<NoteViewerAction>;
    private _noteTextSplitter: (note: Note) => Array<any>;
    private _noteTagDataComponentResolver: (tag: Tag) => NoteTagDataComponentFactory;
    private _noteViewer: (
        note: Note,
        actions: Array<NoteViewerAction>,
        isSelected: boolean
    ) => JSX.Element = null;

    constructor(
        actionsGenerator: (note: Note) => Array<NoteViewerAction>,
        noteTextSplitter: (note: Note) => Array<any>,
        noteTagDataComponentResolver: (tag: Tag) => NoteTagDataComponentFactory
    ) {
        this._actionsGenerator = actionsGenerator;
        this._noteTextSplitter = noteTextSplitter;
        this._noteTagDataComponentResolver = noteTagDataComponentResolver;
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
                          noteTextSplitter={this._noteTextSplitter}
                          noteTagDataComponentResolver={this._noteTagDataComponentResolver}/>);
    }
}