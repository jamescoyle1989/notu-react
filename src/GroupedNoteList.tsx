import { Notu, Note, Space } from 'notu';
import React, { useEffect, useState, useImperativeHandle } from 'react';
import { NoteViewer, NoteViewerAction } from './NoteViewer';
import { NoteSearch } from './NoteSearch';

interface GroupedNoteListProps {
    /** The space which we're fetching notes from */
    space: Space
    /** The client used for fetching results from the server, only add this if you want notes to be auto-fetched for you */
    notuClient?: Notu,
    /** If notuClient has not been defined, then use this prop for handling the manual fetching of notes */
    onFetchRequested?: (query: string, space: Space) => Promise<Array<Note>>,
    /** The optional default value for the search field to have. If not defined then defaults to empty */
    defaultQuery?: string,
    /** Optional handler for when the query gets changed */
    onQueryChanged?: (query: string) => void,
    /** The set of options which get generated for each note */
    noteActionsGenerator: (note: Note) => Array<NoteViewerAction>,
    actionsPanel?: () => JSX.Element,
    isVisible?: boolean,
    groupBy?: (note: Note) => any,
    groups?: (notes: Array<Note>) => Array<number>,
    groupHeader?: (key: any, notes: Array<Note>) => string,
    orderGroupsBy?: (key: any, notes: Array<Note>) => number,
    noteViewer?: (
        note: Note,
        actions: Array<NoteViewerAction>,
        isSelected: boolean
    ) => JSX.Element
}

interface GroupedNoteListCommands {
    refresh: () => Promise<void>,
    setQuery: (query: string) => void
}


export const GroupedNoteList = React.forwardRef((
    {
        space,
        notuClient = null,
        onFetchRequested = null,
        defaultQuery = null,
        onQueryChanged = null,
        noteActionsGenerator,
        actionsPanel = null,
        isVisible = true,
        groupBy = null,
        groups = null,
        groupHeader = null,
        orderGroupsBy = null,
        noteViewer = null
    }: GroupedNoteListProps,
    ref: React.ForwardedRef<GroupedNoteListCommands>
) => {

    const [currentQuery, setCurrentQuery] = useState(defaultQuery ?? '');
    const [groupsMap, setGroupsMap] = useState<Map<any, Array<Note>>>(new Map<any, Array<Note>>());
    const [hasLoaded, setHasLoaded] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);

    useImperativeHandle(ref, () => ({
        refresh: loadGroups,
        setQuery: updateQuery
    }));

    useEffect(() => {
        if (isVisible && !hasLoaded) {
            setHasLoaded(true);
            loadGroups();
        }
    }, [isVisible]);

    async function loadGroups(): Promise<void> {
        setGroupsMap(groupNotes(await fetchNotes()));
    }

    async function fetchNotes(): Promise<Array<Note>> {
        let notes: Array<Note>;
        if (!!notuClient)
            notes = await notuClient.getNotes(currentQuery, space.id);
        else
            notes = await onFetchRequested(currentQuery, space);
        return notes;
    }

    function groupNotes(notes: Array<Note>): Map<any, Array<Note>> {
        const tmpGroups = new Map<any, Array<Note>>();
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

    function getOrderedGroups(): Array<any> {
        if (!groupBy || !orderGroupsBy)
            return Array.from(groupsMap.keys());

        return Array.from(groupsMap.keys())
            .map(key => ({ key, order: orderGroupsBy(key, groupsMap.get(key)) }))
            .sort((a, b) => a.order - b.order)
            .map(x => x.key);
    }

    function updateQuery(query: string) {
        setCurrentQuery(query);
        if (!!onQueryChanged)
            onQueryChanged(query);
    }

    if (!isVisible)
        return;

    function renderActionsPanel() {
        if (!actionsPanel)
            return;
        return actionsPanel();
    }

    function renderGroup(key: any) {
        const notes = groupsMap.get(key);

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
                <NoteViewer note={note}
                            actions={noteActionsGenerator(note)}
                            isSelected={selectedNote === note}/>
            )
        }

        return noteViewer(note, noteActionsGenerator(note), selectedNote === note);
    }

    function renderGroupNotes(notes: Array<Note>) {
        return (
            <div>
                {notes.map(n => (
                    <div key={n.id} onClick={() => setSelectedNote(n)}>
                        {renderNoteViewer(n)}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div>
            <NoteSearch notuClient={notuClient as any} space={space}
                        onFetched={notes => setGroupsMap(groupNotes(notes))}
                        query={currentQuery}
                        onFetchRequested={onFetchRequested}
                        onQueryChanged={updateQuery}/>

            {renderActionsPanel()}

            {getOrderedGroups().map(key => renderGroup(key))}
        </div>
    );
});