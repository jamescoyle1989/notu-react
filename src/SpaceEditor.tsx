import React from 'react';
import { Space } from 'notu';
import { useState } from 'react';
import 'bulma';
import { NotuClient } from 'notu/dist/types/services/HttpClient';

interface SpaceEditorProps {
    /** Used for saving the space once changes have been confirmed */
    notuClient: NotuClient,
    /** The space to be edited */
    space: Space,
    /** Called when the confirm button is clicked. A false return value will prevent saving, so will a thrown error, which will also display on the space editor */
    onConfirm: (space: Space) => Promise<boolean>
}


export const SpaceEditor = ({
    notuClient,
    space,
    onConfirm
}: SpaceEditorProps) => {

    const [error, setError] = useState(null);

    async function submitSpace(evt): Promise<void> {
        evt.preventDefault();
        space.name = evt.target.elements.name.value;
        try {
            const confirmResult = await onConfirm(space);
            if (!!confirmResult)
                notuClient.saveSpace(space);
        }
        catch (err) {
            setError(err.message);
        }
    }

    function renderErrorMessage() {
        if (!error)
            return;
        return (
            <div className="notification is-danger">
                <label>Error: {error}</label>
            </div>
        );
    }

    return (
        <form onSubmit={submitSpace}>
            <fieldset>
                {renderErrorMessage()}

                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input type="text" className="input" name="name" defaultValue={space.name}/>
                    </div>
                </div>

                <div className="field">
                    <button type="submit" className="button is-link">Confirm</button>
                </div>
            </fieldset>
        </form>
    );
}