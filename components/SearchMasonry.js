import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card, Icon, Avatar, Image, SearchBar } from 'react-native-elements';
import Masonry from 'react-native-masonry-layout';

export default class SearchMasonry extends React.Component {
    _renderItem ({item, index}) {
        return(
          <View style={styles.carouselItems}>
            <Icon
                name='filter-center-focus'
                size={15}
            />
            {/* <Text>{item.userName}</Text> */}
          </View>
        );
    }
    render() {
      return (
            <Masonry
            style={styles.container}
            ref="masonry"
            columns={3} // optional - Default: 2
            renderItem={this._renderItem}
      />  
        );
    }
  }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
    textview: {
        flex: 1,
    },
  });