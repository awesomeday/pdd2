/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { 
    createStackNavigator, createBottomTabNavigator, NavigationScreenProp, NavigationStateRoute 
} from 'react-navigation';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type NavigationProps = {
    navigation: NavigationScreenProp<NavigationStateRoute<any>>,
};

class HomeScreen extends Component<NavigationProps> {
    openSettings() {
        console.log(this.props);
        this.props.navigation.navigate('Another');
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button title="Settings" onPress={() => this.openSettings()}/>
            </View>
        );
    }
}

class AnotherScreen extends Component {
    render() {
        return (
            <View>
                <Text>Anoter Screeen</Text>
            </View>
        );
    }
}

// const RootStack = createStackNavigator({
//     Home: { screen: HomeScreen }
// });

const RootStack = createBottomTabNavigator({
    Home: { screen: HomeScreen },
    Another: { screen: AnotherScreen }
});

export default class App extends Component {
    render() {
        return <RootStack />;
    }
}
