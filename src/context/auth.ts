import { createContext, useContext } from 'react';

interface AuthContextType {
  authToken: string | null,
  setAuthToken: (value: string | unknown) => void
  removeAuthToken: () => void
}

export const AuthContext = createContext({} as AuthContextType);


export function useAuth(){
  return useContext(AuthContext);
}
