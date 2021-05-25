import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-block-start: 10rem;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xl}) {
    padding-block-start: 6rem;
  }
`;

const Title = styled.section`
  margin-block-start: 5rem;
  margin-inline-end: 5rem;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xl}) {
    margin-block-start: 10rem;
    margin-inline-end: 0;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    position: absolute;
    top: 50%;
    margin: auto;
    transform: translateY(-50%);
  }
`;

const Name = styled.h1`
  margin-inline-start: 3rem;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-inline-start: 1rem;
    font-size: 2.5rem;
  }
`;

const Job = styled.h2`
  display: flex;
  align-items: center;
  margin-block-start: 3rem;
  margin-inline-start: 4rem;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xl}) {
    margin-block-start: 1.5rem;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-block-start: 34rem;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 1.5rem;
    margin-block-start: 22rem;
    margin-inline-start: 3rem;
  }
`;

const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 2rem;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 1rem;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 1rem;
    height: 1rem;
    margin: 0 0.5rem;
  }
`;

const Divider = styled.div`
  width: 40rem;
  height: ${(props) => props.theme.divider.height.base};
  margin-block-start: ${(props) => props.theme.divider.spacing.base};
  background-color: ${(props) => props.theme.palette.primary};

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 26rem;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    height: ${(props) => props.theme.divider.height.sm};
    margin-block-start: ${(props) => props.theme.divider.spacing.sm};
    width: 15.5rem;
  }
`;

const Portrait = styled.figure`
  position: relative;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xl}) {
    transform: scale(0.7);
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    position: absolute;
    top: 52%;
    margin: auto;
    transform: translateY(-50%) scale(0.7);
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    top: 53%;
    transform: translateY(-50%) scale(0.45);
  }
`;

const Circle = styled.div`
  position: absolute;
  top: 5.5rem;
  left: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: 30rem;
  border-radius: 100%;
  background-color: ${(props) => props.theme.palette.primary};
`;

const Image = styled.img`
  width: 23rem;
  height: 23rem;
  margin-inline-end: 1rem;
`;

export { Container, Title, Name, Job, Icon, Divider, Portrait, Circle, Image };
