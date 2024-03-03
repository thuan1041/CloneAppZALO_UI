import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flexDirection:"column",
      width: "100%",
    },
    // header
    headerWrapper: {
      flexDirection: 'row',
      width: "100%",
      height:"58px",
      backgroundColor:"#0091FF",
      alignItems:"center",
      position:"fixed",
      top:0,
    },
    icon:{
      color:"white",
      fontSize: 30,
      opacity:0.8
    },
    serachTxt:{
      color:"white",
      fontSize:"20px",
      opacity:0.8,
      outlineStyle:"none"
    },
    searchBtnWrapper:{
      flexDirection:"row"
    },
    //body
    containerBody:{
      flexDirection: 'row',
      width: "100%",
      padding:10  ,
      borderBottomWidth:1,
      borderColor:"#e3e6e4",
      backgroundColor:"white"
    },
    lefContainer: {
      flexDirection: 'row',
    },
    midContainer: {
      justifyContent: 'space-around'
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 50,
      marginRight: 15,
    },
    userName: {
      fontWeight: 'bold',
      fontSize: 20,
      fontWeight:500
    },
    lastMessage_content: {
      fontSize: 16,
      color: 'grey',
      fontWeight:200
    },
    time: {
      fontSize: 14,
      color: 'grey',
    }
})