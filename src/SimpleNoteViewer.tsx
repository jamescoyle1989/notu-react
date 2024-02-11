import React from 'react';
import { Note, NoteTag } from 'notu';
import { NoteTagBadge } from './NoteTagBadge';
import 'purecss';
import style from './SimpleNoteViewer.module.css';
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
                <div className={style.actions_container}>
                    <button className={style.actions_button} onClick={toggleShowActions}>•••</button>
                    <div className={`${(showActions && isSelected) ? style.actions_dropdown_display : style.actions_dropdown_hidden}`}>
                        {actions.map(x => (
                            <span key={x.name} onClick={() => callAction(x.action)}>{x.name}</span>
                        ))}
                    </div>
                </div>
            );
        }
    }

    return (
        <div className={`${style.note_container} ${isSelected ? style.note_selected : ''}`}>
            <div className={style.note_body}>
                <p className={style.date}>{dateTimeString}</p>

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