import React, { useReducer } from 'react';
import './App.css';
import { reducer, userContextValue, UserDispatchContext, UserStateContext } from './userContext';
import { UsernameAndTokenForm } from './UsernameAndTokenForm';
import { PrintInfo } from './PrintInfo';

function App() {
    const [state, dispatch] = useReducer(reducer, userContextValue);
    return (
        <UserDispatchContext.Provider value={dispatch}>
            <UserStateContext.Provider value={state}>
                <UsernameAndTokenForm/>
                <PrintInfo/>
            </UserStateContext.Provider>
        </UserDispatchContext.Provider>
    );
}

export default App;
