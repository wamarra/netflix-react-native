import * as React from 'react';

export const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
  const [user, setUser] = React.useState();

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
