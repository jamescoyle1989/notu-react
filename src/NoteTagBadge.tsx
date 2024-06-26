import React from 'react';
import { NoteTag } from 'notu';
import 'bulma';
import { renderNoteAttrValue } from './helpers/NotuRender';
import chroma from 'chroma-js';

interface NoteTagBadgeProps {
    noteTag: NoteTag,
    contextSpaceId: number,
    onDelete?: () => void,
    showAttrs: boolean,
    isOwnTag?: boolean
}


export const NoteTagBadge = ({
    noteTag,
    contextSpaceId,
    onDelete = null,
    showAttrs,
    isOwnTag = false
}: NoteTagBadgeProps) => {

    function renderDeleteButton() {
        if (!onDelete)
            return;
        return (<button type="button" className="delete" onClick={onDelete}></button>);
    }

    function getTextWeight() {
        return isOwnTag ? 'has-text-weight-bold' : 'has-text-weight-normal';
    }

    function getBackgroundColor() {
        return noteTag.tag.color ?? '#AABBCC';
    }

    function getTextColor() {
        const bgColor = getBackgroundColor();
        const whiteContrast = chroma.contrast(bgColor, '#FFF');
        const blackContrast = chroma.contrast(bgColor, '#000');
        return (whiteContrast > blackContrast) ? 'has-text-white' : 'has-text-black';
    }

    function renderTagAttributes() {
        if (!showAttrs)
            return;
        return noteTag.attrs.map(na => (
            <span key={`${noteTag.tag.id}_${na.attr.id}`} className="ml-1">{na.attr.name}: {renderNoteAttrValue(na)}</span>
        ));
    }

    function renderOwnTagPublicity() {
        if (isOwnTag)
            return (<span className="has-text-weight-light ml-1">({noteTag.tag.isPublic ? 'Public' : 'Private'})</span>)
    }

    return (
        <span className={`tag is-small is-unselectable is-rounded mr-1 ${getTextWeight()} ${getTextColor()}`}
            style={{backgroundColor: getBackgroundColor()}}>
            {noteTag.tag.getQualifiedName(contextSpaceId)}
            {renderTagAttributes()}
            {renderDeleteButton()}
            {renderOwnTagPublicity()}
        </span>
    );
};