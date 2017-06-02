import React, { Component } from 'react';
import { Container, Content, Text, Card, CardItem } from 'native-base';
import MyCard from './Card';
import MyCardItem from './MyCardItem';

export default class AlbumDetail extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyCard>
        <MyCardItem>
          <Text>{this.props.album.title}</Text>
        </MyCardItem>
      </MyCard>
    )
  }
}
