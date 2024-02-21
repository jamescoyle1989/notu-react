import React from 'react';
import { NoteAttr } from 'notu';
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

    function getAttrName(): string {
        if (noteAttr.attr.spaceId == contextSpaceId)
            return noteAttr.attr.name;
        return `${noteAttr.attr.space.name}.${noteAttr.attr.name}`;
    }

    function renderDeleteButton() {
        if (!onDelete)
            return;
        return (<button className="delete" onClick={onDelete}></button>);
    }

    return (
        <span className="tag is-small is-unselectable is-rounded">
            {getAttrName()}: {noteAttr.value}
            {renderDeleteButton()}
        </span>
    );
};