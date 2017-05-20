import React, { Component } from 'react';
import { Container, Text } from 'native-base';
import axios from 'axios';

export default class AlbumList extends Component {

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => {
        console.log(res, '123');
      })
  }

  render() {
    return (
      <Container>
        <Text>
          Album Lists!
        </Text>
      </Container>
    )
  }
}
