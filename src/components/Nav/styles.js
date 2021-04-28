import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

const baseLinkStyle = css`
  padding: ${(props) => props.theme.spacing.linkInner};
  margin: ${(props) => props.theme.spacing.linkOuter};
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  background: transparent;
  font-size: 1.2rem;
  color: ${(props) => props.theme.palette.secondary};
  text-decoration: none;
  text-transform: uppercase;
  transition: all ${(props) => props.theme.transitions.base};

  &:hover {
    text-decoration: none;
    border-bottom: 3px solid ${(props) => props.theme.palette.secondary};
  }

  ${(props) =>
    props.selected &&
    css`
      border: 3px solid ${(props) => props.theme.palette.secondary};
    `};
`;

const Container = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5rem 0;
  background: ${(props) => props.theme.palette.transparency};
  backdrop-filter: blur(5px);
`;

const PageLink = styled(Link)`
  ${baseLinkStyle};
`;

const ScrollLink = styled.a`
  ${baseLinkStyle};
`;

export { Container, PageLink, ScrollLink };
