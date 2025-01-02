import React from 'react';
import { NoteViewer } from '../NoteViewer';
import { NoteViewerAction } from '../NoteActionsViewer';
import { Note, NoteTag } from 'notu';
import { NotuRenderTools } from '../helpers/NotuRender';

export function noteViewerWithoutDate(
    note: Note,
    notuRenderTools: NotuRenderTools,
    actions: Array<NoteViewerAction>,
    isSelected: boolean
) {
    return (
        <NoteViewer note={note} notuRenderTools={notuRenderTools} actions={actions}
                    isSelected={isSelected}
                    showDate={false}/>
    )
}


export class TestNoteTagDataComponentFactory {

    getBadgeComponent(noteTag: NoteTag): JSX.Element {
        return (<span className="ml-1">Name: {noteTag.data.name}</span>);
    }

    getEditorComponent(noteTag: NoteTag): JSX.Element {
        return (<p>Name: {noteTag.data.name}</p>);
    }
}


export class NonEditableNoteTagDataComponentFactory {

    getBadgeComponent(noteTag: NoteTag): JSX.Element {
        return (<span className="ml-1">Name: {noteTag.data.name}</span>);
    }

    getEditorComponent(noteTag: NoteTag): JSX.Element {
        return null;
    }
}