import React, { useContext } from 'react';
import { UserStateContext } from './userContext';

interface Props {

}

export const PrintInfo: React.FC<Props> = props => {
    const state = useContext(UserStateContext);
    return (
        <>
            <div>
                <h1>Print Info</h1>
                <>
                    <p>Username: {state?.user || ''}</p>
                    <p>Token: {state?.token || ''}</p>
                </>
            </div>
        </>
    );
};
