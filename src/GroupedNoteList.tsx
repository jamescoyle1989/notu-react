import { Note, Notu, Tag } from 'notu';
import React, { useState } from 'react';
import { NoteViewer, NoteViewerAction } from './NoteViewer';
import { NotesPanelDisplay } from './NotesPanel';
import styles from './GroupedNoteList.module.css';
import { NoteTagDataComponentFactory } from './notetagdata/NoteTagDataComponentFactory';

interface GroupedNoteListProps {
    notes: Array<Note>,
    notu: Notu,
    actionsGenerator: (note: Note) => Array<NoteViewerAction>,
    groupBy?: (note: Note) => number,
    groups?: (notes: Array<Note>) => Array<number>,
    groupHeader?: (key: number, notes: Array<Note>) => string,
    noteTextSplitter: (note: Note) => Array<any>,
    noteTagDataComponentResolver: (tag: Tag, note: Note) => NoteTagDataComponentFactory
    noteViewer?: (
        note: Note,
        actions: Array<NoteViewerAction>,
        isSelected: boolean,
        noteTextSplitter: (note: Note) => Array<any>
    ) => JSX.Element
}

interface GroupedNoteListCommands {
    refresh: () => Promise<void>,
    setQuery: (query: string) => void
}


export const GroupedNoteList = React.forwardRef((
    {
        notes,
        notu,
        actionsGenerator,
        noteTextSplitter,
        groupBy = null,
        groups = null,
        groupHeader = null,
        noteTagDataComponentResolver,
        noteViewer = null
    }: GroupedNoteListProps,
    ref: React.ForwardedRef<GroupedNoteListCommands>
) => {

    const [selectedNote, setSelectedNote] = useState(null);

    function groupNotes(notes: Array<Note>): Map<number, Array<Note>> {
        const tmpGroups = new Map<number, Array<Note>>();
        if (!groupBy)
            tmpGroups.set(null, notes);
        else {
            if (!!groups) {
                for (const key of groups(notes))
                    tmpGroups.set(key, []);
            }
            else {
                for (const note of notes)
                    tmpGroups.set(groupBy(note), []);
            }

            for (const note of notes) {
                const key = groupBy(note);
                let arr = tmpGroups.get(key);
                if (arr != undefined)
                    arr.push(note);
            }
        }
        return tmpGroups;
    }

    function getOrderedGroups(groupsMap: Map<number, Array<Note>>): Array<number> {
        if (!groupBy)
            return Array.from(groupsMap.keys());

        return Array.from(groupsMap.keys()).sort((a, b) => a - b);
    }

    function renderGroup(key: any, notes: Array<Note>) {
        return (
            <div key={key}>
                {renderGroupHeader(key, notes)}
                {renderGroupNotes(notes)}
            </div>
        );
    }

    function renderGroupHeader(key: any, notes: Array<Note>) {
        if (!groupBy || !groupHeader)
            return;
        return (<h2 className="title is-4 is-underlined mb-1 mt-3">{groupHeader(key, notes)}</h2>);
    }

    function renderNoteViewer(note: Note) {
        if (!noteViewer) {
            return (
                <NoteViewer note={note} notu={notu}
                            actions={actionsGenerator(note)}
                            isSelected={selectedNote === note}
                            noteTextSplitter={noteTextSplitter}
                            noteTagDataComponentResolver={noteTagDataComponentResolver}/>
            )
        }

        return noteViewer(note, actionsGenerator(note), selectedNote === note, noteTextSplitter);
    }

    function renderGroupNotes(notes: Array<Note>) {
        return (
            <div>
                {notes.map((n, index) => (
                    <div key={n.id} onClick={() => setSelectedNote(n)}
                            className={`${index > 0 ? styles.upperBorderDivider : ''}`}>
                        {renderNoteViewer(n)}
                    </div>
                ))}
            </div>
        );
    }

    const groupsMap = groupNotes(notes);

    return (
        <div>
            {getOrderedGroups(groupsMap).map(key => renderGroup(key, groupsMap.get(key)))}
        </div>
    );
});


export class PanelGroupedNoteList implements NotesPanelDisplay {

    private _notu: Notu;
    private _actionsGenerator: (note: Note) => Array<NoteViewerAction>;
    private _noteTextSplitter: (note: Note) => Array<any>;
    private _noteViewer: (
        note: Note,
        actions: Array<NoteViewerAction>,
        isSelected: boolean
    ) => JSX.Element = null;

    private _groupBy: (note: Note) => number;
    private _groups: (notes: Array<Note>) => Array<number>;
    private _groupHeader: (key: number, notes: Array<Note>) => string;
    private _noteTagDataComponentResolver: (tag: Tag, note: Note) => NoteTagDataComponentFactory;

    constructor(
        notu: Notu,
        actionsGenerator: (note: Note) => Array<NoteViewerAction>,
        noteTextSplitter: (note: Note) => Array<any>,
        noteTagDataComponentResolver: (tag: Tag, note: Note) => NoteTagDataComponentFactory,
        groupBy: (note: Note) => number
    ) {
        this._notu = notu;
        this._actionsGenerator = actionsGenerator;
        this._noteTextSplitter = noteTextSplitter;
        this._noteTagDataComponentResolver = noteTagDataComponentResolver;
        this._groupBy = groupBy;
    }

    withNoteViewer(
        func: (note: Note, actions: Array<NoteViewerAction>, isSelected: boolean) => JSX.Element
    ): PanelGroupedNoteList {
        this._noteViewer = func;
        return this;
    }

    withExplicitGroups(groups: (notes: Array<Note>) => Array<number>): PanelGroupedNoteList {
        this._groups = groups;
        return this;
    }

    withHeaders(func: (key: number, notes: Array<Note>) => string): PanelGroupedNoteList {
        this._groupHeader = func;
        return this;
    }

    renderHooks(): void {
    }

    render(notes: Array<Note>) {
        return (<GroupedNoteList notes={notes} notu={this._notu}
                                 actionsGenerator={this._actionsGenerator}
                                 noteViewer={this._noteViewer}
                                 groupBy={this._groupBy}
                                 groups={this._groups}
                                 groupHeader={this._groupHeader}
                                 noteTextSplitter={this._noteTextSplitter}
                                 noteTagDataComponentResolver={this._noteTagDataComponentResolver}/>);
    }
}