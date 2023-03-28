import React from 'react';
import { UserContext } from './userContext';
interface Props {

}

export const PrintInfo: React.FC<Props> = props => {
    return (
        <>
            <div>
                <h1>Print Info</h1>
                <UserContext.Consumer>
                    {userData => {
                        return (
                            <>
                                <p>Username: {userData?.user || ''}</p>
                                <p>Token: {userData?.token || ''}</p>
                            </>
                        )
                    }
                    }
                </UserContext.Consumer>
            </div>
        </>
    );
};
