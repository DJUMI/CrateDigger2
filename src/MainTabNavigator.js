import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Colors from '../src/constants/Colors';
import DetailsScreen from './screens/DetailsScreen';
import CartScreen from '../src/screens/CartScreen';
import DigScreen from '../src/screens/DigScreen';
import HomeScreen from '../src/screens/HomeScreen';
import SearchScreen from '../src/screens/SearchScreen';
import TabBarIcon from '../src/components/TabBarIcon';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const defaultOptions = {
    defaultNavigationOptions: {
        headerTitle: '',
        headerBackTitleVisible: 'Back',
        headerStyle: {
            backgroundColor: Colors.darkBlue,
            borderBottomWidth: 0,
        },
        headerTintColor: Colors.seaGreen,
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }
};

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    }, defaultOptions,
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
    ),
};

HomeStack.path = '';

const SearchStack = createStackNavigator(
    {
        Search: SearchScreen,
        Details: DetailsScreen,
    }, defaultOptions,
    config
);

SearchStack.navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
    ),
};

SearchStack.path = '';

const DigStack = createStackNavigator(
    {
        Dig: DigScreen,
        Details: DetailsScreen,
    }, defaultOptions,
    config
);

DigStack.navigationOptions = {
    tabBarLabel: 'Dig',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-disc' : 'md-disc'} />
    ),
};

DigStack.path = '';

const CartStack = createStackNavigator(
    {
        Cart: CartScreen,
        Details: DetailsScreen,
    }, defaultOptions,
    config
);

CartStack.navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} />
    ),
};

CartStack.path = '';

const DetailsStack = createStackNavigator(
    {
        Details: DetailsScreen,
    }
);

DetailsStack.path = '';

DetailsScreen.navigationOptions = {
    title: 'Details'
};

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    SearchStack,
    DigStack,
    CartStack,
}, {
    tabBarOptions: {
        activeTintColor: Colors.seaGreen,
        activeIconColor: Colors.seaGreen,
        style: { backgroundColor: Colors.darkBlue }
    },
});

tabNavigator.path = '';

export default createAppContainer(tabNavigator);