import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from './app/Home';
import Login from './app/Login';
import UserRegisteration from './app/UserRegisteration';
import Registered from './app/Registered';


const AppStackNavigator = createStackNavigator({
    Home: Home,
    Login: Login,
    UserRegisteration: UserRegisteration,
    Registered: Registered
    }
);

export default class App extends Component {

    render() {
        return (
                <AppStackNavigator/>
        );
    }
}



/*
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {createStackNavigator} from 'react-navigation';
//import VesselArrival from './app/VesselArrival'
import  Tabs from './app/TabNavigator';
import AddVessel from './app/AddVessel';
const StackNavigator=createStackNavigator({
  Tabs:{
    screen:Tabs
  },
  AddVessel:{
screen:AddVessel
  }
});

export default StackNavigator;*/