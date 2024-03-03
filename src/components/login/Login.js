import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native';
// import Carousel from 'react-native-snap-carousel'

const {width} = Dimensions.get('screen')

const data = [
  {
    id: 1,
    // name: 'Nguyen Van A',
    // phone: '0123456789',
    img: require('../../../assets/img/test.png')
  },
  {
    id: 2,
    // name: 'Nguyen Van B',
    // phone: '0123456789',
    img: require('../../../assets/img/test.png')
  },
  {
    id: 3,
    // name: 'Nguyen Van C',
    // phone: '0123456789',
    img: require('../../../assets/img/test.png')
  },
]

export const Login = ({navigation}) => {
  

  const renderItem = ({item}) => (
    <View>
      {/* <Text> {item.name} </Text> */}
      <Image source={item.img} style={{height: 200, width: width}} />
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.txtZaloX}>Zalo X</Text>
      </View>

      {/* <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        snapToAlignment='center'
      ></FlatList> */}

      <Pressable style={styles.btnLogin} onPress={()=> { navigation.navigate("MainScreen") }}> 
        <Text style={styles.txtLogin}> Đăng nhập </Text>
      </Pressable>
      
    </SafeAreaView>
  )
}

