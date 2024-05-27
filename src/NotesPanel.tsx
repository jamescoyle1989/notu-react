import { Note } from 'notu';
import React, { useImperativeHandle, useState } from 'react';

interface NotesPanelProps {
    /** Used for selectively showing/hiding the panel without losing all associated state */
    isVisible?: boolean,
    selector: NotesPanelSelector,
    display: NotesPanelDisplay,
    actionsBar?: () => JSX.Element
}

interface NotesPanelCommands {
    refresh: () => Promise<void>
}

export interface NotesPanelSelector {
    requestNotes(): void;
    onNotesRetrieved: (notes: Array<Note>) => void;
    render(): JSX.Element;
}

export interface NotesPanelDisplay {
    render(notes: Array<Note>): JSX.Element
}


export const NotesPanel = React.forwardRef((
    {
        isVisible = true,
        selector,
        display,
        actionsBar
    }: NotesPanelProps,
    ref: React.ForwardedRef<NotesPanelCommands>
) => {

    const [notes, setNotes] = useState<Array<Note>>([]);
    selector.onNotesRetrieved = retrievedNotes => setNotes(retrievedNotes);
    
    useImperativeHandle(ref, () => ({
        refresh: loadNotes
    }));

    async function loadNotes(): Promise<void> {
        selector.requestNotes();
    }

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