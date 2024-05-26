import React from 'react';
import { Note, NoteTag } from 'notu';
import { NoteTagBadge } from './NoteTagBadge';
import 'bulma';
import { useEffect, useState } from 'react';
import { NoteAttrBadge } from './NoteAttrBadge';

interface NoteViewerProps {
    note: Note,
    actions: Array<NoteViewerAction>,
    isSelected: boolean,
    showDate?: boolean
}


export class NoteViewerAction {
    name: string;
    action: (note: Note) => void;

    public constructor(name: string, action: (note: Note) => void) {
        this.name = name;
        this.action = action;
    }
}


export const NoteViewer = ({
    note,
    actions,
    isSelected,
    showDate = true
}: NoteViewerProps) => {
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

    function renderDate() {
        if (showDate)
            return (<p className="is-italic has-text-grey is-inline">{dateTimeString}</p>);
    }

    function renderOwnTag() {
        if (!!note.ownTag) {
            const noteTag = new NoteTag(note.ownTag.duplicate().clean());
            return (<NoteTagBadge noteTag={noteTag} contextSpaceId={note.space.id} showAttrs={true}></NoteTagBadge>)
        }
    }

    function renderActions() {
        if (actions?.length ?? 0 > 0) {
            return (
                <div className={`dropdown is-left mr-2 ${showActions ? 'is-active' : ''}`}>
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
            {renderActions()}
            
            <div className="is-flex-grow-1">
                {renderOwnTag()} {renderDate()}

                <p>{note.text}</p>

                <div>
                    {note.tags.map(nt => (
                        <NoteTagBadge key={nt.tag.id} noteTag={nt} contextSpaceId={note.space.id} showAttrs={true}></NoteTagBadge>
                    ))}

                    {note.attrs.map(na => (
                        <NoteAttrBadge key={na.attr.id} noteAttr={na} contextSpaceId={note.space.id}></NoteAttrBadge>
                    ))}
                </div>
            </div>
        </div>
    );
}