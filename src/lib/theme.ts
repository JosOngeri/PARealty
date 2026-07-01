// Theme configuration based on Plotnest Africa Realty design language
export const colors = {
  primary: '#1A5C2A', // Forest Green
  secondary: '#7B2D00', // Earth Brown
  accent: '#E8920A', // Golden Orange
  accent2: '#D4620A', // Warm Orange
  backgroundWarm: '#F5D5B0', // Peach Cream
  backgroundLight: '#FFF4EC', // Off-White Cream
  africaGreen: '#4CAF50', // Bright Leaf Green
  textDark: '#1A1A1A', // Near Black
  textMuted: '#4A3728', // Dark Brown-Gray
  white: '#FFFFFF',
  black: '#000000',
} as const;

export const fonts = {
  heading: 'Montserrat, sans-serif',
  body: 'Inter, sans-serif',
} as const;

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
} as const;

export const borderRadius = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
