import React,{Component} from 'react'
import {View,FlatList,Text} from 'react-native'
import {getDecks,getDeck} from '../utils/async'
import DeckItem from './DeckItem'
export default class Decks extends Component{
    state={
        decks:[]
    }
    componentDidMount(){
        this.focusListener = this.props.navigation.addListener('didFocus',()=> { this.getdata()});
    }
    getdata(){
        this.setState({decks:[]})
         getDecks().then((keys)=>{
                for(key of keys){
                    getDeck(key).then((res)=>{
                        this.setState((state)=>{
                            return {decks: state.decks.concat(JSON.parse(res))}
                        })
                    })
                } 
            })
    }
    componentWillUnmount() {
        this.focusListener.remove();
    }
    render(){
        if(this.state.decks.length === 0){
            return (
                <Text>no decks added yet!!</Text>
            )
        }
        return(
            <View>
                <FlatList data={this.state.decks} 
                    renderItem={({item})=>(<DeckItem Deck = {item} navigation={this.props.navigation}
                    />)}
                />
            </View>
            
        )
    }

}