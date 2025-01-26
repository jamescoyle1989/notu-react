import { Note } from 'notu';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';


export class NoteViewerAction {
    name: string;
    action: (note: Note) => void;

    public constructor(name: string, action: (note: Note) => void) {
        this.name = name;
        this.action = action;
    }
}


interface NoteActionsViewerProps {
    note: Note,
    actions: Array<NoteViewerAction>
}

export interface NoteActionsViewerCommands {
    collapse: () => void
}


export const NoteActionsViewer = React.forwardRef((
    {
        note,
        actions
    }: NoteActionsViewerProps,
    ref: React.ForwardedRef<NoteActionsViewerCommands>
) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const menuDivRef = useRef();
    
    useEffect(() => {
        if (!menuDivRef.current)
            document.removeEventListener('click', onDocumentClick);
        else
            document.addEventListener('click', onDocumentClick);
        return () => document.removeEventListener('click', onDocumentClick);
    }, [menuDivRef]);

    function onDocumentClick(evt) {
        if (!(menuDivRef.current as any).contains(evt.target))
            setIsExpanded(false);
    }

    useImperativeHandle(ref, () => ({
        collapse: () => setIsExpanded(false)
    }));

    function toggleShowActions() {
        setIsExpanded(!isExpanded);
    }

    function callAction(action: (note: Note) => void) {
        action(note);
        setIsExpanded(false);
    }

    function renderActions() {
        if ((actions?.length ?? 0) == 0)
            return;

        return (
            <div className={`dropdown is-left ml-1 mr-1 ${isExpanded ? 'is-active' : ''}`} ref={menuDivRef}>
                <div className="dropdown-trigger">
                    <button className="button pl-1 pr-1" aria-haspopup="true" aria-controls="dropdown-menu"
                            onClick={toggleShowActions}>•••</button>
                </div>
                <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        {actions.map(x => (
                            <a key={x.name} className="dropdown-item" onClick={() => callAction(x.action)}>{x.name}</a>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return renderActions();
});