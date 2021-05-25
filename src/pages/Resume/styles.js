import styled from 'styled-components';

const Article = styled.article`
  width: ${(props) => props.theme.size.base};
  box-sizing: border-box;
  margin: auto;
  padding-block-start: ${(props) => props.theme.spacing.topGutter};

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding-inline-start: 2rem;
    padding-inline-end: 2rem;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    padding-block-start: 7rem;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding-block-start: 6rem;
  }
`;

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  padding-block-end: 2rem;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
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

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-block-start: 3rem;
  }
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
  padding: 2rem 0;
  border-block-start: 1px solid ${(props) => props.theme.palette.secondary};

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
  }
`;

const SectionTitle = styled.h5`
  width: 250px;
  white-space: nowrap;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-block-end: 2rem;
  }
`;

const SectionBlock = styled.div`
  width: 100%;
  margin-block-end: 5rem;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-block-end: 1.5rem;
  }

  &:last-child {
    margin-block-end: 0;
  }
`;

const SectionBlockHeader = styled.p`
  margin-block-end: 0.5rem;
  font-size: 1.1rem;
`;

export {
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
