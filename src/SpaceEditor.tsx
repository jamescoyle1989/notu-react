import { Space } from 'notu';
import { useState } from 'react';
import 'purecss';
import './SpaceEditor.css';

interface SpaceEditorProps {
    space: Space,
    onConfirm: () => string
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

    function onConfirmClick() {
        const errorMessage = onConfirm();
        setError(errorMessage ?? null);
    }

    function renderErrorMessage() {
        if (!error)
            return;
        return (
            <div className="errorBanner">
                <label>Error: {error}</label>
            </div>
        );
    }

    return (
        <form className="pure-form pure-form-aligned">
            <fieldset>
                {renderErrorMessage()}

                <div className="pure-control-group">
                    <label>Name</label>
                    <input type="text" value={name} onChange={onNameChange}/>
                </div>

                <div className="pure-controls">
                    <button type="button" onClick={onConfirmClick} className="pure-button pure-button-primary">Confirm</button>
                </div>
            </fieldset>
        </form>
    );
}