import React from 'react';
import { Note, NoteTag } from 'notu';
import 'bulma';
import { NotuRenderTools, renderNoteAttrValue } from './helpers/NotuRender';
import { getTextColorClass } from './helpers/ColorHelpers';


interface NoteTagBadgeProps {
    noteTag: NoteTag,
    note: Note,
    notuRenderTools: NotuRenderTools,
    contextSpaceId: number,
    onDelete?: () => void,
    showAttrs: boolean,
    isOwnTag?: boolean,
    useUniqueName?: boolean
}


export const NoteTagBadge = ({
    noteTag,
    note,
    notuRenderTools,
    contextSpaceId,
    onDelete = null,
    showAttrs,
    isOwnTag = false,
    useUniqueName = false
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
        return getTextColorClass(getBackgroundColor());
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

    function renderNoteTagData() {
        const dataComponent = notuRenderTools.noteTagDataComponentResolver(noteTag.tag, note);
        if (!dataComponent)
            return;

        return dataComponent.getBadgeComponent(noteTag, notuRenderTools.notu);
    }

    return (
        <span className={`tag is-small is-unselectable is-rounded mr-1 ${getTextWeight()} ${getTextColor()}`}
            style={{backgroundColor: getBackgroundColor()}}>
            {useUniqueName ? noteTag.tag.getUniqueName(notuRenderTools.notu.cache) : noteTag.tag.getQualifiedName(contextSpaceId)}
            {renderTagAttributes()}
            {renderNoteTagData()}
            {renderDeleteButton()}
            {renderOwnTagPublicity()}
        </span>
    );
};