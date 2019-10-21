import React from 'react';
import { StyleSheet,StatusBar,View} from 'react-native';
import Constants from 'expo-constants'
import StackNav from './Components/stackNav';
import {purple}from './utils/colors'
import { setLocalNotification } from './utils/helper'
function UdaciStatusBar({backgroundColor , ...props}){
  return (
    <View style ={{backgroundColor , height :Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}
export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
 render(){
  return (
    <View style={{
      flex:1
    }}>
    <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
    <StackNav />
  </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
