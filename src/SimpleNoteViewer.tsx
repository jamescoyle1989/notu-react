import { Note, Space } from 'notu';
import { NoteTagBadge } from './NoteTagBadge';
import 'purecss';
import './SimpleNoteViewer.css';

interface SimpleNoteViewerProps {
    note: Note,
    contextSpaceId: number
}


export const SimpleNoteViewer = ({
    note,
    contextSpaceId
}: SimpleNoteViewerProps) => {

    return (
        <div>
            <p className='date'>{note.date.toDateString()}</p>

            <p>{note.text}</p>

            <div>
                {note.tags.map(nt => (
                    <NoteTagBadge noteTag={nt} contextSpaceId={contextSpaceId}></NoteTagBadge>
                ))}
            </div>
        </div>
    );
}