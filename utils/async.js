import {AsyncStorage} from 'react-native';

export const  getDecks =  ()=>{
    return AsyncStorage.getAllKeys().then((keys)=>{
            return keys}
        )
}
export const RemoveAll= ()=>{
    return AsyncStorage.getAllKeys().then((keys)=>{
        keys.map((key)=>{
            AsyncStorage.removeItem(key)
        })
    })
}
export const saveDeckTitle=(deck)=>{
    return AsyncStorage.mergeItem(deck.title,JSON.stringify({
        title:deck.title,
        key:deck.title,
        questions:[]
    }))
}
export const getDeck=(id)=>{
    return AsyncStorage.getItem(id)
}
export const addCardToDeck = async (title,card)=>{
    let deck = JSON.parse(await getDeck(title))
    deck.questions.push(card)
    return AsyncStorage.removeItem(title).then(()=>{
        AsyncStorage.mergeItem(title,JSON.stringify(deck))
    })
}