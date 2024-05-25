import { Notu, Note, Space } from 'notu';
import React, { useEffect, useState, useImperativeHandle } from 'react';
import { NoteViewer, NoteViewerAction } from './NoteViewer';

interface MultiSpaceNoteListProps {
    /** The set of notes which we want to display */
    notes: Array<Note>,
    /** The set of options which get generated for each note */
    actionsGenerator: (note: Note) => Array<NoteViewerAction>,
    actionsPanel?: () => JSX.Element,
    isVisible?: boolean,
    noteViewer?: (
        note: Note,
        actions: Array<NoteViewerAction>,
        isSelected: boolean
    ) => JSX.Element
}


export const MultiSpaceNoteList = ({
    notes,
    actionsGenerator,
    actionsPanel = null,
    isVisible = true,
    noteViewer = null
}) => {

    const [selectedNote, setSelectedNote] = useState(null);

    function groupNotes(notes: Array<Note>): Map<Space, Array<Note>> {
        const tmpGroups = new Map<Space, Array<Note>>();
        for (const note of notes) {
            let group = tmpGroups.get(note.space);
            if (group == undefined) {
                group = [];
                tmpGroups.set(note.space, group);
            }
            group.push(note);
        }
        return tmpGroups;
    }

    function getOrderedGroups(groups: Map<Space, Array<Note>>): Array<Space> {
        const spaces = Array.from(groups.keys());
        return spaces.sort((a, b) => a.name.localeCompare(b.name))
    }

    if (!isVisible)
        return;

    function renderActionsPanel() {
        if (!actionsPanel)
            return;
        return actionsPanel();
    }

    function renderGroup(groups: Map<Space, Array<Note>>, space: Space) {
        const notes = groups.get(space);

        return (
            <div key={space.name}>
                <h2 className="title is-4 is-underlined mb-1 mt-3">{space.name}</h2>
                {notes.map(n => (
                    <div key={n.id} onClick={() => setSelectedNote(n)}>
                        {renderNoteViewer(n, space)}
                    </div>
                ))}
            </div>
        )
    }

    function renderNoteViewer(note: Note, space: Space) {
        if (!noteViewer) {
            return (
                <NoteViewer note={note}
                            actions={actionsGenerator(note)}
                            isSelected={selectedNote === note}/>
            )
        }

        return noteViewer(note, actionsGenerator(note), selectedNote === note);
    }

    const groups = groupNotes(notes);
    return (
        <div>
            {renderActionsPanel()}

            {getOrderedGroups(groups).map(key => renderGroup(groups, key))}
        </div>
    )
}