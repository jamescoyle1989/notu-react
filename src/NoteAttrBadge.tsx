import React from 'react';
import { NoteAttr, Tag } from 'notu';
import 'bulma';
import { renderNoteAttrValue } from './helpers/NotuRender';

interface NoteAttrBadgeProps {
    noteAttr: NoteAttr,
    contextSpaceId: number,
    onDelete?: () => void
}


export const NoteAttrBadge = ({
    noteAttr,
    contextSpaceId,
    onDelete
}: NoteAttrBadgeProps) => {

    const defaultColor = '#969DA3';

    function getAttrLabel() {
        let output = noteAttr.attr.name;
        if (!!noteAttr.tag)
            output = noteAttr.tag.getQualifiedName(contextSpaceId) + '.' + output;
        return output;
    }
    
    function renderDeleteButton() {
        if (!onDelete)
            return;
        return (<button className="delete" onClick={onDelete}></button>);
    }

    return (
        <span className="tag is-small is-unselectable is-rounded mr-1"
            style={{backgroundColor: noteAttr.attr.color ?? defaultColor}}>
            {getAttrLabel()}: {renderNoteAttrValue(noteAttr)}
            {renderDeleteButton()}
        </span>
    );
};