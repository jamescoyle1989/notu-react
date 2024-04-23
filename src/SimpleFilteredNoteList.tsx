import { CachedClient, Note, Space } from 'notu';
import React, { useEffect, useState } from 'react';
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
    defaultFilter?: string,
    /** The set of options which get generated for each note */
    noteActionsGenerator: (note: Note) => Array<SimpleNoteViewerAction>,
    actionsPanel?: () => JSX.Element
    isVisible?: boolean,
}


export const SimpleFilteredNoteList = ({
    space,
    notuClient = null,
    onFetchRequested = null,
    defaultFilter = null,
    noteActionsGenerator,
    actionsPanel = null,
    isVisible = true
}: SimpleFilteredNoteListProps) => {

    const [currentFilter, setCurrentFilter] = useState(defaultFilter ?? '');
    const [notes, setNotes] = useState<Array<Note>>([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        if (isVisible && !hasLoaded) {
            setHasLoaded(true);
            loadNotes();
        }
    }, [isVisible]);

    async function loadNotes(): Promise<void> {
        let notes: Array<Note>;
        if (!!notuClient)
            notes = await notuClient.getNotes(currentFilter, space.id);
        else
            notes = await onFetchRequested(currentFilter, space);
        setNotes(notes);
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
                        onFetched={setNotes} defaultValue={defaultFilter}
                        onFetchRequested={onFetchRequested}
                        onQueryChanged={setCurrentFilter}/>

            {renderActionsPanel()}

            <SimpleNoteList notes={notes} contextSpaceId={space.id}
                            actionsGenerator={noteActionsGenerator}
                            postActionRefreshCallback={loadNotes}/>
        </div>
    );
}