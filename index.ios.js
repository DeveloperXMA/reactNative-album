/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import Header from './src/components/Header';
import { Container, Content } from 'native-base';
import AlbumList from './src/components/AlbumList';

export default class todayRoutine extends Component {
  render() {
    return (
      <Container>
        <Header headerText="My Store!" />
        <Content>
          <AlbumList />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('todayRoutine', () => todayRoutine);
