import React, { useState } from 'react';
import { NotuClient } from 'notu/dist/types/services/HttpClient';
import 'bulma';

interface LoginViewProps {
    /** Used for saving the space once changes have been confirmed */
    notuClient: NotuClient,
    onLogin: () => Promise<void>
}


export const LoginView = ({
    notuClient,
    onLogin
}: LoginViewProps) => {

    const [error, setError] = useState(null);

    async function submitLogin(evt): Promise<void> {
        evt.preventDefault();
        setError(null);
        const username = evt.target.elements.username.value;
        const password = evt.target.elements.password.value;
        try {
            console.log('Attempting to login');
            await notuClient.login(username, password);
            console.log('Login succeeded');
            await onLogin();
        }
        catch(err) {
            console.log({err});
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
        <form onSubmit={submitLogin}>
            <fieldset>
                {renderErrorMessage()}

                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input type="text" className="input" name="username"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input type="password" className="input" name="password"/>
                    </div>
                </div>

                <div className="field">
                    <button type="submit" className="button is-link">Login</button>
                </div>
            </fieldset>
        </form>
    );
}