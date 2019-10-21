import React from 'react'
import {View} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import TabNavigetor from './tabNavigator'
import {createAppContainer} from 'react-navigation'
import {purple,white} from '../utils/colors'
import AddQuestion from './AddQuestion'
import Quize from './Quize'
import Deck from './Deck'
const items = {
    Home :{
        screen:TabNavigetor,
        navigationOptions: {
            header: null,
           },
    },
    Deck:{
        screen:Deck,
        navigationOptions:({ navigation }) => ({
            headerTintColor: white,
            headerStyle: {
              backgroundColor: purple,
            },})},
    AddQuestion:{
        screen:AddQuestion,
        navigationOptions:({ navigation }) => ({
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            },})},
    Quize:{
        screen:Quize,
        navigationOptions:({ navigation }) => ({
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            },})}
    }
    
export default   StackNav = createAppContainer(
    createStackNavigator(items)
)