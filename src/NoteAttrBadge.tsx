import React from 'react';
import { NoteAttr, Tag } from 'notu';
import 'bulma';

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
        <span className="tag is-small is-unselectable is-rounded">
            {getAttrLabel()}: {noteAttr.value}
            {renderDeleteButton()}
        </span>
    );
};