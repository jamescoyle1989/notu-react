import React from 'react';
import { NoteTag } from 'notu';
import 'purecss';
import style from './NoteTagBadge.module.css';

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
        return (<span className={style.deletebutton} onClick={onDelete}>&#x2716;</span>);
    }

    return (
        <div className={style.mainbadge} style={{backgroundColor: noteTag.tag.color ?? '#969DA3'}}>
            {getTagName()}
            {renderDeleteButton()}
        </div>
    );
};