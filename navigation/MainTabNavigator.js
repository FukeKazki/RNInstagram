import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import PhotoScreen from '../screens/PhotoScreen';
import GoodsScreen from '../screens/GoodsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'? 'logo-instagram': 'md-information-circle'}
    />
  ),
};

const SearchStack = createStackNavigator({
  Search: SearchScreen,
});

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'? 'md-search': 'md-search'}
    />
  ),
};

const PhotoStack = createStackNavigator({
  Photo: PhotoScreen,
});

PhotoStack.navigationOptions = {
  tabBarLabel: 'Photo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'md-link'}
    />
  ),
};



const GoodsStack = createStackNavigator({
  Goods: GoodsScreen,
});

GoodsStack.navigationOptions = {
  tabBarLabel: 'Goods',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'md-heart-empty' : 'md-heart-empty'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  SearchStack,
  PhotoStack,
  GoodsStack,
  SettingsStack,
});
