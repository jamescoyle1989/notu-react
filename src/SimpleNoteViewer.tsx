import { Note, Space } from 'notu';
import { NoteTagBadge } from './NoteTagBadge';
import 'purecss';
import './SimpleNoteViewer.css';

interface SimpleNoteViewerProps {
    note: Note,
    spaces: Array<Space>
}


export const SimpleNoteViewer = ({
    note,
    spaces
}: SimpleNoteViewerProps) => {

    return (
        <div>
            <p className='date'>{note.date.toDateString()}</p>

            <p>{note.text}</p>

            <div>
                {note.tags.map(nt => (
                    <NoteTagBadge noteTag={nt} spaces={spaces}></NoteTagBadge>
                ))}
            </div>
        </div>
    );
}