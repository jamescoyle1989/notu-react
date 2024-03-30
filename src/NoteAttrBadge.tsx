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

    function getValueString() {
        if (noteAttr.value === true)
            return 'True';
        else if (noteAttr.value === false)
            return 'False';
        return noteAttr.value;
    }
    
    function renderDeleteButton() {
        if (!onDelete)
            return;
        return (<button className="delete" onClick={onDelete}></button>);
    }

    return (
        <span className="tag is-small is-unselectable is-rounded has-background-grey-light">
            {getAttrLabel()}: {getValueString()}
            {renderDeleteButton()}
        </span>
    );
};