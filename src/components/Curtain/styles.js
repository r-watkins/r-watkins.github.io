import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: ${(props) => props.theme.levels.top};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1920px;
  height: 1280px;

  & svg {
    fill: ${(props) => props.theme.palette.background};
  }
`;

export { Container };
