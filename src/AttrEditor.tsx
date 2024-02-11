import React from 'react';
import { Attr, Space } from 'notu';
import { useState } from 'react';
import 'purecss';
import styles from './AttrEditor.module.css';

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
            <div className={styles.errorBanner}>
                <label>Error: {error}</label>
            </div>
        );
    }

    return (
        <form className="pure-form pure-form-aligned">
            <fieldset>
                {renderErrorMessage()}

                <div className="pure-control-group">
                    <label>Space</label>
                    <select value={spaceId} onChange={onSpaceIdChange}>
                        <option key="0" value={null}></option>
                        {spaces.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                    </select>
                </div>

                <div className="pure-control-group">
                    <label>Name</label>
                    <input type="text" value={name} onChange={onNameChange}/>
                </div>

                <div className="pure-control-group">
                    <label>Type</label>
                    <select value={type} onChange={onTypeChange}>
                        <option value="TEXT">Text</option>
                        <option value="NUMBER">Number</option>
                        <option value="BOOLEAN">Boolean</option>
                        <option value="DATE">Date</option>
                    </select>
                </div>

                <div className="pure-controls">
                    <button type="button" onClick={onConfirmClick}
                            className="pure-button pure-button-primary">Confirm</button>
                </div>
            </fieldset>
        </form>
    )
}