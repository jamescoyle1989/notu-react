import React from 'react';
import { Note, NoteTag } from 'notu';
import { NoteTagBadge } from './NoteTagBadge';
import 'bulma';
import { useEffect, useState } from 'react';

interface SimpleNoteViewerProps {
    note: Note,
    contextSpaceId: number,
    actions: Array<SimpleNoteViewerAction>,
    isSelected: boolean
}


export class SimpleNoteViewerAction {
    name: string;
    action: (note: Note) => void;

    public constructor(name: string, action: (note: Note) => void) {
        this.name = name;
        this.action = action;
    }
}


export const SimpleNoteViewer = ({
    note,
    contextSpaceId,
    actions,
    isSelected
}: SimpleNoteViewerProps) => {
    const [showActions, setShowActions] = useState(false);

    useEffect(() => {
        if (!isSelected)
            setShowActions(false);
    }, [isSelected])

    const dateTimeString = `${note.date.toDateString()} ${note.date.getHours().toString().padStart(2, '0')}:${note.date.getMinutes().toString().padStart(2, '0')}`;

    function toggleShowActions() {
        setShowActions(!showActions);
    }

    function callAction(action: (note: Note) => void) {
        action(note);
        setShowActions(false);
    }

    function renderOwnTag() {
        if (!!note.ownTag) {
            const noteTag = new NoteTag(null, note.ownTag);
            return (<NoteTagBadge noteTag={noteTag} contextSpaceId={note.spaceId}></NoteTagBadge>)
        }
    }

    function renderActions() {
        if (actions?.length ?? 0 > 0) {
            return (
                <div className={`dropdown is-right ${showActions ? 'is-active' : ''}`}>
                    <div className="dropdown-trigger">
                        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu"
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
    }

    return (
        <div className={`is-flex is-align-items-center ${isSelected ? 'has-background-light' : 'has-background-white'}`}>
            <div className="is-flex-grow-1">
                <p className="is-italic has-text-grey">{dateTimeString}</p>

                <p>{note.text}</p>

                <div>
                    {renderOwnTag()}

                    {note.tags.map(nt => (
                        <NoteTagBadge key={nt.tagId} noteTag={nt} contextSpaceId={contextSpaceId}></NoteTagBadge>
                    ))}
                </div>
            </div>

            {renderActions()}
        </div>
    );
}