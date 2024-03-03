import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faMagnifyingGlass, faPencil, faSearch, faQrcode,faPlus } from '@fortawesome/free-solid-svg-icons';

function HeaderMenuComponent() {
    return ( 
        <View style={styles.headerWrapper}>
            <Pressable style={styles.searchBtnWrapper}>
                <FontAwesomeIcon size={25} style={[styles.icon,{marginLeft:10}]}  icon={faSearch} />
                <TextInput style={[styles.serachTxt,{marginLeft:10}]} placeholder="Tìm kiếm"></TextInput>                
            </Pressable>
            <Pressable>
                <FontAwesomeIcon size={25} style={[styles.icon,{marginLeft:35}]} icon={faQrcode}></FontAwesomeIcon>
            </Pressable>
            <Pressable style={{marginRight:10}}>
                <FontAwesomeIcon size={25} style={[styles.icon,{marginLeft:10}]} icon={faPlus}></FontAwesomeIcon>
            </Pressable>
        </View>
    );
}

export default HeaderMenuComponent;