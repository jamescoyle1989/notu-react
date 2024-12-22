import React from 'react';
import 'bulma';
import { NotuRenderTools } from './helpers/NotuRender';
import { getTextColorClass } from './helpers/ColorHelpers';
import { Tag } from 'notu';


interface TagBadgeProps {
    tag: Tag,
    notuRenderTools: NotuRenderTools,
    contextSpaceId: number,
    onDelete?: () => void,
    useUniqueName?: boolean
}


export const TagBadge = ({
    tag,
    notuRenderTools,
    contextSpaceId,
    onDelete = null,
    useUniqueName = false
}: TagBadgeProps) => {

    function renderDeleteButton() {
        if (!onDelete)
            return;
        return (<button type="button" className="delete" onClick={onDelete}></button>);
    }

    function getBackgroundColor() {
        return tag.color ?? '#AABBCC';
    }

    function getTextColor() {
        return getTextColorClass(getBackgroundColor());
    }

    return (
        <span className={`tag is-small is-unselectable is-rounded mr-1 has-text-weight-bold ${getTextColor()}`}
            style={{backgroundColor: getBackgroundColor()}}>
            {useUniqueName ? tag.getUniqueName(notuRenderTools.notu.cache) : tag.getQualifiedName(contextSpaceId)}
            <span className="has-text-weight-light ml-1">({tag.isPublic ? 'Public' : 'Private'})</span>
            {renderDeleteButton()}
        </span>
    );
};