
import Container from '../../Container';
import React from 'react';
import Head from 'next/head';
import { useAppContext } from '../../../providers/AppProvider';

const ExampleLayout = ({ children }) => {
  const { currentPage } = useAppContext();

  return (
    <Container className="example-layout">
      <p>Layout!</p>
      {children}
    </Container>
  );
};

export default ExampleLayout;


