import styled from 'styled-components';

import Backdrop from '../../../../styles/images/backdrop-works-one.svg';

const Container = styled.main`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-image: url(${Backdrop});
  background-color: ${(props) => props.theme.palette.background};
  background-size: cover;
  background-repeat: no-repeat;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  width: ${(props) => props.theme.size.base};
  margin: auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

export { Container, Row, Image };
