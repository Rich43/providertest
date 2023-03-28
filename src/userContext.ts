import { createContext } from 'react';

export interface UserContextType {
    user: string | null;
    token: string | null;
}

export const userContextDefaultValue: UserContextType = {user: null, token: null};
export const UserContext = createContext(userContextDefaultValue);
