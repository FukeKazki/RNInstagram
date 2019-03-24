import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default class HomeHeader extends React.Component {
    _renderRightComponent() {
        return(
        <View style={styles.iconsContainer}>
            <Icon
                name='cast'
                iconStyle={{marginRight: 10}}
            />
            <Icon
                name='near-me'
            />
        </View>
        );
    }
    render() {
        return(
        <Header
          backgroundColor='#fff'
          leftComponent={{ icon: 'add-a-photo'}}
          centerComponent={{ text: 'Instagram' }}
          rightComponent={this._renderRightComponent()}
        />
        );
    }
}

const styles = StyleSheet.create({
    iconsContainer: {
      flexDirection: 'row',
    },
  });