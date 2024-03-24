import React from 'react';
import { Pressable, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faPhone, faVideo, faList, faEllipsis, faMicrophone, faImage, faLaughWink } from '@fortawesome/free-solid-svg-icons'; // Thay đổi từ faFaceLaughWink thành faLaughWink

function ChatMessage({ navigation, route }) {
    const { item, titleScreen } = route.params;
    console.log(item);
    return (
        <View style={styles.container}>
            {/* header */}
            <View style={styles.headerWrapper}>
                <Pressable style={styles.arrowLeftBtnWrapper} onPress={() => {
                    navigation.navigate(titleScreen);
                }}>
                    <FontAwesomeIcon size={25} style={[styles.icon, { marginLeft: 10 }]} icon={faArrowLeft} />
                </Pressable>
                <View style={styles.avatarStateWrapper}>
                    <Text style={styles.nameTxt}>{item.users[1].name}</Text>
                    <Text style={[styles.stateTxt, {marginRight:20}]}>Vừa mới truy cập</Text>
                </View>
                <Pressable style={[styles.callWrapper]}>
                    <FontAwesomeIcon size={25} style={[styles.icon, { marginLeft: 10 }]} icon={faPhone} />
                </Pressable>
                <Pressable style={styles.videoCallWrapper}>
                    <FontAwesomeIcon size={25} style={[styles.icon, { marginLeft: 10 }]} icon={faVideo} />
                </Pressable>
                <Pressable style={styles.listWrapper} onPress={() => {
                    navigation.navigate('ChatMessageOptions', { item: item, titleScreen: titleScreen });
                }}>
                    <FontAwesomeIcon size={25} style={[styles.icon, { marginLeft: 10 }]} icon={faList} />
                </Pressable>
            </View>
            {/* body */}
            <View style={[styles.bodyWrapper, {height:1000}]}>

            </View>
            {/* footer */}
            <View style={styles.footerWrapper}>
                <Pressable style={styles.listStickerWrapper}>
                    <FontAwesomeIcon size={25} color="black" style={[styles.icon, { marginLeft: 10 }]} icon={faLaughWink} />
                </Pressable>
                <TouchableOpacity style={styles.messageWrapper}>
                    <TextInput style={styles.messageTxt} placeholder="Tin nhắn" />
                </TouchableOpacity>
                <Pressable style={styles.ellipsisWrapper}>
                    <FontAwesomeIcon size={25} color="black" style={[styles.icon, { marginLeft: 10 }]} icon={faEllipsis} />
                </Pressable>
                <Pressable style={styles.microphoneWrapper}>
                    <FontAwesomeIcon size={25} color="black" style={[styles.icon, { marginLeft: 10 }]} icon={faMicrophone} />
                </Pressable>
                <Pressable style={styles.imageWrapper}>
                    <FontAwesomeIcon size={25} color="red" style={[styles.icon, { marginLeft: 10 }]} icon={faImage} />
                </Pressable>
            </View>
        </View>
    );
}

export default ChatMessage;
