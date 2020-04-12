import React, { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Stitch, AnonymousCredential } from 'mongodb-stitch-react-native-sdk';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

import MainTabNavigator from './src/navigation/MainTabNavigator';
import { Provider as CartProvider } from './src/context/cartContext';

export default () => {
  let entireScreenWidth = useWindowDimensions().width;
  EStyleSheet.build({ $rem: entireScreenWidth / 380 });
  const [isLoading, setIsLoading] = useState(true);

  const _loadClient = () => {
    Stitch.initializeDefaultAppClient('crate-digger-stitch-adpqh')
      .then(client => {
        client.auth
          .loginWithCredential(new AnonymousCredential())
          .then(user => {
            console.log(`Successfully logged in as user ${user.id}`);
          })
          .catch(err => {
            console.log(`Failed to log in anonymously: ${err}`);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  const _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/vinylstock.jpg'),
        require('./assets/images/logo.png'),
      ]),
      Font.loadAsync({
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
        Roboto: require('./assets/fonts/Roboto.ttf'),
        Roboto_medium: require("./assets/fonts/Roboto_medium.ttf"),
      })
    ]);
  };

  useEffect(() => {
    _loadClient();
  }, []);

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onError={this._handleLoadingError}
        onFinish={this._handleFinishLoading}
      />
    );
  } else {
    return (
      <CartProvider>
        <MainTabNavigator />
      </CartProvider>
    );
  }
};