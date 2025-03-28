// Custom theme handler to replace Replit's theme plugin
import { useEffect } from 'react';

// Load theme configuration from theme.json
const theme = {
  variant: "vibrant",
  primary: "hsl(215 100% 50%)",
  appearance: "light",
  radius: 0.75
};

export const setupTheme = () => {
  // Apply primary color to CSS variables
  document.documentElement.style.setProperty('--primary', theme.primary);
  
  // Apply border radius
  document.documentElement.style.setProperty('--radius', `${theme.radius}rem`);
  
  // You can add more theme customizations as needed
};

export const useTheme = () => {
  useEffect(() => {
    setupTheme();
  }, []);
  
  return { theme };
};