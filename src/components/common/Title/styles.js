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
    padding-block-start: 7rem;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-block-end: 2rem;
    padding-block-start: 6rem;
  }
`;

export { Title };
