import styled from 'styled-components';

import Backdrop from '../../styles/images/backdrop-works.svg';

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

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding-inline-start: 2rem;
    padding-inline-end: 2rem;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    position: fixed;
    top: 0.5rem;
    left: 6rem;
    z-index: ${(props) => props.theme.levels.title};
    padding: 0;
    margin: 0;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    top: 1rem;
    left: 5rem;
    z-index: ${(props) => props.theme.levels.title};
    padding: 0;
    margin: 0;
  }
`;

const Divider = styled.div`
  width: 25rem;
  height: ${(props) => props.theme.divider.height.base};
  margin-block-start: ${(props) => props.theme.divider.spacing.base};
  background-color: ${(props) => props.theme.palette.primary};

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 17rem;
    margin-block-start: ${(props) => props.theme.divider.spacing.sm};
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 9rem;
    height: ${(props) => props.theme.divider.height.sm};
  }
`;

export { Container, Section, Divider };
