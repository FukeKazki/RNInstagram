import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card, Icon, Avatar, Image, SearchBar } from 'react-native-elements';

export default class SearchHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }

    updateSearch = search => {
        this.setState({ search });
    }

    render() {
        return(
            <View style={styles.headerContainer}>
                <SearchBar
                    placeholder='検索'
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                    containerStyle={{flex: 1,backgroundColor: '#fff'}}
                    platform='ios'
                />
                <Icon
                    name='filter-center-focus'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
    },
  });