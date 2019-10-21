import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput,Platform } from "react-native"
import styles,{TouchStyle} from './Styles'
import {saveDeckTitle} from '../utils/async'

export default class AddDeck extends Component {
  state = {
    title: ""
  }
  onChangeText=(title)=> {
    this.setState({title})
  }
  submit=()=> {
      const {title}=this.state
      saveDeckTitle({title,questions:[]}).then(()=>{
          this.props.navigation.goBack()
      })
  }
  render() {
    return (
      <View style={styles.Container}>
        <TextInput
          style={styles.TextInput}
          placeholder = "What's The title Of your new Deck?"
          onChangeText={ text => this.onChangeText(text)}
        />
        <TouchableOpacity onPress={this.submit} style={Platform.os==='ios'?TouchStyle.iosSubmitBtn:TouchStyle.androidSubmitBtn}>
            <Text style={TouchStyle.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
