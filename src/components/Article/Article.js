// React imports
import React from 'react';

// Library imports

// Component imports

// Style imports
import { Container, Title, Divider, Subtext } from './styles';

/**
 * The selected works page.
 */
const Article = (props) => {
  const { title, subtext, children } = props;

  return (
    <Container>
      <Title>{title}</Title>

      <Divider />

      <Subtext>{subtext}</Subtext>

      {children}
    </Container>
  );
};

export default Article;
