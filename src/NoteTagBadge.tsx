import React from 'react';
import { NoteTag } from 'notu';
import 'bulma';

interface NoteTagBadgeProps {
    noteTag: NoteTag,
    contextSpaceId: number,
    onDelete?: () => void
}


export const NoteTagBadge = ({
    noteTag,
    contextSpaceId,
    onDelete
}: NoteTagBadgeProps) => {

    function getTagName(): string {
        if (noteTag.tag.spaceId == contextSpaceId)
            return noteTag.tag.name;
        return `${noteTag.tag.space.name}.${noteTag.tag.name}`;
    }
    
    function renderDeleteButton() {
        if (!onDelete)
            return;
        return (<button className="delete" onClick={onDelete}></button>);
    }

    return (
        <span className="tag is-small is-unselectable is-rounded mr-1"
            style={{backgroundColor: noteTag.tag.color ?? '#969DA3'}}>
            {getTagName()}
            {renderDeleteButton()}
        </span>
    );
};