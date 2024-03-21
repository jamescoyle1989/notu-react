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

    function getTagName(tag: Tag): string {
        if (tag.spaceId == contextSpaceId)
            return tag.name;
        return `${tag.space.name}.${tag.name}`;
    }

    function getAttrLabel() {
        let output = noteAttr.attr.name;
        if (!!noteAttr.tag)
            output = getTagName(noteAttr.tag) + '.' + output;
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