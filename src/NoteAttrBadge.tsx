import { NoteAttr } from 'notu';
import 'purecss';
import style from './NoteAttrBadge.module.css';

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

    function getAttrName(): string {
        if (noteAttr.attr.spaceId == contextSpaceId)
            return noteAttr.attr.name;
        return `${noteAttr.attr.space.name}.${noteAttr.attr.name}`;
    }

    function renderDeleteButton() {
        if (!onDelete)
            return;
        return (<span className={style.deletebutton} onClick={onDelete}>&#x2716;</span>);
    }

    return (
        <div className={style.mainbadge}>
            {getAttrName()}: {noteAttr.value}
            {renderDeleteButton()}
        </div>
    );
};