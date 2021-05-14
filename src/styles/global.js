import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

// Global page styling
// Resets
export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
    overflow: hidden;
    font-family: ${theme.font.primary};
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.palette.background};
    font-size: ${theme.font.baseSize};
    font-weight: 300;
    letter-spacing: 1px;
  }

  h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
    color: ${theme.palette.common.white};
    text-transform: none;
  }

  h1 {
    font-size: 6rem;
    font-weight: 300;
    color: ${theme.palette.common.white};

    @media only screen and (max-width: ${theme.breakpoints.xl}) {
      font-size: 4rem;
    }
  }

  h2 {
    font-family: ${theme.font.secondary};
    font-size: 4rem;
    font-weight: 400;
    font-style: italic;

    @media only screen and (max-width: ${theme.breakpoints.xl}) {
      font-size: 2.5rem;
    }

    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      font-size: 1.7rem;
    }
  }

  h3 {
    font-size: 4rem;
    font-weight: 300;

    @media only screen and (max-width: ${theme.breakpoints.md}) {
      font-size: 3rem;
    }

    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      font-size: 1.5rem;
    }
  }

  h4 {
    font-family: ${theme.font.secondary};
    font-size: 2rem;
    font-weight: 400;
    font-style: italic;

    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      font-size: 1.1rem;
    }
  }

  h5 {
    font-family: ${theme.font.secondary};
    font-size: 1.5rem;
    font-weight: 400;
    font-style: italic;
  }

  h6 {
    font-size: 1.3rem;
  }

  a {
    text-decoration: underline;
    text-decoration-color: ${theme.palette.secondary};
    color: ${theme.palette.common.white};

    &:hover {
      text-decoration: underline;
      text-decoration-style: double;
      text-decoration-color: ${theme.palette.secondary};
      color: ${theme.palette.secondary};
    }
  }

  ul {
    margin: 0;
    color: ${theme.palette.common.white};
  }

  figure {
    margin: 0;
  }

  figcaption {
    font-family: ${theme.font.secondary};
    font-weight: 400;
    font-style: italic;
    text-align: center;
    color: ${theme.palette.secondary};
  }
`;
