import React from 'react';
import { Platform} from 'react-native';
import { createBottomTabNavigator , createMaterialTopTabNavigator} from 'react-navigation-tabs';
import  AddDeck from "./addDeck";
import DeckList from "./DeckList";
import {Ionicons,FontAwesome} from '@expo/vector-icons'
import { createAppContainer } from 'react-navigation'
import { white , purple} from '../utils/colors'
const tabs = {
    Decks: {
      screen:DeckList,
      navigationOptions:{
        tabBarLabel:'Decks',
        tabBarIcon:({tintColor})=><Ionicons name='ios-speedometer' size ={30} color = {tintColor}/>
      }
    },
    AddDeck: {
        screen:AddDeck,
        navigationOptions:{
          tabBarLabel:'Add deck',
          tabBarIcon:({tintColor})=><FontAwesome name='plus-square' size ={30} color = {tintColor}/>
        }
      },
  }
  const tabsInfo = {
    initialRouteName: 'Decks',
    navigationOptions:{
      header:null
    },
    tabBarOptions:{
      activeTintColor:Platform.OS==='ios'? purple:white,
      style:{
        height:65,
        backgroundColor:Platform.OS==='ios'? white:purple,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
        width: 0,
        height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
        }
      }
  }
export default  Navbar = createAppContainer(
      Platform.os==='ios'?createBottomTabNavigator(tabs,tabsInfo):
        createMaterialTopTabNavigator(tabs,tabsInfo))