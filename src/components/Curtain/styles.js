import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 70px;
  left: 50%;
  z-index: ${(props) => props.theme.levels.top};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Cover = styled.div`
  width: 100vw;
  height: 100vh;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 51%;
    background-color: ${(props) => props.theme.palette.primary};
    transform: skew(0deg, 6deg);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    background-color: ${(props) => props.theme.palette.primary};
    transform: skew(0deg, -6deg);
  }
`;

export { Container, Cover };
