import React from 'react'
import {View , Text, TouchableOpacity ,Platform} from 'react-native'
import Styles,{TouchStyle} from "./Styles";
export default class Deck extends React.Component{
    static navigationOptions =({navigation})=>{
        return {
          title: navigation.state.params.deck.title
        }
      }
    render(){
        const {navigation} = this.props
        const deck = navigation.getParam('deck')
        return(
            <View>
                <View style={[Styles.Container,{backgroundColor:'gray'}]}>
                    <Text style={Styles.title}>{deck.title}</Text>
                    <View style={[Styles.cardContainer,{marginTop:20}]}>
                        <Text style={[Styles.cardText,{fontWeight:'800'}]}>{deck.questions.length}</Text>
                        <Text> </Text>
                        <Text style={[Styles.cardText,{fontWeight:'800'}]}>cards</Text>
                    </View>
                </View>
                <TouchableOpacity style={[Platform.os==='ios'?TouchStyle.iosSubmitBtn:TouchStyle.androidSubmitBtn,{marginBottom:8,marginTop:20}]}
                     onPress={()=>{navigation.navigate('AddQuestion',{title:deck.title})}}>
                    <Text style={TouchStyle.submitBtnText}>Add Question</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Platform.os==='ios'?TouchStyle.iosSubmitBtn:TouchStyle.androidSubmitBtn}
                    onPress={()=>{navigation.navigate('Quize',{deck})}}>
                    <Text style={TouchStyle.submitBtnText}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}