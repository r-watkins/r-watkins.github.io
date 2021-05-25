// App Theme Object
export const theme = {
  palette: {
    primary: '#3b008d',
    secondary: '#f1f1f1',
    foreground: '#1f1f1f',
    midground: '#212121',
    background: '#1d1d1d',
    transparency: '#212121e3',
    common: {
      white: '#ffffff',
      black: '#000000',
    },
  },

  font: {
    baseSize: '16px',
    primary: 'Montserrat, sans-serif',
    secondary: 'PTSerif, serif',
  },

  spacing: {
    linkInner: '1rem 2rem',
    linkOuter: '0 1rem',
    topGutter: '9rem',
  },

  transitions: {
    base: 'ease 200ms',
  },

  divider: {
    height: {
      base: '1rem',
      sm: '0.5rem',
    },
    spacing: {
      base: '-0.8rem',
      sm: '-0.2rem',
    },
  },

  size: {
    base: '1024px',
    md: '500px',
  },

  levels: {
    overlay: 100,
    scrim: 99,
    title: 12,
    nav: 11,
    top: 10,
    mid: 5,
    back: 2,
    base: 1,
  },

  breakpoints: {
    xl: '1550px',
    lg: '1366px',
    md: '1023px',
    sm: '767px',
    xs: '375px',
  },

  navBreak: 1023,
};
