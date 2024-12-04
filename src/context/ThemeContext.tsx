// import React, { createContext, useContext, useState, useEffect } from 'react';

// const ThemeContext = createContext({
//   theme: 'dark',
//   toggleTheme: () => {},
// });

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(() => {
//     const savedTheme = localStorage.getItem('theme');
//     return savedTheme || 'dark';
//   });

//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//     document.documentElement.classList.toggle('dark', theme === 'dark');
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  // Initialize theme with localStorage value or default to 'dark'
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    // Update localStorage and apply the 'dark' class to <html> element
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]); // Re-run effect only when 'theme' changes

  // Toggle between dark and light themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
