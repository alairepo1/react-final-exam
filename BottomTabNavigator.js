import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'

import HomePage from "./screens/HomePage"
import Feature1Page from './screens/Feature1Page'
import Feature2Page from './screens/Feature2Page'
import Feature3Page from './screens/Feature3Page'

const bottomTabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            tabBarIcon: ({iconColor}) => (
                <MaterialCommunityIcons name="home" size={35} color={iconColor}/>
            ) 
        }
    },
    Crypto: {
        screen: Feature1Page,
        navigationOptions: {
            tabBarIcon: ({iconColor}) => (
                <MaterialCommunityIcons name="numeric-1-box-outline" size={35} color={iconColor}/>
            ) 
        }
    },
    Maps: {
        screen: Feature2Page,
        navigationOptions: {
            tabBarIcon: ({iconColor}) => (
                <MaterialCommunityIcons name="numeric-2-box-outline" size={35} color={iconColor}/>
            ) 
        }
    },
    Animation:{
        screen: Feature3Page,
        navigationOptions: {
            tabBarIcon: ({iconColor}) => (
                <MaterialCommunityIcons name="numeric-3-box-outline" size={35} color={iconColor}/>
            ) 
        }
    }
}, {
    initialRouteName: 'Home'
})

export default createAppContainer(bottomTabNavigator)