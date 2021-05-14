import styled from 'styled-components';

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

export { Divider };
