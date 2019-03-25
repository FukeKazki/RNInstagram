import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card, Icon, Avatar, Image, SearchBar } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import Layout from '../constants/Layout';


export default class SearchCarsousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carouselItems: [
                {
                  userName: 'ショップ',
                },
                {
                  userName: 'スタイル',
                },
                {
                  userName: '美容',
                },
                {
                  userName: '音楽',
                },
        
                {
                  userName: '建築物',
                },
                {
                  userName: 'テレビ・映画',
                },
            ],
        }
    }

    _renderItem ({item, index}) {
        return(
          <View style={styles.carouselItems}>
            <Icon
                name='filter-center-focus'
                size={15}
            />
            <Text>{item.userName}</Text>
          </View>
        );
    }

    render() {
        return(
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
        );
    }
}

const styles = StyleSheet.create({
    carouselStyle: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // height: 30,
    },
    carouselItems: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#000',
        padding: 5,
    },
});