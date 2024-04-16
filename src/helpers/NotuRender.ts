import { NoteAttr } from "notu";

export function renderNoteAttrValue(noteAttr: NoteAttr) {
    if (noteAttr.value === true)
        return 'True';
    else if (noteAttr.value === false)
        return 'False';
    else if (noteAttr.value instanceof Date) {
        const date = noteAttr.value as Date;
        return `${date.toDateString()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    }
    return noteAttr.value;
}