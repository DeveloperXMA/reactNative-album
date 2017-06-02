import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Text, Card, CardItem, Thumbnail, Left, Right, Body } from 'native-base';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

export default class AlbumList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <Card key={album.title}>
        <CardItem style={styles.containerStyle}>
          <Thumbnail square source={{uri: album.thumbnail_image}} style={styles.thumbnailStyle}/>
          <Body style={styles.headLineText}>
            <Text style={styles.headerTextStyle}>{album.title}</Text>
            <Text style={styles.titleTextStyle}>{album.artist}</Text>
          </Body>
        </CardItem>
        <CardItem cardBody style={styles.containerStyle}>
          <Image style={styles.imageSize} source={{uri: album.image}} />
        </CardItem>
      </Card>
    );
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => {
        this.setState({ albums: res.data});
      });
  }

  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}

const styles = {
  headLineText: {
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    marginLeft: 10,
    marginRight: 10
  },
  headerTextStyle: {
    fontSize: 18
  },
  titleTextStyle: {
    fontSize: 12
  },
  imageSize: {
    height: 300,
    width: null,
    flex: 1
  },
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};
