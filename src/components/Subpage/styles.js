import styled from 'styled-components';

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  width: ${(props) => props.theme.size.base};
  margin: auto;
  box-sizing: border-box;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding-inline-end: 2rem;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    width: auto;
    padding-inline-end: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
`;

export { Row, Image, Video };
