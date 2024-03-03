import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
      }
})