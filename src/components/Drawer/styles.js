import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import { PageLink as SubnavLink } from '../Subnav/styles';

const buttonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
`;

const Container = styled.header`
  position: fixed;
  z-index: ${(props) => props.theme.levels.top};
  width: 100%;
  height: 100vh;
  padding: 1rem;
  background: ${(props) => props.theme.palette.transparency};
  backdrop-filter: blur(5px);
`;

const MenuButton = styled.button`
  ${buttonStyles}
  border: 3px solid ${(props) => props.theme.palette.secondary};
  background: transparent;
  color: ${(props) => props.theme.palette.common.white};
  transition: background ${(props) => props.theme.transitions.base};

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.palette.secondary};
    color: ${(props) => props.theme.palette.common.black};
  }
`;

const CloseButton = styled.button`
  ${buttonStyles}
  border: 3px solid ${(props) => props.theme.palette.background};
  background: transparent;
  color: ${(props) => props.theme.palette.common.black};
  transition: background ${(props) => props.theme.transitions.base};

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.palette.background};
    color: ${(props) => props.theme.palette.common.white};
  }
`;

const Scrim = styled.div`
  position: absolute;
  z-index: ${(props) => props.theme.levels.scrim};
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.palette.common.black};
  opacity: 0.5;
`;

const Menu = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${(props) => props.theme.levels.overlay};
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  box-sizing: border-box;
  padding: 1rem;
  background: ${(props) => props.theme.palette.common.white};
  box-shadow: 0px 0px 10px ${(props) => props.theme.palette.common.white};
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-block-start: 1rem;
  background: ${(props) => props.theme.palette.background};
  color: ${(props) => props.theme.palette.common.white};
`;

const PageLink = styled(Link)`
  padding: 0 1rem;
  margin-block-end: 2rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => props.theme.palette.common.white};
  transition: all ${(props) => props.theme.transitions.base};

  &:first-child {
    margin-block-start: 2rem;
  }

  &:hover {
    text-decoration: underline;
  }

  ${(props) =>
    props.selected &&
    css`
      text-decoration: underline;
    `};
`;

const SubPageLink = styled(SubnavLink)`
  padding-inline-start: 2rem;
  padding-inline-end: 1rem;
`;

export {
  Container,
  MenuButton,
  CloseButton,
  Scrim,
  Menu,
  Nav,
  PageLink,
  SubPageLink,
};
