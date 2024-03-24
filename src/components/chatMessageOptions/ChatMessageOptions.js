import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View, Switch } from 'react-native'
import React, {useState} from 'react'
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight, faMagnifyingGlass, faQrcode, faArrowLeft, faLock, faStar } from '@fortawesome/free-solid-svg-icons'

function ChatMessageOptions({navigation, route}){
    const {item:item, titleScreen:titleScreen} = route.params;
    // nút switch
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
      setIsEnabled(previousState => !previousState);
    };

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Pressable onPress={()=>{
                navigation.navigate(titleScreen, {item:item, titleScreen:titleScreen})
            }}>
                <FontAwesomeIcon style={{marginLeft: 15}} color='#F1FFFF' size={27} icon={faArrowLeft} />
            </Pressable>
            <Text style={styles.txtInHeader}>Tùy chọn</Text>
        </View>

        <ScrollView style={styles.body}>
            <View>
                <Pressable style={styles.avtWrapper}>
                    <Image source={require("../../../assets/img/8-anh-dai-dien-trang-inkythuatso-03-15-26-54.jpg")} style={styles.img_avt}></Image>
                    <Text>Thông tin</Text>
                </Pressable>
                <SafeAreaView style={styles.OptionsAbove}>
                    <Pressable style={styles.pressFindMessage}>
                        <FontAwesomeIcon style={{marginLeft: 15}} color='#000' size={27} icon={faMagnifyingGlass} />
                        <Text style={{}}>Tìm</Text>
                        <Text style={{}}>tin nhắn</Text>
                    </Pressable>
                    <Pressable style={styles.pressFindMessage}>
                        <FontAwesomeIcon style={{}} color='#000' size={27} icon={faMagnifyingGlass} />
                        <Text style={{}}>Trang</Text>
                        <Text style={{}}>cá nhân</Text>
                    </Pressable>
                    <Pressable style={styles.pressFindMessage}>
                        <FontAwesomeIcon style={{}} color='#000' size={27} icon={faMagnifyingGlass} />
                        <Text style={{}}>Đổi</Text>
                        <Text style={{}}>hình nền</Text>
                    </Pressable>
                    <Pressable style={styles.pressFindMessage}>
                        <FontAwesomeIcon style={{}} color='#000' size={27} icon={faMagnifyingGlass} />
                        <Text style={[{},{}]}>Tắt</Text>
                        <Text style={[{},{}]}>thông báo</Text>
                    </Pressable>
                </SafeAreaView>
                <Pressable style={styles.encodeEndWrapper}>
                    <FontAwesomeIcon style={{marginLeft: 15}} color='#000' size={27} icon={faLock} />
                    <Text style={styles.txt}>Mã hóa đầu cuối</Text>
                </Pressable>
                <Pressable style={styles.encodeEndWrapper}>
                    <FontAwesomeIcon style={{marginLeft: 15}} color='#000' size={27} icon={faLock} />
                    <Text style={styles.txt}>Đổi tên gợi nhớ</Text>
                </Pressable>
                {/* <Pressable style={styles.encodeEndWrapper}>
                    <FontAwesomeIcon style={{marginLeft: 15}} color='#000' size={27} icon={faLock} />
                    <Text style={styles.txt}>Đánh dấu bạn thân</Text>
                </Pressable> */}
                <Pressable style={styles.encodeEndWrapper}>
                    <FontAwesomeIcon style={{marginLeft: 15}} color='#000' size={27} icon={faStar} />
                    <Text style={styles.txt}>Đánh dấu bạn thân</Text>
                    <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 15 }}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    </View>
                </Pressable>
                <Pressable style={styles.encodeEndWrapper}>
                    <FontAwesomeIcon style={{marginLeft: 15}} color='#000' size={27} icon={faLock} />
                    <Text style={styles.txt}>Nhật ký chung</Text>
                </Pressable>

                {/* <Pressable style={styles.encodeEndWrapper}>
                    <FontAwesomeIcon style={{marginLeft: 15}} color='#000' size={27} icon={faLock} />
                    <Text style={styles.txt}>Ảnh, file, link đã gởi</Text>
                </Pressable> */}
                <Pressable style={styles.encodeEndWrapper}>
                    <FontAwesomeIcon style={{marginLeft: 15}} color='#000' size={27} icon={faLock} />
                    <Text style={styles.txt}>Ảnh, file, link đã gởi</Text>
                </Pressable>

                {/* Phần dưới */}
                <View style={styles.bottomContainer}>
                    {/* Các hình ảnh */}
                    <View style={styles.imageContainer}>
                    <Image source={require("../../../assets/img/8-anh-dai-dien-trang-inkythuatso-03-15-26-54.jpg")} style={styles.img}></Image>
                    <Image source={require("../../../assets/img/8-anh-dai-dien-trang-inkythuatso-03-15-26-54.jpg")} style={styles.img}></Image>
                    <Image source={require("../../../assets/img/8-anh-dai-dien-trang-inkythuatso-03-15-26-54.jpg")} style={styles.img}></Image>
                    <Image source={require("../../../assets/img/8-anh-dai-dien-trang-inkythuatso-03-15-26-54.jpg")} style={styles.img}></Image>

                    </View>
                    
                    {/* Nút "Xem thêm hình ảnh" */}
                    <Pressable style={styles.viewMoreButton}>
                    <Text style={styles.viewMoreText}>Xem thêm hình ảnh</Text>
                    </Pressable>
                </View>
                <Pressable style={styles.encodeEndWrapper}>
                    <FontAwesomeIcon style={{marginLeft: 15}} color='#000' size={27} icon={faLock} />
                    <Text style={styles.txt}>Tạo nhóm với Trần Minh Thuận</Text>
                </Pressable>
                <Pressable style={styles.encodeEndWrapper}>
                    <FontAwesomeIcon style={{marginLeft: 15}} color='#000' size={27} icon={faLock} />
                    <Text style={styles.txt}>Thêm Trần Minh Thuận vào nhóm</Text>
                </Pressable>
                <Pressable style={styles.encodeEndWrapper}>
                    <FontAwesomeIcon style={{marginLeft: 15}} color='#000' size={27} icon={faLock} />
                    <Text style={styles.txt}>Xem nhóm chung</Text>
                </Pressable>
                
                <Pressable style={styles.encodeEndWrapper}>
                    <FontAwesomeIcon style={{marginLeft: 15}} color='#000' size={27} icon={faLock} />
                    <Text style={styles.txt}>Ghim trò chuyện</Text>
                </Pressable>
                <Pressable style={styles.encodeEndWrapper}>
                    <FontAwesomeIcon style={{marginLeft: 15}} color='#000' size={27} icon={faLock} />
                    <Text style={styles.txt}>Ẩn trò chuyện</Text>
                </Pressable>
                <Pressable style={styles.encodeEndWrapper}>
                    <FontAwesomeIcon style={{marginLeft: 15}} color='#000' size={27} icon={faLock} />
                    <Text style={styles.txt}>Báo cuộc gọi đến</Text>
                </Pressable>
            </View>

        </ScrollView>
        </SafeAreaView>
    )
}
export default ChatMessageOptions
