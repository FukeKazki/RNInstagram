import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card, Icon, Avatar, Image } from 'react-native-elements';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Layout from '../constants/Layout';

const Images = [{ uri: 'https://scontent-nrt1-1.cdninstagram.com/vp/a78056e25739feafa0a0774eda38848c/5D17F577/t51.2885-15/e35/54800420_2369011479987240_7022525315400684312_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com' }];

export default class PostCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      carouselItems: [
        {
          image: Images[0],
        },
        {
          image: Images[0],
        },
        {
          image: Images[0],
        },
      ],
    }
  }
  _renderItem ({item, index}) {
    return(
      <View style={styles.carouselItems}>
        <Image
          source={item.image}
          style={{height: 250}}
        />
      </View>
    );
  }
    _renderTitleComponent() {
        return(
          <View style={styles._renderTitleComponent}>
            <Avatar
              rounded
              source={{uri: 'https://scontent-nrt1-1.cdninstagram.com/vp/a78056e25739feafa0a0774eda38848c/5D17F577/t51.2885-15/e35/54800420_2369011479987240_7022525315400684312_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com'}}
              size='small'
            />
            <Text style={styles.cardTitle}>otani_emiri</Text>
            <Icon
              name='more-horiz'
              iconStyle={{marginLeft: 180}}
            />
          </View>
        );
    }
    render() {
        return(
            <Card
                title={this._renderTitleComponent()}
            >
                <Carousel
                  style={styles.carouselStyle}
                  ref={c => {this._carousel = c}}
                  data={this.state.carouselItems}
                  renderItem={this._renderItem}
                  sliderWidth={300}
                  itemWidth={200}
                  firstItem={0}
                  onSnapToItem={index=>this.setState({activeSlide: index})}
                />
                <View style={styles.iconsContainer}>
                    <Icon
                    name='favorite-border'
                    />
                    <Icon
                        name='chat-bubble-outline'
                        iconStyle={{marginLeft: 10}}
                    />
                    <Icon
                        name='send'
                        iconStyle={{marginLeft: 10}}
                    />
                    <Pagination
                      dotsLength={this.state.carouselItems.length}
                      activeDotIndex={this.state.activeSlide}
                      dotStyle={{
                        width: 5,
                        height: 5,
                        borderRadius: 2.5,
                        backgroundColor: 'rgba(225,225,225,0.92)'
                      }}
                      inactiveDotOpacity={0.4}
                      inactiveDotScale={0.6}
                    />
                    <Icon
                        name='bookmark-border'
                        iconStyle={{marginLeft: 70}}
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
        );
    }
}

const styles = StyleSheet.create({
    cardText: {
      marginTop: 10,
    },
    iconsContainer: {
      flexDirection: 'row',
      marginTop: 10,
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
    // carouselStyle: {
    //   flex:  1,
    // },
    // carouselItems: {
    //   flex: 1,
    // },
  });