import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  width: ${(props) => props.theme.size.base};
  margin: auto;
`;

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: all ${(props) => props.theme.transitions.base};

  &:hover {
    cursor: pointer;
    text-decoration: none;

    .underline {
      opacity: 1;
    }
  }
`;

const CardBody = styled.div`
  display: flex;
`;

const Number = styled.p`
  margin-inline-end: 2rem;
  font-size: 4rem;
  font-weight: 500;
`;

const CardSubTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 100;
`;

const Divider = styled.div`
  opacity: 0;
  width: 5rem;
  height: 1rem;
  background-color: ${(props) => props.theme.palette.secondary};
  transition: opacity ${(props) => props.theme.transitions.base};
`;

export { Container, Card, CardBody, Number, CardSubTitle, Divider };
