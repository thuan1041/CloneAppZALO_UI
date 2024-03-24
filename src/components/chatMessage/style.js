import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    // container: {
    //     flexDirection: 'row',
    //     width: "100%",
    //     justifyContent: 'space-between',
    //     // padding:10  

    // },
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        width: "100%",
        height: 78,
        backgroundColor: "#0091FF",
        alignItems: "center",
        position: "absolute", // Sửa thành "absolute" thay vì "fixed"
        top: 0,
        paddingTop:20
    },
    icon: {
        color: "white",
        fontSize: 30,
        opacity: 0.8
    },
    searchTxt: { // Đã sửa thành "searchTxt"
        color: "white",
        fontSize: 20,
        opacity: 0.8
    },
    arrowleftBtnWrapper: { // Đã sửa thành "arrowLeftBtnWrapper"
        flexDirection: "row"
    },
    avatarStateWrapper: { // Đã sửa thành "avatarStateWrapper"
        marginLeft: 20 // Loại bỏ dấu nháy kép ở giá trị số
    },
    nameTxt: {
        color: "white",
        fontSize: 20,
        opacity: 0.98,
        // fontWeight:600
    },
    stateTxt: {
        color: "white",
        fontSize: 16,
        opacity: 0.8
    },
    callWrapper: {
        marginLeft: 50 // Loại bỏ dấu nháy kép ở giá trị số
    },
    videoCallWrapper: {
        marginLeft: 20 // Loại bỏ dấu nháy kép ở giá trị số
    },
    listWrapper: {
        marginLeft: 20 // Loại bỏ dấu nháy kép ở giá trị số
    },
    // body
    footerWrapper: {

        flexDirection: 'row',
        width: "100%",
        height: 78,
        borderTopWidth: 1,
        borderTopColor: "#c8dbcd",
        alignItems: "center",
        justifyContent: "space-between", // Thêm thuộc tính justifyContent
        paddingHorizontal: 16, // Thêm padding cho phần nội dung header
        position: "absolute",
        bottom: 0,
        zIndex: 1,
        paddingBottom: 20,
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
        fontSize:22, // Loại bỏ dấu nháy kép ở giá trị số
        opacity:0.8,
        lineHeight:48,
    }
})
