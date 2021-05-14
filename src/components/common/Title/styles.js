import styled from 'styled-components';

const Title = styled.section`
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

export { Title };
