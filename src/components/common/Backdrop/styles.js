import styled from 'styled-components';

const Backdrop = styled.main`
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.background});
  background-color: ${(props) => props.theme.palette.background};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export { Backdrop };
