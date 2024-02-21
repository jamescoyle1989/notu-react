import React from 'react';
import { Space } from 'notu';
import { useState } from 'react';
import 'bulma';

interface SpaceEditorProps {
    space: Space,
    onConfirm: () => Promise<string>
}


export const SpaceEditor = ({
    space,
    onConfirm
}: SpaceEditorProps) => {

    const [name, setName] = useState(space.name);
    const [error, setError] = useState(null);

    function onNameChange(event): void {
        setName(event.target.value);
        space.name = event.target.value;
    }

    async function onConfirmClick() {
        const errorMessage = await onConfirm();
        setError(errorMessage ?? null);
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
        <form>
            <fieldset>
                {renderErrorMessage()}

                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input type="text" className="input" value={name} onChange={onNameChange}/>
                    </div>
                </div>

                <div className="field">
                    <button type="button" onClick={onConfirmClick}
                            className="button is-link">Confirm</button>
                </div>
            </fieldset>
        </form>
    );
}