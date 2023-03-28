import React from 'react';
import './App.css';
import { UserContext, userContextDefaultValue } from './userContext';
import { UsernameAndTokenForm } from './UsernameAndTokenForm';
import { PrintInfo } from './PrintInfo';

function App() {
  return (
      <UserContext.Provider value={userContextDefaultValue}>
        <UsernameAndTokenForm />
        <PrintInfo />
      </UserContext.Provider>
  );
}

export default App;
