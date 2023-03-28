import React from 'react';
import { UserContext } from './userContext';
interface Props {

}

export const UsernameAndTokenForm: React.FC<Props> = props => {
    const usernameRef = React.useRef<HTMLInputElement>(null);
    const tokenRef = React.useRef<HTMLInputElement>(null);
    const userData = React.useContext(UserContext);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('usernameRef', usernameRef.current?.value);
        console.log('tokenRef', tokenRef.current?.value);
        if (userData) {
            userData.user = usernameRef.current?.value || null;
            userData.token = tokenRef.current?.value || null;
        }
    }

    return (
        <>
            <div>
                <h1>Form</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" ref={usernameRef} />
                    <label htmlFor="token">Token</label>
                    <input type="text" id="token" ref={tokenRef} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
