import React from 'react';
import { useWindowDimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import MainTabNavigator from './src/navigation/MainTabNavigator';


export default () => {
  let entireScreenWidth = useWindowDimensions().width;
  EStyleSheet.build({ $rem: entireScreenWidth / 380 });
  
  return (
    <MainTabNavigator />
  );
}