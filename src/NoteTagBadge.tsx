import { NoteTag, Space } from 'notu';
import 'purecss';
import './NoteTagBadge.css';

interface NoteTagBadgeProps {
    noteTag: NoteTag,
    spaces: Array<Space>,
    onDelete: () => void
}


export const NoteTagBadge = ({
    noteTag,
    spaces,
    onDelete
}: NoteTagBadgeProps) => {
    
    function renderDeleteButton() {
        if (!onDelete)
            return;
        return (<span className="deletebutton" onClick={onDelete}>&#x2716;</span>);
    }

    return (
        <div className="mainbadge">
            {noteTag.tag.name}
            {renderDeleteButton()}
        </div>
    );
};