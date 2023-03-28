import React, { useCallback, useContext, useRef } from 'react';
import { UserDispatchContext } from './userContext';

interface Props {

}

export const UsernameAndTokenForm: React.FC<Props> = props => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const tokenRef = useRef<HTMLInputElement>(null);
    const dispatch = useContext(UserDispatchContext);
    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>)  => {
        e.preventDefault();
        console.log('usernameRef', usernameRef.current?.value);
        console.log('tokenRef', tokenRef.current?.value);
        if (dispatch) {
            dispatch({type: 'user', payload: usernameRef.current?.value || null});
            dispatch({type: 'token', payload: tokenRef.current?.value || null});
            console.log('dispatched');
        }
    }, [dispatch]);

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
