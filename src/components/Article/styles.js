import styled from 'styled-components';

const Container = styled.article`
  width: 100%;
  height: 100%;
  padding-block-start: ${(props) => props.theme.spacing.topGutter};
  margin: auto;
  box-sizing: border-box;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding-block-start: 6rem;
    padding-inline-start: 2rem;
    padding-inline-end: 2rem;
  }
`;

const Title = styled.h3``;

const Subtext = styled.p`
  margin-block-start: 2rem;
  margin-block-end: 2rem;
  font-family: ${(props) => props.theme.font.secondary};
  font-size: 1.5rem;
  font-weight: 400;
  font-style: italic;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 1.1rem;
  }
`;

export { Container, Title, Subtext };
