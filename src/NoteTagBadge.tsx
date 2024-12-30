import React from 'react';
import { Note, NoteTag } from 'notu';
import 'bulma';
import { NotuRenderTools } from './helpers/NotuRender';
import { getTextColorClass } from './helpers/ColorHelpers';


interface NoteTagBadgeProps {
    noteTag: NoteTag,
    note: Note,
    notuRenderTools: NotuRenderTools,
    contextSpaceId: number,
    onDelete?: () => void,
    useUniqueName?: boolean
}


export const NoteTagBadge = ({
    noteTag,
    note,
    notuRenderTools,
    contextSpaceId,
    onDelete = null,
    useUniqueName = false
}: NoteTagBadgeProps) => {

    function renderDeleteButton() {
        if (!onDelete)
            return;
        return (<button type="button" className="delete" onClick={onDelete}></button>);
    }

    function getBackgroundColor() {
        return noteTag.tag.color ?? '#AABBCC';
    }

    function getTextColor() {
        return getTextColorClass(getBackgroundColor());
    }

    function renderNoteTagData() {
        const dataComponent = notuRenderTools.noteTagDataComponentResolver(noteTag.tag, note);
        if (!dataComponent)
            return;

        return dataComponent.getBadgeComponent(noteTag, note, notuRenderTools.notu);
    }

    return (
        <span className={`tag is-small is-unselectable is-rounded mr-1 has-text-weight-normal ${getTextColor()}`}
            style={{backgroundColor: getBackgroundColor()}}>
            {useUniqueName ? noteTag.tag.getUniqueName(notuRenderTools.notu.cache) : noteTag.tag.getQualifiedName(contextSpaceId)}
            {renderNoteTagData()}
            {renderDeleteButton()}
        </span>
    );
};