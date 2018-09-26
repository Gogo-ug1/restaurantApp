import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import Login from './app/components/Login';
import MenuList from './app/components/MenuList';
import AddOrder from './app/components/AddOrder';
import ViewOrders from './app/components/ViewOrders';
import Sita from './app/components/sita';
import AllOrders from './app/components/AllOrders';
import ChefsView from './app/components/ChefsView';
import Review from "./app/components/review";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {
    createStackNavigator,
} from 'react-navigation';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Application = createStackNavigator({
   // Home: {screen: Login},
    ChefsView: {screen: ChefsView},
    AllOrders: {screen: AllOrders},
    AddOrder: {screen: AddOrder},
    ViewOrders: {screen: ViewOrders},
    MenuList: {screen: MenuList},

});

export default class App extends React.Component {
    render() {

        return (
            <Application/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c62829',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
