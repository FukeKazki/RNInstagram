import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Layout from '../constants/Layout';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import { Header, Card, Icon } from 'react-native-elements';

import Carousel from 'react-native-snap-carousel';

const Images = [{ uri: 'http://placehold.jp/24/cc9999/993333/100x100.png' }];

export default class HomeScreen extends React.Component {
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

  _renderItem ({item, index}) {
    return(
      <View style={styles.carouselItems}>
        <Image
          source={item.image}
          style={styles.carouselImage}
        />
        <Text>{item.userName}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor='#fff'
          leftComponent={{ icon: 'add-a-photo'}}
          centerComponent={{ text: 'Instagram' }}
          rightComponent={{ icon: 'near-me' }}
        />
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
          
          <Card
            title='usename'
            image={require('../assets/images/50_50.png')}
          >
            <View style={styles.iconsContainer}>
              <Icon
                name='star-border'
              />
              <Icon
                name='textsms'
                iconStyle={{marginLeft: 10}}
              />
              <Icon
                name='near-me'
                iconStyle={{marginLeft: 10}}
              />
              <Icon
                name='bookmark-border'
                iconStyle={{marginLeft: 200}}
              />
            </View>
            <Text style={styles.cardText}>
            {`
            #シナモンコーデ ／(o・ω・o)＼💭
            シナモン意識で全身ホワイト♡
            ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
            フリフリ〜✨リボンなしでも可愛い🎀
            これも #milkcocoa のワンピです💍
            ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
            レースくつした #loveran 💅🏻
            シューズ #niceclaup 💕
            ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
            #サンリオピューロランド #シナモン #みりにゃ服
            `}
            </Text>
          </Card>
          <Card
            title='usename'
            image={require('../assets/images/50_50.png')}
          >
            <Text>textarea</Text>
          </Card>
          <Card
            title='usename'
            image={require('../assets/images/50_50.png')}
          >
            <Text>textarea</Text>
          </Card>
          <Card
            title='usename'
            image={require('../assets/images/50_50.png')}
          >
            <Text>textarea</Text>
          </Card>
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
    paddingTop: 10,
  },
  carouselItems: {
    height: Layout.window.height/7
  },
  carouselImage: {
    flex: 3,
    borderRadius: 40,
  },
  cardText: {
    marginTop: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
});
