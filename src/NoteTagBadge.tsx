import React from 'react';
import { NoteTag } from 'notu';
import 'bulma';
import { renderNoteAttrValue } from './helpers/NotuRender';

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

    function renderDeleteButton() {
        if (!onDelete)
            return;
        return (<button type="button" className="delete" onClick={onDelete}></button>);
    }

    function renderTagAttributes() {
        if (!noteTag.note)
            return;
        return noteTag.attrs.map(na => (
            <span className="ml-1">{na.attr.name}: {renderNoteAttrValue(na)}</span>
        ));
    }

    return (
        <span className="tag is-small is-unselectable is-rounded mr-1"
            style={{backgroundColor: noteTag.tag.color ?? '#969DA3'}}>
            {noteTag.tag.getQualifiedName(contextSpaceId)}
            {renderTagAttributes()}
            {renderDeleteButton()}
        </span>
    );
};