import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, Pressable, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { styles } from './style'
import moment from "moment";
import chatRooms from '../../data/chatRooms';
// import HeaderMenuComponent from '../headerMenu/headerMenu';
// header
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faMagnifyingGlass, faPencil, faSearch, faQrcode,faPlus } from '@fortawesome/free-solid-svg-icons';


export const Messages = () => {
  const DATA = chatRooms
  console.log(DATA)
  const Item = ({item})=> (
      <TouchableOpacity style={styles.containerBody}>
      <View style={styles.lefContainer}>
          <Image style={styles.avatar} source={{ uri: item.users[1].imageUri}}></Image>
          <View style={styles.midContainer}>
              <Text style={styles.userName}>{item.users[1].name}</Text>
              <Text style={styles.lastMessage} >{item.lastMessage.content}</Text>
          </View>
      </View>
      <Text style={styles.time}>
          {item.lastMessage && moment(item.lastMessage.createdAt).format("DD/MM/YYYY")}
      </Text>
  </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
        {/* header */}
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
        {/* body */}
        <SafeAreaView style={{marginTop:"58px"}} >
            <FlatList
                data={DATA} renderItem={({item}) => <Item item={item}></Item>}
            ></FlatList>
        </SafeAreaView>

    </View>
    
  )
}

