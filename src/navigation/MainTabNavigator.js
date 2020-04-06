import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '../constants/Colors';
import DetailsScreen from '../screens/DetailsScreen';
import CartScreen from '../screens/CartScreen';
import DigScreen from '../screens/DigScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TabBarIcon from '../components/TabBarIcon';



const defaultOptions = {
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
};

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={defaultOptions} >
            <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
        </HomeStack.Navigator>
    );
}

const SearchStack = createStackNavigator();

function SearchStackScreen() {
    return (
        <SearchStack.Navigator screenOptions={defaultOptions} >
            <SearchStack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
            <SearchStack.Screen name="Details" component={DetailsScreen} />
        </SearchStack.Navigator>
    );
}

const DigStack = createStackNavigator();

function DigStackScreen() {
    return (
        <DigStack.Navigator screenOptions={defaultOptions} >
            <DigStack.Screen name="Dig" component={DigScreen} options={{ headerShown: false }} />
            <DigStack.Screen name="Details" component={DetailsScreen} />
        </DigStack.Navigator>
    );
}

const CartStack = createStackNavigator();

function CartStackScreen() {
    return (
        <CartStack.Navigator screenOptions={defaultOptions} >
            <CartStack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
            <CartStack.Screen name="Details" component={DetailsScreen} />
        </CartStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Cart"
                tabBarOptions={{
                    activeTintColor: Colors.seaGreen,
                    activeIconColor: Colors.seaGreen,
                    style: { backgroundColor: Colors.darkBlue }
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeStackScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ focused }) => (
                            <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={SearchStackScreen}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ focused }) => (
                            <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Dig"
                    component={DigStackScreen}
                    options={{
                        tabBarLabel: 'Dig',
                        tabBarIcon: ({ focused }) => (
                            <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-disc' : 'md-disc'} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Cart"
                    component={CartStackScreen}
                    options={{
                        tabBarLabel: 'Cart',
                        tabBarIcon: ({ focused }) => (
                            <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}