import React from 'react'
import {addCardToDeck} from '../utils/async'
import styles,{TouchStyle} from './Styles'
import {View, Text,TextInput,TouchableOpacity,Platform} from 'react-native'
export default class AddQuestion extends React.Component{
    static navigationOptions =()=>{
        return {
          title: 'Add Question'
        }
      }
    state = {
        question:'',
        answer:'',
        title :this.props.navigation.state.params.title
    }
    onChangeQuestionText=(question)=>{
        this.setState({question})
    }
    onChangeAnswerText=(answer)=>{
        this.setState({answer})
    }
    submit=()=>{
        const {title,question,answer} = this.state
        addCardToDeck(title,{question,answer})
            .then(()=>{
                this.props.navigation.goBack()  
            })
    }
    render(){
        
        return(
        <View style={styles.Container}>
                <TextInput
                style={styles.TextInput}
                placeholder = 'enter your question'
                onChangeText={ text => this.onChangeQuestionText(text)}
                />
                <TextInput
                style={styles.TextInput}
                placeholder = 'enter your answer'
                onChangeText={ text => this.onChangeAnswerText(text)}
                />
            <TouchableOpacity onPress={this.submit} style={Platform.os==='ios'?TouchStyle.iosSubmitBtn:TouchStyle.androidSubmitBtn}>
                <Text style={TouchStyle.submitBtnText}>Submit</Text>
            </TouchableOpacity>
        </View>
        )
    }
}  