import styled, { css } from 'styled-components';

import Backdrop from '../../styles/images/backdrop-resume.svg';

const Container = styled.main`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-image: url(${Backdrop});
  background-color: ${(props) => props.theme.palette.background};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Article = styled.article`
  width: ${(props) => props.theme.size.base};
  margin: auto;
  padding-block-start: ${(props) => props.theme.spacing.topGutter};
`;

const Header = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Divider = styled.div`
  width: 25rem;
  height: 1rem;
  margin-block-start: -0.8rem;
  margin-block-end: 1rem;
  background-color: ${(props) => props.theme.palette.primary};
`;

const Info = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Print = styled.a`
  display: flex;
  align-items: center;
  margin-block-end: 1rem;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.palette.secondary};
  }
`;

const Icon = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  margin-inline-end: 0.5rem;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  width: 100%;
  margin-block-start: 2rem;
  padding: 2rem 0;
  border-block-start: 1px solid ${(props) => props.theme.palette.secondary};
`;

const SectionTitle = styled.h5`
  width: 250px;
  white-space: nowrap;
`;

const SectionBlock = styled.div`
  width: 100%;
  margin-block-end: 5rem;

  ${(props) =>
    props.nogutter &&
    css`
      margin-block-end: 0;
    `};
`;

const SectionBlockHeader = styled.p`
  margin: 0.5rem 0;
  font-size: 1.1rem;
`;

export {
  Container,
  Article,
  Header,
  Divider,
  Info,
  Print,
  Icon,
  Section,
  SectionTitle,
  SectionBlock,
  SectionBlockHeader,
};
