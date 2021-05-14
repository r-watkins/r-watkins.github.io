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

export { Container };
