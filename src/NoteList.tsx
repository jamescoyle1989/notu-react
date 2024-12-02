import React from 'react';
import { Note } from 'notu';
import { NoteViewer } from './NoteViewer';
import { NoteViewerAction } from './NoteActionsViewer';
import { useState } from 'react';
import { NotesPanelDisplay } from './NotesPanel';
import styles from './NoteList.module.css'
import { NotuRenderTools } from './helpers/NotuRender';

interface NoteListProps {
    notes: Array<Note>,
    notuRenderTools: NotuRenderTools,
    actionsGenerator: (note: Note) => Array<NoteViewerAction>,
    noteViewer?: (
        note: Note,
        actions: Array<NoteViewerAction>,
        isSelected: boolean,
        noteTextSplitter: (note: Note) => Array<any>
    ) => JSX.Element
}


export const NoteList = ({
    notes,
    notuRenderTools,
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
                <NoteViewer note={note} notuRenderTools={notuRenderTools}
                            actions={actionsGenerator(note)}
                            isSelected={selectedNote === note}/>
            )
        }

        return noteViewer(note, actionsGenerator(note), selectedNote === note, notuRenderTools.noteTextSplitter);
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

    private _notuRenderTools: NotuRenderTools;
    private _actionsGenerator: (note: Note) => Array<NoteViewerAction>;
    private _noteViewer: (
        note: Note,
        actions: Array<NoteViewerAction>,
        isSelected: boolean
    ) => JSX.Element = null;

    constructor(
        notuRenderTools: NotuRenderTools,
        actionsGenerator: (note: Note) => Array<NoteViewerAction>
    ) {
        this._notuRenderTools = notuRenderTools;
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
        return (<NoteList notes={notes} notuRenderTools={this._notuRenderTools}
                          actionsGenerator={this._actionsGenerator}
                          noteViewer={this._noteViewer}/>);
    }
}