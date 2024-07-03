import React from 'react';
import { NoteAttr, Tag } from 'notu';
import 'bulma';
import { renderNoteAttrValue } from './helpers/NotuRender';
import { getTextColorClass } from './helpers/ColorHelpers';


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

    const defaultColor = '#AABBCC';

    function getAttrLabel() {
        let output = noteAttr.attr.name;
        if (!!noteAttr.tag)
            output = noteAttr.tag.getQualifiedName(contextSpaceId) + '.' + output;
        return output;
    }

    function getBackgroundColor(): string {
        return noteAttr.attr.color ?? defaultColor;
    }

    function getTextColor(): string {
        return getTextColorClass(getBackgroundColor());
    }
    
    function renderDeleteButton() {
        if (!onDelete)
            return;
        return (<button className="delete" onClick={onDelete}></button>);
    }

    return (
        <span className={`tag is-small is-unselectable is-rounded mr-1 ${getTextColor()}`}
            style={{backgroundColor: getBackgroundColor()}}>
            {getAttrLabel()}: {renderNoteAttrValue(noteAttr)}
            {renderDeleteButton()}
        </span>
    );
};