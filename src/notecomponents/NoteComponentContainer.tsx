//This is a wrapper around each note component, otherwise changing the components in a note can cause react to crash because it gets confused by a different number of hooks since the previous render

import { NoteComponent } from './NoteComponent'

interface NoteComponentContainerProps {
    component: NoteComponent
}


export const NoteComponentContainer = ({
    component
}: NoteComponentContainerProps) => {
    return component.render();
}