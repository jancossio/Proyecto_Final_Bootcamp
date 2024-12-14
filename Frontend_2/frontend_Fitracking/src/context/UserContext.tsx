import { createContext } from 'react';

interface User {
  id: number | null;
  name: string | null;
}

interface UserContextType {
  user: User;
  setUser: (user: User) => void;
  logout: () => void;
  loading: boolean;
}

export const UserContext = createContext<UserContextType>({
  user: { id: null, name: null },
  setUser: () => {},
  logout: () => {},
  loading: true,
});