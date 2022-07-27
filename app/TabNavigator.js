import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {createMaterialTopTabNavigator,createStackNavigator} from 'react-navigation';
import VesselArrival from './VesselArrival';
import Schedule from './Schedule';
import AddVesselArrivals from './AddVesselArrivals';
import ViewVesselSubmissions from './viewVesselSubmissions';
import AddVessels from './AddVessels';
import EditVesselSubmissions from './editVesselSubmission';
import Home from './Home';
import Login from './Login';
import Registered from './Registered';
import UserRegisteration from './UserRegisteration';

const Tabs = createMaterialTopTabNavigator({
    Vessels:VesselArrival,
    Schedule:Schedule
},{
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'white',
        style: {
            backgroundColor: '#7a7d82',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        }
    },
}
);

const StackNavigator = createStackNavigator({
    
    Home: {
        screen:Home
    },
    Login: {
        screen:Login
    },
    UserRegisteration:{
        screen: UserRegisteration
    },
    Registered: {
        screen:Registered
    },
   Tabs:{
        screen: Tabs
    },
    AddVesselArrivals:{
        screen:AddVesselArrivals
    },
    ViewVesselSubmissions:{
        screen:ViewVesselSubmissions
    },
    AddVessels:{
        screen: AddVessels
    },
    EditVesselSubmissions:{
        screen: EditVesselSubmissions
    }
    
},
    {
        navigationOptions:{
            headerMode:'none',
            //headerLeft:null
    
        }
    }

);




export default StackNavigator;