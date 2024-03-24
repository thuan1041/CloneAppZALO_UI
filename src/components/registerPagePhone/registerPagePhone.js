import { Pressable, ScrollView, Text, TextInput, View} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faChevronRight, faL} from '@fortawesome/free-solid-svg-icons'
import { BACKEND_URL, BACKEND_LOCALHOST } from '@env';
import axios, { axio } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast, { DURATION } from 'react-native-easy-toast';
import { CommonActions } from '@react-navigation/native'

export const LoginPage = ({navigation}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFillText, setIsFillText] = useState(true);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState(''); 
  const toastRef = useRef(null);

  const loginFunc =  async (phoneNumber, password) => {
    try {
      // Gửi yêu cầu POST đến endpoint /auth/login trên máy chủ backend
      const response = await axios.post(`${BACKEND_LOCALHOST}:8080/auth/login`, {
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
        const response = await axios.post(`${BACKEND_LOCALHOST}:8080/auth/verify`, { id, phoneNumber });
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
      const id = loginResponse.data?.id;
      console.log("LoginPage: Login success: ", id);

      if (id != null) {
        // xác thực người dùng
        const verifyResponse = await verifyUser(id, phone);
        console.log("LoginPage: Verify success: ", verifyResponse.data.user.id);

        //luu thong tin user vao storage
        if (verifyResponse.errCode === 0) {
          const { access_token, refresh_token } = verifyResponse.data;
          // Lưu thông tin xác thực vào storage
          try {
            await AsyncStorage.setItem('access_token', access_token);
            await AsyncStorage.setItem('refresh_token', refresh_token);
            console.log('LoginPage: Authentication info saved successfully');
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
          <Text style={styles.txtInHeader}>Đăng nhập</Text> 
          {/* <Text>{todo}</Text> */}
        </Pressable>
      </View>
      
      <View style={styles.body}>
        <View style={{height: 40, backgroundColor: '#F9FAFE', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 15}}>Vui lòng nhập số điện thoại và mật khẩu để đăng nhập</Text>
        </View>

        <View style={{marginTop: 40, alignItems: 'center'}}>
          <TextInput style={styles.inputt} placeholder='Số điện thoại' onChangeText={(value)=> setPhone(value)}></TextInput>
          <View style={{width: '100%', justifyContent: 'center', flexDirection: 'row'}}>
            <TextInput style={[styles.inputt, {marginTop:10}]} placeholder='Mật khẩu' secureTextEntry={isPasswordVisible} onChangeText={(text)=> setPassword(text)}></TextInput>
            <Pressable onPress={()=> handleToggle()} style={{height: 50, width: 50,justifyContent: 'center', alignItems: 'center', marginLeft: -50}}>
              <Text style={{fontSize: 16}}>{isPasswordVisible ? "Hiện" : "Ẩn"}</Text>
            </Pressable>
          </View>

          <Pressable onPress={()=> alert('Lấy lại mật khẩu')} style={{marginTop: 20, alignSelf: 'flex-start', marginLeft: 20, height: 30, width:130}}>
            <Text style={{fontSize: 17, color: '#33A1FF'}}>Lấy lại mật khẩu</Text>
          </Pressable>

          <Pressable disabled={isFillText} onPress={loginHandleSuccess} style={[styles.btnLogin, isFillText ? styles.gray : styles.blue]}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '500'}}>Đăng nhập</Text>
          </Pressable>
        </View>

        <Toast ref={toastRef} position='top' />

      </View>
      
    </SafeAreaView>
  )
}

