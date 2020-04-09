import React from 'react';
import { useWindowDimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import MainTabNavigator from './src/navigation/MainTabNavigator';
import { Provider as ShopProvider } from './src/context/shopContext';
import { Provider as CartProvider } from './src/context/cartContext';


export default () => {
  let entireScreenWidth = useWindowDimensions().width;
  EStyleSheet.build({ $rem: entireScreenWidth / 380 });

  return (
    <ShopProvider>
      <CartProvider>
        <MainTabNavigator />
      </CartProvider>
    </ShopProvider>
  );
}