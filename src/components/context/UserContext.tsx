import React, { createContext, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

export type UserContextTypes = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as UserContextTypes);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
