import { NoteAttr, Space } from 'notu';
import 'purecss';
import './NoteAttrBadge.css';

interface NoteAttrBadgeProps {
    noteAttr: NoteAttr,
    spaces: Array<Space>,
    onDelete?: () => void
}


export const NoteAttrBadge = ({
    noteAttr,
    spaces,
    onDelete
}: NoteAttrBadgeProps) => {

    function renderDeleteButton() {
        if (!onDelete)
            return;
        return (<span className="deletebutton" onClick={onDelete}>&#x2716;</span>);
    }

    return (
        <div className="mainbadge">
            {noteAttr.attr.name}: {noteAttr.value}
            {renderDeleteButton()}
        </div>
    );
};