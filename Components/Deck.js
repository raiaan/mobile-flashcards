import React from 'react'
import {View , Text, TouchableOpacity ,Platform} from 'react-native'
import {getDeck} from '../utils/async'
import Styles,{TouchStyle} from "./Styles";
export default class Deck extends React.Component{
    static navigationOptions =({navigation})=>{
        return {
          title: navigation.state.params.deck.title
        }
      }
    componentDidMount(){
        this.focusListener = this.props.navigation.addListener('didFocus',()=> { this.getdata()});
    }
    state = {
        deck:this.props.navigation.getParam('deck')
    }
    getdata(){
        getDeck(this.state.deck.title).then((res)=>{
            this.setState({deck: (JSON.parse(res))} )
        })
    }
    componentWillUnmount() {
        this.focusListener.remove();
    }
    render(){
        const {deck} = this.state
        const {navigation} = this.props
        const cards = deck.questions === null ? '0 Card' :
         deck.questions.length === 1 ? '1 Card' : deck.questions.length+' Cards'
        
        return(
            <View>
                <View style={[Styles.Container,{backgroundColor:'gray'}]}>
                    <Text style={Styles.title}>{deck.title}</Text>
                    <View style={[Styles.cardContainer,{marginTop:20}]}>
                        <Text style={[Styles.cardText,{fontWeight:'800'}]}>{cards}</Text>
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