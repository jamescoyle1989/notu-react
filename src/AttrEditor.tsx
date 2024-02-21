import React from 'react';
import { Attr, Space } from 'notu';
import { useState } from 'react';
import 'bulma';

interface AttrEditorProps {
    attr: Attr,
    spaces: Array<Space>,
    onConfirm: () => string
}


export const AttrEditor = ({
    attr,
    spaces,
    onConfirm
}: AttrEditorProps) => {
    const [spaceId, setSpaceId] = useState(attr.spaceId);
    const [name, setName] = useState(attr.name);
    const [type, setType] = useState(attr.type);
    const [error, setError] = useState(null);

    function onSpaceIdChange(event): void {
        setSpaceId(event.target.value);
        attr.space = spaces.find(x => x.id == event.target.value);
    }

    function onNameChange(event): void {
        setName(event.target.value);
        attr.name = event.target.value;
    }

    function onTypeChange(event): void {
        setType(event.target.value);
        attr.type = event.target.value;
    }

    function onConfirmClick() {
        const errorMessage = onConfirm();
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
                    <label className="label">Space</label>
                    <div className="control">
                        <div className="select">
                            <select value={spaceId} onChange={onSpaceIdChange}>
                                <option key="0" value={null}></option>
                                {spaces.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input type="text" className="input" value={name} onChange={onNameChange}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Type</label>
                    <div className="control">
                        <div className="select">
                            <select value={type} onChange={onTypeChange}>
                                <option value="TEXT">Text</option>
                                <option value="NUMBER">Number</option>
                                <option value="BOOLEAN">Boolean</option>
                                <option value="DATE">Date</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <button type="button" onClick={onConfirmClick}
                            className="button is-link">Confirm</button>
                </div>
            </fieldset>
        </form>
    )
}