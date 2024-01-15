import { Note } from 'notu';
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

    return (
        <div>
            <p className={style.date}>{dateTimeString}</p>

            <p>{note.text}</p>

            <div>
                {note.tags.map(nt => (
                    <NoteTagBadge key={nt.tagId} noteTag={nt} contextSpaceId={contextSpaceId}></NoteTagBadge>
                ))}
            </div>
        </div>
    );
}