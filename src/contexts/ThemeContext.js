import React, { useState } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [darkTheme, _setDarkTheme] = useState(false)

  const setDarkTheme = () => _setDarkTheme(!darkTheme)

  return (
    <ThemeContext.Provider value={[darkTheme, setDarkTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
