import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import SearchHeader from '../components/SearchHeader';
import PostCard from '../components/PostCard';
import SearchCarousel from '../components/SearchCarousel';
import SearchMasony from '../components/SearchMasonry';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: null,
  };

  render() {
    return (
      <View style={styles.container} >
        <SearchHeader/>
        <SearchCarousel/>
        <SearchMasony/>
        {/* <ScrollView style={styles.scrollView}>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
        </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
