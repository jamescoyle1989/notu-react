import { Note } from 'notu';
import React, { useEffect, useImperativeHandle, useState } from 'react';

interface NotesPanelProps {
    /** Used for selectively showing/hiding the panel without losing all associated state */
    isVisible?: boolean,
    selector: NotesPanelSelector,
    display: NotesPanelDisplay,
    actionsBar?: () => JSX.Element,
    /** Defaults to false, if true then every time the visibility is toggled from false to true, the panel will refresh itself */
    autoRefresh?: boolean
}

interface NotesPanelCommands {
    refresh: () => void
}

export interface NotesPanelSelector {
    requestNotes(): void;
    onNotesRetrieved: (notes: Array<Note>) => void;
    //This will always happen each time an update happens. Use this to make sure the same hooks are consistently called on each update cycle.
    renderHooks(): void;
    //This will only happen if the NotesPanel is actually set to visible
    render(): JSX.Element;
}

export interface NotesPanelDisplay {
    //This will always happen each time an update happens. Use this to make sure the same hooks are consistently called on each update cycle.
    renderHooks(): void;
    //This will only happen if the NotesPanel is actually set to visible
    render(notes: Array<Note>): JSX.Element
}


export const NotesPanel = React.forwardRef((
    {
        isVisible = true,
        selector,
        display,
        actionsBar,
        autoRefresh = false
    }: NotesPanelProps,
    ref: React.ForwardedRef<NotesPanelCommands>
) => {

    const [notes, setNotes] = useState<Array<Note>>([]);
    selector.onNotesRetrieved = retrievedNotes => setNotes(retrievedNotes);

    useEffect(() => {
        if (isVisible && autoRefresh)
            selector.requestNotes();
    }, [isVisible, autoRefresh])

    useImperativeHandle(ref, () => ({
        refresh: selector.requestNotes
    }));

    selector.renderHooks();
    display.renderHooks();

    if (!isVisible)
        return;

    function renderActionsBar() {
        if (!actionsBar)
            return;
        return actionsBar();
    }

    return (
        <div>
            {selector.render()}
            {renderActionsBar()}
            {display.render(notes)}
        </div>
    );
})