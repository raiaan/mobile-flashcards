import {StyleSheet,Platform} from 'react-native'
import {golden,purple ,white} from '../utils/colors'
export default  Styles = StyleSheet.create({
    Container:{
        borderRadius: Platform.os === "ios" ? 16 : 2,
        padding: 20,
        marginLeft: 18,
        marginRight: 18,
        marginTop: 17,
        justifyContent: "center",
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
            width: 0,
            height: 3
        }
    },
    cardContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:20,
        fontWeight:'800',
        textAlign:"center",
    },
    cardText:{
        fontSize:16,
        color:purple,
        textAlign:'center'
    },
    TextInput:{
        borderRadius: 8,
        height: 45,
        borderColor: purple, 
        borderWidth: 1,
        marginBottom:10,
        padding:10,
        fontSize:16,
        color:purple
    }
})
export const TouchStyle = StyleSheet.create(
    {
        iosSubmitBtn :{
            borderRadius: Platform.os === "ios" ? 16 : 2,
            padding: 20,
            marginLeft: 18,
            marginRight: 18,
            borderRadius:7,
            height:45,
        },
        androidSubmitBtn:{
            borderRadius: Platform.os === "ios" ? 16 : 2,
            padding: 20,
            marginLeft: 18,
            marginRight: 18,
            backgroundColor:purple,
            borderRadius:2,
            height:45,
            paddingLeft:38,
            paddingRight:38,
            justifyContent:'center',
            alignItems:'center'
        },
        submitBtnText:{
            color:white,
            fontSize:22,
            textAlign:'center'
        },
    }
)
export const yellowBtn = StyleSheet.create({
    iosSubmitBtn :{
        borderRadius: 16 ,
        borderColor:golden,
        padding: 20,
        borderRadius:7,
        height:45,
    },
    androidSubmitBtn:{
        borderRadius: 2,
        padding: 20,
        backgroundColor:golden,
        borderRadius:2,
        height:45,
        paddingLeft:38,
        paddingRight:38,
        justifyContent:'center',
        alignItems:'center'
    },
    submitBtnText:{
        color:Platform.os ==='ios' ? golden:white,
        fontSize:22,
        textAlign:'center'
    },
})