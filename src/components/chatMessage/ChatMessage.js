import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faPhone, faVideo, faList, faEllipsis, faMicrophone, faImage, faFaceLaughWink } from '@fortawesome/free-solid-svg-icons';

function ChatMessage({navigation, route}) {
    const {item:item, titleScreen:titleScreen} = route.params;
    console.log(item)
    return ( 
        <View style={styles.container}>
            {/* header */}
            <View style={styles.headerWrapper}>
                <Pressable style={styles.arrowleftBtnWrapper} onPress={()=>{
                    navigation.navigate(titleScreen)
                }}>
                    <FontAwesomeIcon size={25} style={[styles.icon,{marginLeft:10}]}  icon={faArrowLeft} />
                    {/* <TextInput style={[styles.serachTxt,{marginLeft:10}]} placeholder="Tìm kiếm"></TextInput>                 */}
                </Pressable>
                <Pressable style={styles.avatar_state_Wrapper}>
                    <Text style={styles.nameTxt}>{item.users[1].name}</Text>
                    <Text style={styles.stateTxt}>Vừa mới truy cập</Text>
                </Pressable>
                <Pressable style={styles.callWrapper}>
                    <FontAwesomeIcon size={25} style={[styles.icon,{marginLeft:10}]}  icon={faPhone} />
                </Pressable>
                <Pressable style={styles.videoCallWrapper}>
                    <FontAwesomeIcon size={25} style={[styles.icon,{marginLeft:10}]}  icon={faVideo} />
                </Pressable>
                <Pressable style={styles.listWrapper} onPress={()=>{
                    navigation.navigate('ChatMessageOptions', {item:item, titleScreen:titleScreen})
                }}>
                    <FontAwesomeIcon size={25} style={[styles.icon,{marginLeft:10}]}  icon={faList} />
                </Pressable>
            </View>
            {/* body */}
            <View style={styles.bodyWrapper}>

            </View>
            {/* footer */}
            <View style={styles.footerWrapper}>
                <Pressable style={styles.listStickerWrapper}>
                    <FontAwesomeIcon size={25} color="black" style={[styles.icon,{marginLeft:10}]}  icon={faFaceLaughWink} />
                </Pressable>
                <TouchableOpacity style={styles.messageWrapper}>
                    <TextInput style={styles.messageTxt}  placeholder="Tin nhắn"/>
                </TouchableOpacity>
                <Pressable style={styles.ellipsisWrapper}>
                    <FontAwesomeIcon size={25} color="black" style={[styles.icon,{marginLeft:10}]}  icon={faEllipsis} />
                </Pressable>
                <Pressable style={styles.microphoneWrapper}>
                    <FontAwesomeIcon size={25} color="black" style={[styles.icon,{marginLeft:10}]}  icon={faMicrophone} />
                </Pressable>
                <Pressable style={styles.imageWrapper}>
                    <FontAwesomeIcon size={25} color="red" style={[styles.icon,{marginLeft:10}]}  icon={faImage} />
                </Pressable>
            </View>
        </View>
    );
}

export default ChatMessage;