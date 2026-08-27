import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    // 1. Check persistent manual preference
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
    
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setThemeState(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
      return;
    }

    // 2. If no saved preference, detect local time (Day: 6 AM to 6 PM, Night: 6 PM to 6 AM)
    const currentHour = new Date().getHours();
    const isDayTime = currentHour >= 6 && currentHour < 18;
    
    // 3. Optional: fallback to system preference if we wanted, 
    // but the instruction emphasized time-based default ("detect local time", "select a default theme").
    const defaultTheme = isDayTime ? 'light' : 'dark';
    
    setThemeState(defaultTheme);
    document.documentElement.setAttribute('data-theme', defaultTheme);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
