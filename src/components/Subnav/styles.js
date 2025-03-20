import styled, { css } from 'styled-components';

import { Link } from 'react-router';

const Container = styled.nav`
  position: fixed;
  top: 10rem;
  left: 50%;
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem 5rem;
  border: 10px solid ${(props) => props.theme.palette.secondary};
  transform: translateX(-480px);
`;

const PageLink = styled(Link)`
  padding: 0 1rem;
  margin-block-end: 2rem;
  font-family: ${(props) => props.theme.font.secondary};
  font-size: 1rem;
  font-style: italic;
  color: ${(props) => props.theme.palette.common.white};
  text-decoration: none;
  transition: all ${(props) => props.theme.transitions.base};

  &:hover {
    text-decoration: underline;
  }

  ${(props) =>
    props.selected &&
    css`
      text-decoration: underline;
    `};
`;

export { Container, PageLink };
