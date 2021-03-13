import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import Upload from '../../components/Upload';
import { Container } from './styles';

const Main = () => {
  return (
    <Container>
      {/* <Header /> */}
      <Upload />
    </Container>
  );
}

export default Main;