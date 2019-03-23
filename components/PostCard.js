import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card, Icon, Avatar } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

export default class PostCard extends React.Component {
    _renderTitleComponent () {
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
              iconStyle={{marginLeft: 190}}
            />
          </View>
        );
    }
    render() {
        return(
            <Card
                title={this._renderTitleComponent()}
                image={{uri:'https://scontent-nrt1-1.cdninstagram.com/vp/a78056e25739feafa0a0774eda38848c/5D17F577/t51.2885-15/e35/54800420_2369011479987240_7022525315400684312_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com'}}
                imageStyle={{height: 300}}
            >
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
        );
    }
}

const styles = StyleSheet.create({
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