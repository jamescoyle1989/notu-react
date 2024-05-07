import { Notu, Note, Space } from 'notu';
import React, { useEffect, useState, useImperativeHandle } from 'react';
import { NoteViewerAction } from './NoteViewer';
import { NoteSearch } from './NoteSearch';
import { NoteList } from './NoteList';

interface FilteredNoteListProps {
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
    noteViewer?: (
        note: Note,
        actions: Array<NoteViewerAction>,
        isSelected: boolean
    ) => JSX.Element
}

interface FilteredNoteListCommands {
    refresh: () => Promise<void>,
    setQuery: (query: string) => void
}


export const FilteredNoteList = React.forwardRef((
    {
        space,
        notuClient = null,
        onFetchRequested = null,
        defaultQuery = null,
        onQueryChanged = null,
        noteActionsGenerator,
        actionsPanel = null,
        isVisible = true,
        noteViewer = null
    }: FilteredNoteListProps,
    ref: React.ForwardedRef<FilteredNoteListCommands>
) => {

    const [currentQuery, setCurrentQuery] = useState(defaultQuery ?? '');
    const [notes, setNotes] = useState<Array<Note>>([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    useImperativeHandle(ref, () => ({
        refresh: loadNotes,
        setQuery: updateQuery
    }));

    useEffect(() => {
        if (isVisible && !hasLoaded) {
            setHasLoaded(true);
            loadNotes();
        }
    }, [isVisible]);

    async function loadNotes(): Promise<void> {
        let notes: Array<Note>;
        if (!!notuClient)
            notes = await notuClient.getNotes(currentQuery, space.id);
        else
            notes = await onFetchRequested(currentQuery, space);
        setNotes(notes);
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

    return (
        <div>
            <NoteSearch notuClient={notuClient as any} space={space}
                        onFetched={setNotes} query={currentQuery}
                        onFetchRequested={onFetchRequested}
                        onQueryChanged={updateQuery}/>

            {renderActionsPanel()}

            <NoteList notes={notes} contextSpaceId={space.id}
                            actionsGenerator={noteActionsGenerator}
                            noteViewer={noteViewer}/>
        </div>
    );
});