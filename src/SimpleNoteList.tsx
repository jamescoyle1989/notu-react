import { Note } from 'notu';
import { SimpleNoteViewer } from './SimpleNoteViewer';

interface SimpleNoteListProps {
    notes: Array<Note>,
    contextSpaceId: number
}


export const SimpleNoteList = ({
    notes,
    contextSpaceId
}: SimpleNoteListProps) => {
    return (
        <div>
            {notes.map(n => (
                <SimpleNoteViewer key={n.id} note={n} contextSpaceId={contextSpaceId}/>
            ))}
        </div>
    );
}