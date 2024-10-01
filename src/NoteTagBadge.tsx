import React from 'react';
import { NoteTag, Notu, Tag } from 'notu';
import 'bulma';
import { renderNoteAttrValue } from './helpers/NotuRender';
import { getTextColorClass } from './helpers/ColorHelpers';
import { NoteTagDataComponentFactory } from './notetagdata/NoteTagDataComponentFactory';


interface NoteTagBadgeProps {
    noteTag: NoteTag,
    notu: Notu,
    contextSpaceId: number,
    onDelete?: () => void,
    showAttrs: boolean,
    isOwnTag?: boolean,
    noteTagDataComponentResolver: (tag: Tag) => NoteTagDataComponentFactory
}


export const NoteTagBadge = ({
    noteTag,
    notu,
    contextSpaceId,
    onDelete = null,
    showAttrs,
    isOwnTag = false,
    noteTagDataComponentResolver
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
        const dataComponent = noteTagDataComponentResolver(noteTag.tag);
        if (!dataComponent)
            return;

        return dataComponent.getBadgeComponent(noteTag, notu);
    }

    return (
        <span className={`tag is-small is-unselectable is-rounded mr-1 ${getTextWeight()} ${getTextColor()}`}
            style={{backgroundColor: getBackgroundColor()}}>
            {noteTag.tag.getQualifiedName(contextSpaceId)}
            {renderTagAttributes()}
            {renderNoteTagData()}
            {renderDeleteButton()}
            {renderOwnTagPublicity()}
        </span>
    );
};