import React from 'react';

const themes = {
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
    color: 'black',
  },
};

const ThemeContext = React.createContext({});

function ThemeProvider({children}) {
  const [dark, setDark] = React.useState(false); // Default theme is light

  const toggle = () => {
    const isDark = !dark;
    setDark(isDark);
  };

  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{theme, dark, toggle}}>
      {children}
    </ThemeContext.Provider>
  );
}

export {ThemeProvider, ThemeContext};
