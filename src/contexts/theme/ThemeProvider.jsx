import { useEffect, useMemo, useState } from 'react';

import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'system';
    }

    return localStorage.getItem('theme') || 'system';
  });

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      const dark = theme === 'dark' || (theme === 'system' && mediaQuery.matches);

      setIsDark(dark);

      root.setAttribute('data-theme', dark ? 'dark' : 'light');
    };

    applyTheme();

    if (theme === 'system') {
      mediaQuery.addEventListener('change', applyTheme);
    }

    return () => {
      mediaQuery.removeEventListener('change', applyTheme);
    };
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const value = useMemo(
    () => ({
      theme,
      isDark,
      setTheme: changeTheme,
    }),
    [theme, isDark],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
