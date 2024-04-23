import React from 'react';
import { Note, NoteTag } from 'notu';
import { NoteTagBadge } from './NoteTagBadge';
import 'bulma';
import { useEffect, useState } from 'react';
import { NoteAttrBadge } from './NoteAttrBadge';

interface SimpleNoteViewerProps {
    note: Note,
    contextSpaceId: number,
    actions: Array<SimpleNoteViewerAction>,
    isSelected: boolean,
    postActionRefreshCallback: () => void
}


export class SimpleNoteViewerAction {
    name: string;
    /** The action to be performed on the note. Should return true if a refresh is required. */
    action: (note: Note) => Promise<boolean | void>;

    public constructor(name: string, action: (note: Note) => Promise<boolean | void>) {
        this.name = name;
        this.action = action;
    }
}


export const SimpleNoteViewer = ({
    note,
    contextSpaceId,
    actions,
    isSelected,
    postActionRefreshCallback
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

    async function callAction(action: (note: Note) => Promise<boolean | void>) {
        setShowActions(false);
        const result = await action(note);
        if (!!result)
            postActionRefreshCallback();
    }

    function renderOwnTag() {
        if (!!note.ownTag) {
            const noteTag = new NoteTag(null, note.ownTag);
            return (<NoteTagBadge noteTag={noteTag} contextSpaceId={note.spaceId} showAttrs={true}></NoteTagBadge>)
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
                        <NoteTagBadge key={nt.tagId} noteTag={nt} contextSpaceId={contextSpaceId} showAttrs={true}></NoteTagBadge>
                    ))}

                    {note.attrs.filter(x => !x.isDeleted && !x.tag).map(na => (
                        <NoteAttrBadge key={na.attrId} noteAttr={na} contextSpaceId={contextSpaceId}></NoteAttrBadge>
                    ))}
                </div>
            </div>

            {renderActions()}
        </div>
    );
}