
import Container from '../../Container';
import React from 'react';
import Text from '../../typography/Text';
import { useAppContext } from '../../../providers/AppProvider';

const ExampleLayout = ({ children }) => {
  const { currentPage } = useAppContext();

  return (
    <Container className="example-layout">
      <Text>Layout!</Text>
      {children}
    </Container>
  );
};

export default ExampleLayout;


