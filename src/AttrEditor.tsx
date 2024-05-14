import React from 'react';
import { Attr } from 'notu';
import { useState } from 'react';
import 'bulma';
import { NotuClient } from 'notu/dist/types/services/HttpClient';

interface AttrEditorProps {
    /** Used for saving the attr once changes have been confirmed */
    notuClient: NotuClient,
    /** The attr to be edited */
    attr: Attr,
    /** Called when the confirm button is clicked. A false return value will prevent saving, so will a thrown error, which will also display on the attr editor */
    onConfirm: (attr: Attr) => Promise<boolean>
}


export const AttrEditor = ({
    notuClient,
    attr,
    onConfirm
}: AttrEditorProps) => {
    if (!attr.space)
        throw new Error('Attr must define the space that it belongs to prior to editing');

    const [error, setError] = useState(null);

    async function submitAttr(evt): Promise<void> {
        evt.preventDefault();
        attr.name = evt.target.elements.name.value;
        attr.description = evt.target.elements.description.value;
        attr.type = evt.target.elements.type.value;
        try {
            const confirmResult = await onConfirm(attr);
            if (!!confirmResult)
                notuClient.saveAttr(attr);
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
        <form onSubmit={submitAttr}>
            <fieldset>
                {renderErrorMessage()}

                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input type="text" className="input" name="name" defaultValue={attr.name}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea defaultValue={attr.description} name="description" className="textarea"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Type</label>
                    <div className="control">
                        <div className="select">
                            <select name="type" defaultValue={attr.type}>
                                <option value="TEXT">Text</option>
                                <option value="NUMBER">Number</option>
                                <option value="BOOLEAN">Boolean</option>
                                <option value="DATE">Date</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <button type="submit" className="button is-link">Confirm</button>
                </div>
            </fieldset>
        </form>
    )
}