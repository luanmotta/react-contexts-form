import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {
  const [darkTheme, _setDarkTheme] = useState(false)

  const setDarkTheme = () => _setDarkTheme(!darkTheme)

  return (
    <ThemeContext.Provider value={[darkTheme, setDarkTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
