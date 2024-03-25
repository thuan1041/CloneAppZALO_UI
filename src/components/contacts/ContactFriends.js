import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendarDays, faSquarePhone, faUserPlus } from '@fortawesome/free-solid-svg-icons'

export const ContactFriends = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable style={styles.friendInfoWrapper}>
            <FontAwesomeIcon style={[styles.pngWrapper, {marginLeft: 15}]} color='#000' size={27} icon={faUserPlus} />
            <Text style={styles.txt}>Lời mời kết bạn</Text>
        </Pressable>
        <Pressable style={styles.friendInfoWrapper}>
            <FontAwesomeIcon style={[styles.pngWrapper, {marginLeft: 15}]} color='#000' size={27} icon={faSquarePhone} />
            <Text style={styles.txt}>Danh bạ máy</Text>
        </Pressable>
        <Pressable style={styles.friendInfoWrapper}>
            <FontAwesomeIcon style={[styles.pngWrapper, {marginLeft: 15}]} color='#000' size={27} icon={faCalendarDays} />
            <Text style={styles.txt}>Lịch sinh nhật</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'center'
    },
    friendInfoWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 70,
        width: '100%',
    },
    pngWrapper:{
        height: 70,
        width: 70,
        backgroundColor:"#187AFB",
        borderBlockColor:"#187AFB",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
            height: 70, // Increased height
    width: 70, // Increased width
    backgroundColor:"#187AFB",
    borderBlockColor:"#187AFB",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    },
    txt:{
        fontSize: 20,
        marginLeft: 15,
    }
})