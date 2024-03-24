import { Pressable, ScrollView, Text, TextInput, View} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight, faChevronLeft, faChevronRight, faCircle, faL} from '@fortawesome/free-solid-svg-icons'
import { BACKEND_URL } from '@env';
import axios, { axio } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast, { DURATION } from 'react-native-easy-toast';
import { CommonActions } from '@react-navigation/native'

export const RegisterPageL = ({navigation}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFillText, setIsFillText] = useState(true);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState(''); 

  const toastRef = useRef(null);
  
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   // try {
  //   //   const keys = await AsyncStorage.getAllKeys();
  //   //   const items = await AsyncStorage.multiGet(keys);
  //   //   console.log('Data from AsyncStorage:', items);
  //   //   setData(items);
  //   // } catch (error) {
  //   //   console.error('Error fetching data from AsyncStorage:', error);
  //   // }
  //   try {
  //     const access_token = await AsyncStorage.getItem('access_token');
  //     const refresh_token = await AsyncStorage.getItem('refresh_token');
  //     console.log(access_token);
  //     console.log(refresh_token);
  //   } catch (error) {
      
  //   }
  // };

//  console.log('1');
  // const fetchData = async () => {
  //  try {
  //   const response = await fetch(`${BACKEND_URL}:8080/users/test`, {
  //     method: 'GET',   
  //       headers: { 
  //         'Content-Type': 'application/json',
  //       },
  //   });
  //   const data = await response.json();
  //   // console.log(data);  
  //  } catch (error) {
  //   console.log('lỗi', error) 
  //  }
  // }

  const loginFunc =  async (phoneNumber, password) => {
    try {
      // Gửi yêu cầu POST đến endpoint /auth/login trên máy chủ backend
      const response = await axios.post(`${BACKEND_URL}:8080/auth/login`, {
          phoneNumber: phoneNumber,
          password: password
      });
      // Trả về dữ liệu từ phản hồi của máy chủ
      return response.data;
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error('Error during login:', error);
        throw error;
    }
  }

  const verifyUser = async (id, phoneNumber) => {
    try {
        const response = await axios.post(`${BACKEND_URL}:8080/auth/verify`, { id, phoneNumber });
        return response.data;
    } catch (error) {
        console.error('Error during user verification:', error);
        throw error;
    }
  };

  const loginHandleSuccess = async () => {
    try {
      //gọi hàm loginFunc với tham số phone và password
      const loginResponse = await loginFunc(phone, password);
      console.log("Login success: ", loginResponse);
      const id = loginResponse.data?.id;
      console.log(id);

      if (id != null) {
        // xác thực người dùng
        const verifyResponse = await verifyUser(id, phone);
        console.log("Verify success: ", verifyResponse);

        //luu thong tin user vao storage
        if (verifyResponse.errCode === 0) {
          const { access_token, refresh_token } = verifyResponse.data;
          // Lưu thông tin xác thực vào storage
          try {
            await AsyncStorage.setItem('access_token', access_token);
            await AsyncStorage.setItem('refresh_token', refresh_token);
            console.log('Authentication info saved successfully');
            // navigation.replace('MainScreen');
            // Sử dụng hàm resetToScreen để chuyển đến màn hình mong muốn và xóa các màn hình trước đó
            resetToScreen(navigation, 'MainScreen');
          } catch (error) {
            console.error('Error saving authentication info:', error);
          }
        }
      } else {
        toastRef.current.show('Tài khoản hoặc mật khẩu không hợp lệ!', 2000);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  } 
  
  
  // Trong một component của bạn hoặc bất kỳ nơi nào bạn muốn thực hiện việc xóa các màn hình trước đó
  const resetToScreen = (navigation, routeName) => {
    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: routeName }],
    }));
  };


  const handleToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }; 

  useEffect(() => {
    if (phone.length > 0 && password.length > 0) {
      setIsFillText(false);
    } else {
      setIsFillText(true);
    }
  }, [phone, password]);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.pressBack} onPress={()=> {navigation.goBack()}}>
          <FontAwesomeIcon icon={faChevronLeft} style={{marginLeft: 10}} color='#F5F8FF' size={20} />
          <Text style={styles.txtInHeader}>Tạo tài khoản</Text> 
          {/* <Text>{todo}</Text> */}
        </Pressable>
      </View>
      
      <View style={styles.body}>
        <View style={{alignItems: 'center', width: '95%'}}>
          <Text style={{alignSelf: 'flex-start', fontSize: 18, fontWeight: '500', marginTop: 15}}>Tên Zalo</Text>
          <TextInput style={styles.textNameI} placeholder='Gồm 2-40 ký tự'></TextInput>
        </View>

        <View style={{width: '95%'}}>
          <Text style={[styles.texxt, {marginTop: 20}]}>Lưu ý khi đặt tên:</Text>
          <View style={{marginTop: 8}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesomeIcon size={10} icon={faCircle} />
              <Text style={styles.texxt}>  Không vi phạm Quy định đặt tên trên Zalo.</Text>
            </View>
            <View style={{flexDirection: 'row',  alignItems: 'center', marginTop: 8}}>
              <FontAwesomeIcon size={10} icon={faCircle} />
              <Text style={styles.texxt}>  Nên sử dụng tên thật giúp bạn bè dễ nhận ra bạn.</Text>
            </View>
          </View>
        </View>

        <Pressable style={styles.btnRe}>
            <FontAwesomeIcon size={23} icon={faArrowRight} />
        </Pressable>
      </View>
      
    </SafeAreaView>
  )
}

