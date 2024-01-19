import { Note } from 'notu';
import { SimpleNoteViewer, SimpleNoteViewerAction } from './SimpleNoteViewer';

interface SimpleNoteListProps {
    notes: Array<Note>,
    contextSpaceId: number,
    actionsGenerator: (note: Note) => Array<SimpleNoteViewerAction>
}


export const SimpleNoteList = ({
    notes,
    contextSpaceId,
    actionsGenerator
}: SimpleNoteListProps) => {
    return (
        <div>
            {notes.map(n => (
                <SimpleNoteViewer key={n.id} note={n} contextSpaceId={contextSpaceId} actions={actionsGenerator(n)}/>
            ))}
        </div>
    );
}