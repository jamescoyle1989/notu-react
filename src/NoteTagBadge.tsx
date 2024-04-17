import React from 'react';
import { NoteTag } from 'notu';
import 'bulma';
import { renderNoteAttrValue } from './helpers/NotuRender';

interface NoteTagBadgeProps {
    noteTag: NoteTag,
    contextSpaceId: number,
    onDelete?: () => void,
    showAttrs: boolean
}


export const NoteTagBadge = ({
    noteTag,
    contextSpaceId,
    onDelete,
    showAttrs
}: NoteTagBadgeProps) => {

    function renderDeleteButton() {
        if (!onDelete)
            return;
        return (<button type="button" className="delete" onClick={onDelete}></button>);
    }

    function renderTagAttributes() {
        if (!noteTag.note || !showAttrs)
            return;
        return noteTag.attrs.map(na => (
            <span key={`${noteTag.tagId}_${na.attrId}`} className="ml-1">{na.attr.name}: {renderNoteAttrValue(na)}</span>
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