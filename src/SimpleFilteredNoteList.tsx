import { CachedClient, Note, Space } from 'notu';
import React, { useEffect, useState, useImperativeHandle } from 'react';
import { SimpleNoteViewerAction } from './SimpleNoteViewer';
import { NoteSearch } from './NoteSearch';
import { SimpleNoteList } from './SimpleNoteList';

interface SimpleFilteredNoteListProps {
    /** The space which we're fetching notes from */
    space: Space
    /** The client used for fetching results from the server, only add this if you want notes to be auto-fetched for you */
    notuClient?: CachedClient,
    /** If notuClient has not been defined, then use this prop for handling the manual fetching of notes */
    onFetchRequested?: (query: string, space: Space) => Promise<Array<Note>>,
    /** The optional default value for the search field to have. If not defined then defaults to empty */
    defaultQuery?: string,
    /** Optional handler for when the query gets changed */
    onQueryChanged?: (query: string) => void,
    /** The set of options which get generated for each note */
    noteActionsGenerator: (note: Note) => Array<SimpleNoteViewerAction>,
    actionsPanel?: () => JSX.Element,
    isVisible?: boolean
}

interface SimpleFilteredNoteListCommands {
    refresh: () => Promise<void>,
    setQuery: (query: string) => void
}


export const SimpleFilteredNoteList = React.forwardRef((
    {
        space,
        notuClient = null,
        onFetchRequested = null,
        defaultQuery = null,
        onQueryChanged = null,
        noteActionsGenerator,
        actionsPanel = null,
        isVisible = true
    }: SimpleFilteredNoteListProps,
    ref: React.ForwardedRef<SimpleFilteredNoteListCommands>
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

            <SimpleNoteList notes={notes} contextSpaceId={space.id}
                            actionsGenerator={noteActionsGenerator}/>
        </div>
    );
});