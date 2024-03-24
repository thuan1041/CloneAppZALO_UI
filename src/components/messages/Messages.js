import { ScrollView, SafeAreaView, StyleSheet, Text, View, FlatList, Image, Pressable, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { styles } from './style'
import moment from "moment";
import chatRooms from '../../data/chatRooms';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faMagnifyingGlass, faPencil, faSearch, faQrcode,faPlus } from '@fortawesome/free-solid-svg-icons';


export const Messages = ({ navigation }) => {
    const DATA = chatRooms;
    console.log(DATA);
    const titleScreen = "Messages";
  
    const Item = ({ item }) => (
      <Pressable style={styles.containerBody} onPress={() => {
        navigation.navigate('ChatMessage', { item: item, titleScreen: titleScreen });
      }}>
        <View style={styles.lefContainer}>
          <Image style={styles.avatar} source={{ uri: item.users[1].imageUri }} />
          <View style={styles.midContainer}>
            <Text style={styles.userName}>{item.users[1].name}</Text>
            <Text style={styles.lastMessage}>{item.lastMessage.content}</Text>
          </View>
        </View>
        <View style={styles.timeWrapper}>
          <Text style={styles.time}>
            {item.lastMessage && moment(item.lastMessage.createdAt).format("DD/MM/YYYY")}
          </Text>
        </View>
      </Pressable>
    );
  
    return (
      <View style={styles.container}>
        {/* header */}
        <View style={styles.headerWrapper}>
          <Pressable style={styles.searchBtnWrapper}>
            <FontAwesomeIcon size={25} style={[styles.icon, { marginLeft: 10 }]} icon={faSearch} />
            <TextInput style={[styles.serachTxt, { marginLeft: 10 }]} placeholder="Tìm kiếm" />
          </Pressable>
          <Pressable>
            <FontAwesomeIcon size={25} style={[styles.icon, { marginLeft: 35 }]} icon={faQrcode} />
          </Pressable>
          <Pressable style={{ marginRight: 10 }}>
            <FontAwesomeIcon size={25} style={[styles.icon, { marginLeft: 10 }]} icon={faPlus} />
          </Pressable>
        </View>
        {/* body */}
        <ScrollView contentContainerStyle={styles.body}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </ScrollView>
      </View>
    );
  };