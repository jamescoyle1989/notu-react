import { Note, NoteTag } from 'notu';
import { NoteTagBadge } from './NoteTagBadge';
import 'purecss';
import style from './SimpleNoteViewer.module.css';

interface SimpleNoteViewerProps {
    note: Note,
    contextSpaceId: number
}


export const SimpleNoteViewer = ({
    note,
    contextSpaceId
}: SimpleNoteViewerProps) => {
    const dateTimeString = `${note.date.toDateString()} ${note.date.getHours().toString().padStart(2, '0')}:${note.date.getMinutes().toString().padStart(2, '0')}`;

    function renderOwnTag() {
        if (!!note.ownTag) {
            const noteTag = new NoteTag(null, note.ownTag);
            return (<NoteTagBadge noteTag={noteTag} contextSpaceId={note.spaceId}></NoteTagBadge>)
        }
    }

    return (
        <div>
            <p className={style.date}>{dateTimeString}</p>

            <p>{note.text}</p>

            <div>
                {renderOwnTag()}

                {note.tags.map(nt => (
                    <NoteTagBadge key={nt.tagId} noteTag={nt} contextSpaceId={contextSpaceId}></NoteTagBadge>
                ))}
            </div>
        </div>
    );
}