import styled from 'styled-components';

import Backdrop from '../../styles/images/backdrop-about.svg';

const Container = styled.main`
  width: 100%;
  height: 100%;
  background-image: url(${Backdrop});
  background-color: ${(props) => props.theme.palette.background};
  background-size: cover;
  background-repeat: no-repeat;
`;

const Section = styled.section`
  width: ${(props) => props.theme.size.base};
  margin: auto;
  margin-block-end: 5rem;
  padding-block-start: ${(props) => props.theme.spacing.topGutter};
`;

const Divider = styled.div`
  width: 25rem;
  height: 1rem;
  margin-block-start: -0.8rem;
  background-color: ${(props) => props.theme.palette.primary};
`;

const Content = styled.section`
  display: flex;
  align-items: center;
  width: ${(props) => props.theme.size.base};
  margin: auto;
`;

const Images = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-start: 5rem;
`;

const Image = styled.img`
  position: absolute;
  width: 22rem;
  height: 22rem;
`;

export { Container, Section, Divider, Content, Images, Image };
