import React from 'react'
import {TouchableOpacity,View,Text} from 'react-native'
import Styles from './Styles'
import {gray} from '../utils/colors'
export default DeckItem = ({Deck,navigation})=>{
    return (
        <TouchableOpacity  style={[Styles.Container,{backgroundColor:gray}]}
            onPress={()=>{navigation.navigate('Deck',{deck:Deck})}} >
            <Text style={Styles.title}>{Deck.title}</Text>
            <View style={Styles.cardContainer}>
                <Text style={Styles.cardText}>{Deck.questions.length}</Text>
                <Text> </Text>
                <Text style={Styles.cardText}>Cards</Text>
            </View>
        </TouchableOpacity>
    )
}
