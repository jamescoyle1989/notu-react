import React, { useMemo, useRef } from 'react';
import { Note, NoteTag } from 'notu';
import { NoteTagBadge } from './NoteTagBadge';
import 'bulma';
import { useEffect, useState } from 'react';
import { NoteAttrBadge } from './NoteAttrBadge';
import { NoteComponentContainer } from './notecomponents/NoteComponentContainer';

interface NoteViewerProps {
    note: Note,
    actions: Array<NoteViewerAction>,
    isSelected: boolean,
    showDate?: boolean,
    noteTextSplitter: (note: Note) => Array<any>
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
    showDate = true,
    noteTextSplitter
}: NoteViewerProps) => {
    const [showActions, setShowActions] = useState(false);
    const textComponents = useMemo(() => noteTextSplitter(note), [note, note.text]);

    useEffect(() => {
        if (!isSelected)
            setShowActions(false);
    }, [isSelected]);
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
            setShowActions(false);
    }

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
            return (<NoteTagBadge noteTag={noteTag} contextSpaceId={note.space.id} showAttrs={false} isOwnTag={true}></NoteTagBadge>)
        }
    }

    function renderOwnTagDivider() {
        if (!!note.ownTag && (note.tags.length > 0 || note.attrs.length > 0))
            return (<div style={{borderLeft: '2px solid #888', height: '100%'}}
                         className='is-inline mr-2'/>);
    }

    function renderActions() {
        if (actions?.length ?? 0 > 0) {
            return (
                <div className={`dropdown is-left mr-2 ${showActions ? 'is-active' : ''}`} ref={menuDivRef}>
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
        <div className={`is-flex is-align-items-center pt-1 pb-1 ${isSelected ? 'has-background-light' : 'has-background-white'}`}>
            {renderActions()}
            
            <div className="is-flex-grow-1" onClick={() => setShowActions(false)}>
                {renderDate()}

                {textComponents.map((x, index) => (<NoteComponentContainer key={index} component={x}/>))}

                <div>
                    {renderOwnTag()} {renderOwnTagDivider()}

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