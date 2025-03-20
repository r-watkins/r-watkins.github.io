import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
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
  background-color: ${(props) => props.theme.palette.background};
`;

export { Container, Cover };
