// React imports
import React from 'react';

// Style imports
import { Container, Title, Subtext } from './styles';
import { Divider } from '../common/Divider/styles';

/**
 * The selected works article container for text and images/media.
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
