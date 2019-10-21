import React from 'react';
import {View,Text,TouchableOpacity,Platform} from 'react-native'
import Styles,{yellowBtn,TouchStyle} from './Styles';
import{setLocalNotification,clearLocalNotification} from '../utils/helper'
export default class Quize extends React.Component{
    state={
        currQuestionIndex : 0,
        showAnswer : false,
        correctAnswers :0

    }
    showAnswer(){
        this.setState({
            showAnswer :true,
        })
    }
    guessAnswer(answer){
        this.setState((state)=>{
            return {
                showAnswer:false,
                currQuestionIndex: state.currQuestionIndex+1,
                correctAnswers:answer===true?state.correctAnswers+1 : state.correctAnswers
            }
        })
    }
    restart(){
        this.setState({
            showAnswer:false,
            currQuestionIndex:0,
            correctAnswers:0
        })
        clearLocalNotification()
        .then(setLocalNotification)
    }
    back(){
        this.props.navigation.goBack()
        clearLocalNotification()
        .then(setLocalNotification)
    }
    render(){
        const {questions} = this.props.navigation.getParam('deck')
        if(questions.length ===0)
            {
                return (
                    <Text>no questions has been added to this deck</Text>
                )
            }
        else if(questions.length <= this.state.currQuestionIndex )
            {
                const result = `Correct Answers:  ${this.state.correctAnswers}/${questions.length}`
                return (
                    <View style= {{alignItems:'center',justifyContent:'center'}}>
                        <Text style={Styles.title}>{result}</Text>
                        <TouchableOpacity style={Platform.OS ==='ios'?TouchStyle.iosSubmitBtn:TouchStyle.androidSubmitBtn}
                            onPress={()=>{this.restart()}}>
                            <Text style={TouchStyle.submitBtnText}>Restart Quiz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Platform.OS ==='ios'?TouchStyle.iosSubmitBtn:TouchStyle.androidSubmitBtn}
                            onPress={()=>{this.back()}}>
                            <Text style={TouchStyle.submitBtnText}>Go Back</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        else return (
            <View style = {Styles.Container}>
                <View style = {[Styles.cardContainer,{justifyContent:'flex-start'}]}>
                    <Text>{this.state.currQuestionIndex +1}</Text>
                    <Text> / </Text>
                    <Text>{questions.length}</Text>
                </View>
                <View>
                    <Text style={Styles.title}>{questions[this.state.currQuestionIndex].question}</Text>
                    <TouchableOpacity onPress={()=>{this.showAnswer()}} style ={{selfAlign:'center'}}>
                        <Text style={{color:'red' , fontSize:15,textAlign:'center'}}>Show Answer</Text>
                    </TouchableOpacity>
                </View>
            {
                this.state.showAnswer===true?
                    <View style={Styles.Container}>
                        <Text style={[Styles.title,{marginBottom:8}]}>{questions[this.state.currQuestionIndex].answer}</Text>
                            <TouchableOpacity  style={[Platform.os==='ios'?yellowBtn.iosSubmitBtn:yellowBtn.androidSubmitBtn,{marginBottom:8}]}
                                onPress={()=>{this.guessAnswer(true)}}>
                                <Text style={yellowBtn.submitBtnText}>Correct</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Platform.os==='ios'?yellowBtn.iosSubmitBtn:yellowBtn.androidSubmitBtn}
                                onPress={()=>{this.guessAnswer()}}>
                                <Text style={yellowBtn.submitBtnText}>Incorrect</Text>
                            </TouchableOpacity>
                    </View>:null
            }
        </View>)
    }
 }