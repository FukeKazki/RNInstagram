import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Layout from '../constants/Layout';
// 基本的なUIはrn-elementsを使う
import { Avatar } from 'react-native-elements';
// スライド機能はrm-carouselを使う
import Carousel from 'react-native-snap-carousel';

import PostCard from '../components/PostCard';

import HomeHeader from '../components/HomeHeader';

const Images = [{ uri: 'http://placehold.jp/24/cc9999/993333/100x100.png' }];

export default class HomeScreen extends React.Component {
  //Todo: HomeScreenにはstateを持たせずに各Componentに渡す
  constructor(props) {
    super(props);
    this.state = {
      carouselItems: [
        {
          image: Images[0],
          userName: 'kazki',
        },
        {
          image: Images[0],
          userName: 'kazki',
        },
        {
          image: Images[0],
          userName: 'kazki',
        },
        {
          image: Images[0],
          userName: 'kazki',
        },

        {
          image: Images[0],
          userName: 'kazki',
        },
        {
          image: Images[0],
          userName: 'kazki',
        },
      ],
    };
  }
  static navigationOptions = {
    header: null,
  };
  //Todo: アロー関数にしてファイルを分割する
  _renderItem ({item, index}) {
    return(
      <View style={styles.carouselItems}>
        <Avatar
          rounded
          source={item.image}
          size='medium'
        />
        <Text>{item.userName}</Text>
      </View>
    );
  }

  

  render() {
    return (
      <View style={styles.container}>
        <HomeHeader/>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Carousel
            style={styles.carouselStyle}
            ref={c => {this._carousel = c}}
            data={this.state.carouselItems}
            renderItem={this._renderItem}
            sliderWidth={Layout.window.width}
            itemWidth={100}
            enableSnap={false}
            firstItem={1}
          />
          {/*Todo: map関数を使う*/}
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 5,
  },
  carouselItems: {
    height: Layout.window.height/10
  },
  cardText: {
    marginTop: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  _renderTitleComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: 50,
  },
  cardTitle: {
    marginLeft: 10,
  },
});
