import styled from 'styled-components';

import Backdrop from '../../styles/images/backdrop-about.svg';

const Container = styled.main`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-image: url(${Backdrop});
  background-color: ${(props) => props.theme.palette.background};
  background-size: cover;
  background-repeat: no-repeat;
`;

const Content = styled.section`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: ${(props) => props.theme.size.base};
  margin: auto;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: auto;
    padding-inline-start: 2rem;
    padding-inline-end: 2rem;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column-reverse;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-block-end: 3rem;
  }
`;

const Images = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-start: 5rem;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-block-end: 3rem;
    margin-inline-start: 0;
    padding-block-start: 6rem;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    transform: scale(0.7);
    margin-block-end: 1rem;
    padding-block-start: 3rem;
  }
`;

const Image = styled.img`
  position: absolute;
  width: 22rem;
  height: 22rem;
`;

export { Container, Content, Images, Image };
