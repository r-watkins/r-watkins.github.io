import styled from 'styled-components';

const Container = styled.main`
  width: 100%;
  height: 100%;
  padding-block-start: ${(props) => props.theme.spacing.topGutter};
  margin: auto;
`;

const Title = styled.h3``;

const Divider = styled.div`
  width: 20rem;
  height: 1rem;
  margin-block-start: -0.8rem;
  margin-block-end: 2rem;
  background-color: ${(props) => props.theme.palette.primary};
`;

const Subtext = styled.p`
  margin-block-end: 2rem;
  font-family: ${(props) => props.theme.font.secondary};
  font-size: 1.5rem;
  font-weight: 400;
  font-style: italic;
`;

export { Container, Title, Divider, Subtext };
