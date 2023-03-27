import React, { createContext, useState, useContext, ReactNode, SetStateAction, Dispatch } from "react";

type AuthContextProps = {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextProps>({
  isAuth: false,
  setIsAuth: () => {}
});

export const AuthProvider: React.VFC<{ children: ReactNode }> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);