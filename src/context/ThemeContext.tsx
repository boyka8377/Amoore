import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMood = 'day' | 'night';

interface ThemeContextType {
  theme: ThemeMood;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMood) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMood>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('amoree_theme');
      if (saved === 'night' || saved === 'day') return saved;
      // Default to day mood
      return 'day';
    }
    return 'day';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'night') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('amoree_theme', theme);
    } catch {
      // Ignore localStorage errors if storage blocked
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'day' ? 'night' : 'day'));
  };

  const setTheme = (newTheme: ThemeMood) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
