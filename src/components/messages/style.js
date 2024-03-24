import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // header
  headerWrapper: {
    flexDirection: 'row',
    width: "100%",
    height: 78,
    backgroundColor: "#0091FF",
    alignItems: "center",
    justifyContent: "space-between", // Thêm thuộc tính justifyContent
    paddingHorizontal: 16, // Thêm padding cho phần nội dung header
    position: "absolute",
    top: 0,
    zIndex: 1,
    paddingTop: 20,
  },
  body: {
    marginTop: 78,
  },
  icon: {
    color: "white",
    fontSize: 30,
    opacity: 0.8
  },
  searchTxt: {
    color: "white",
    fontSize: 20,
    opacity: 0.8,
    marginLeft: 10
  },
  searchBtnWrapper: {
    flexDirection: "row",
  },
  //body
  containerBody: {
    flexDirection: 'row',
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#e3e6e4",
    backgroundColor: "white",
    justifyContent: "space-between"
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
    marginRight: "10%",
  },
  userName: {
    fontSize: 20,
    // fontWeight:500
  },
  lastMessage_content: {
    fontSize: 16,
    color: 'grey',
    // fontWeight:200
  },
  time: {
    fontSize: 14,
    color: 'grey',
    marginTop: "10px",
    right: "10px",
    // fontWeight:500,
    color: "black"
  },
  timeWrapper: {

  },
  actionIconsWrapper: {
    flexDirection: 'row', // Đảm bảo các icon nằm cùng một hàng
    alignItems: 'center', // Căn chỉnh các icon theo trục dọc
    justifyContent: 'space-between', // Canh chỉnh khoảng cách giữa các icon
    paddingHorizontal: 16, // Thêm padding nếu cần
  },
});
