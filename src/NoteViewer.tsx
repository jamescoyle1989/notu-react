import React, { useMemo, useRef } from 'react';
import { Note } from 'notu';
import { NoteTagBadge } from './NoteTagBadge';
import 'bulma';
import { useEffect } from 'react';
import { NoteComponentContainer } from './notecomponents/NoteComponentContainer';
import { NotuRenderTools } from './helpers/NotuRender';
import { NoteActionsViewer, NoteActionsViewerCommands, NoteViewerAction } from './NoteActionsViewer';
import { TagBadge } from './TagBadge';


interface NoteViewerProps {
    note: Note,
    notuRenderTools: NotuRenderTools,
    actions: Array<NoteViewerAction>,
    isSelected: boolean,
    showDate?: boolean
}


export const NoteViewer = ({
    note,
    notuRenderTools,
    actions,
    isSelected,
    showDate = true
}: NoteViewerProps) => {
    const textComponents = useMemo(() => notuRenderTools.noteTextSplitter(note), [note, note.text]);
    const actionsRef = useRef();

    useEffect(() => {
        if (!isSelected)
            collapseActions();
    }, [isSelected]);

    function collapseActions() {
        if (!!actionsRef)
            (actionsRef.current as NoteActionsViewerCommands).collapse();
    }

    const dateTimeString = `${note.date.toDateString()} ${note.date.getHours().toString().padStart(2, '0')}:${note.date.getMinutes().toString().padStart(2, '0')}`;

    function renderDate() {
        if (showDate)
            return (<p className="is-italic has-text-grey is-inline">{dateTimeString}</p>);
    }

    function renderOwnTag() {
        if (!!note.ownTag) {
            return (
                <TagBadge tag={note.ownTag} notuRenderTools={notuRenderTools}
                          contextSpaceId={note.space.id}>
                </TagBadge>
            );
        }
    }

    function renderOwnTagDivider() {
        if (!!note.ownTag && note.tags.length > 0)
            return (<div style={{borderLeft: '2px solid #888', height: '100%'}}
                         className='is-inline mr-2'/>);
    }

    return (
        <div className={`is-flex is-align-items-center pt-1 pb-1 ${isSelected ? 'has-background-light' : 'has-background-white'}`}>
            
            <NoteActionsViewer note={note} actions={actions} ref={actionsRef}/>
            
            <div className="is-flex-grow-1" onClick={collapseActions}>
                {renderDate()}

                {textComponents.map((x, index) => (<NoteComponentContainer key={index} component={x}/>))}

                <div>
                    {renderOwnTag()} {renderOwnTagDivider()}

                    {note.tags.map(nt => (
                        <NoteTagBadge key={nt.tag.id} 
                                    noteTag={nt} note={note} notuRenderTools={notuRenderTools}
                                    contextSpaceId={note.space.id} useUniqueName={true}/>
                    ))}
                </div>
            </div>
        </div>
    );
}