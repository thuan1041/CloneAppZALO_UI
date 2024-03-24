import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        // padding:10        
      },
    headerWrapper: {
      flexDirection: 'row',
      width: "100%",
      height:"58px",
      backgroundColor:"#0091FF",
      alignItems:"center",
      position:"fixed",
      top:0
    },
    icon:{
      color:"white",
      fontSize: 30,
      opacity:0.8
    },
    serachTxt:{
      color:"white",
      fontSize:"20px",
      opacity:0.8
    },
    arrowleftBtnWrapper:{
      flexDirection:"row"
    },
    avatar_state_Wrapper:{
      marginLeft:"20px"
    },
    nameTxt:{
      color:"white",
      fontSize:"20px",
      opacity:0.98,
      fontWeight:600
    },
    stateTxt:{
      color:"white",
      fontSize:"16px",
      opacity:0.8
    },
    callWrapper:{
      marginLeft:"50px"
    },
    videoCallWrapper:{
      marginLeft:"20px"
    },
    listWrapper:{
      marginLeft:"20px"
    },
    // body
    footerWrapper:{
      width:"100%",
      height:"78px",
      backgroundColor:"white",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:'center',
      borderTopWidth:1,
      borderTopColor:"#c8dbcd",
      position:"fixed",
      bottom:0,
      paddingBottom:20,
      paddingTop:10
    },
    listStickerWrapper:{
      marginLeft:10,
    },
    imageWrapper:{
      marginRight:10
    },
    messageWrapper:{
      width:"30%"
    },
    messageTxt:{
      color:"black",
      fontSize:"22px",
      opacity:0.8,
      lineHeight:48,
      fontWeight:500,
      outlineStyle:"none"
    }
})