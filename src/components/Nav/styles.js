import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

const Container = styled.nav`
  position: fixed;
  top: 0;
  z-index: ${(props) => props.theme.levels.nav};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5rem 0;
  background: ${(props) => props.theme.palette.transparency};
  backdrop-filter: blur(5px);
`;

const PageLink = styled(Link)`
  padding: ${(props) => props.theme.spacing.linkInner};
  margin: ${(props) => props.theme.spacing.linkOuter};
  border-width: 3px 3px 0px 3px;
  border-style: solid;
  border-color: transparent;
  background: transparent;
  font-size: 1.2rem;
  color: ${(props) => props.theme.palette.secondary};
  text-decoration: none;
  text-transform: uppercase;
  transition: all ${(props) => props.theme.transitions.base};

  &:hover {
    text-decoration: none;
    box-shadow: 0 3px 0 ${(props) => props.theme.palette.secondary};
  }

  ${(props) =>
    props.selected &&
    css`
      pointer-events: none;
      border-color: ${(props) => props.theme.palette.secondary};
      box-shadow: 0 3px 0 ${(props) => props.theme.palette.secondary};
    `};
`;

export { Container, PageLink };
