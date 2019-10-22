import React from 'react'
import {TouchableOpacity,View,Text} from 'react-native'
import Styles from './Styles'
import {gray} from '../utils/colors'
export default DeckItem = ({Deck,navigation})=>{
    const cards = Deck.questions === null ? 0 : Deck.questions.length
    if(Deck ===null){
        return (
            <Text style={Styles.title}>404 can't find this deck</Text>
        )
    }
    return (
        <TouchableOpacity  style={[Styles.Container,{backgroundColor:gray}]}
            onPress={()=>{navigation.navigate('Deck',{deck:Deck})}} >
            <Text style={Styles.title}>{Deck.title}</Text>
            <View style={Styles.cardContainer}>
                <Text style={Styles.cardText}>{`${cards} Cards`}</Text>
            </View>
        </TouchableOpacity>
    )
}
