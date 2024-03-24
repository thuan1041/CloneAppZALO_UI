import { Messages } from './src/components/messages/Messages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Contacts } from './src/components/contacts/Contacts';
import { Discovery } from './src/components/discovery/Discovery';
import { Timeline } from './src/components/timeline/Timeline';
import { Me } from './src/components/me/Me';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAddressBook, faClock, faCommentDots, faSnowflake, faUser } from '@fortawesome/free-regular-svg-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/components/login/Login';
import { Setting } from './src/components/settings/Setting';
import { AccountAndSecurity } from './src/components/accountAndSecurity/AccountAndSecurity';
import { Privacy } from './src/components/privacy/Privacy';
import { Notification } from './src/components/notification/Notification';
import { SettingMessage } from './src/components/setting_Messages/SettingMessage';
import { SettingCalling } from './src/components/setting_Calling/SettingCalling';
import { SettingTimeline } from './src/components/setting_Timeline/SettingTimeline';
import { SettingContact } from './src/components/settingContact/SettingContact';
import { SettingInfo } from './src/components/settingInfo/SettingInfo';
import { LoginPage } from './src/components/loginPage/LoginPage';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RegisterPageL } from './src/components/registerPageL/RegisterPageL';
import ChatMessage from './src/components/chatMessage/ChatMessage';
import ChatMessageOptions from './src/components/chatMessageOptions/ChatMessageOptions';
import QRCodeScanner from './src/components/qrCodeScanner/QRCodeScanner';



const Tab= createBottomTabNavigator();
const Stack= createNativeStackNavigator();

const MainScreen = () => {
  return(
    <Tab.Navigator 
        initialRouteName='Messages'
        screenOptions={({route}) => ({
          tabBarIcon: ({ color}) => {
            if (route.name === 'Messages') {
              return <FontAwesomeIcon icon={faCommentDots} size={22} color={color} />;
            } else if (route.name === 'Contacts') {
              return <FontAwesomeIcon icon={faAddressBook} size={22} color={color} />;
            } else if (route.name === 'Discovery') {
              return <FontAwesomeIcon icon={faSnowflake} size={22} color={color} />;
            } else if (route.name === 'Timeline') {
              return <FontAwesomeIcon icon={faClock} size={22} color={color} />;
            } else if (route.name === 'Me') {
              return <FontAwesomeIcon icon={faUser} size={22} color={color} />;
            } 
          },
          headerShown: false,
          tabBarStyle:{paddingBottom: 25, height: '10%'}
        })} 
        >
        <Tab.Screen name="Messages" component={Messages} options={{tabBarLabel: 'Tin nhắn', tabBarLabelStyle:{fontSize: 12}, tabBarBadge: '3'}}/>
        <Tab.Screen name="Contacts" component={Contacts} options={{tabBarLabel: 'Danh bạ', tabBarLabelStyle:{fontSize: 12}}}/>
        <Tab.Screen name="Discovery" component={Discovery} options={{tabBarLabel: 'Khám phá', tabBarLabelStyle:{fontSize: 12}}}/>
        <Tab.Screen name="Timeline" component={Timeline} options={{tabBarLabel: 'Nhật ký', tabBarLabelStyle:{fontSize: 12}}}/>
        <Tab.Screen name="Me" component={Me} options={{tabBarLabel: 'Cá nhân', tabBarLabelStyle:{fontSize: 12}}}/>
      </Tab.Navigator>
  )
}
 
const RootStack = () => {
  const [auth, setAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchData(); 
    console.log("MainScreen: Auth: ",auth); 
  }, [auth]);

  const fetchData = async () => {
    try {
      const access_token = await AsyncStorage.getItem('access_token');
      if (access_token == null) {
        setAuth(false);
        console.log('MainScreen: Access token:', false);
      } else {
        setAuth(true);
        console.log('MainScreen: Access token:', true);
      }
      setIsLoading(false);
    } catch (error) { 
      console.error('Error fetching data from AsyncStorage:', error);
    }
  };

  if (isLoading) {
    return null; // cho đến khi isLoading = false, sẽ render ra màn hình
  }

  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {auth ? (
        <>
          <Stack.Screen name='MainScreen' component={MainScreen}/> 
          <Stack.Screen name='LoginPage' component={LoginPage}/>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name='Setting' component={Setting}/>  
          <Stack.Screen name='AccountAndSecurity' component={AccountAndSecurity}/>
          <Stack.Screen name='Privacy' component={Privacy}/>
          <Stack.Screen name='Notification' component={Notification}/>
          <Stack.Screen name='SettingMessage' component={SettingMessage}/>
          <Stack.Screen name='SettingCalling' component={SettingCalling}/>
          <Stack.Screen name='SettingTimeline' component={SettingTimeline}/>
          <Stack.Screen name='SettingContact' component={SettingContact}/>
          <Stack.Screen name='SettingInfo' component={SettingInfo}/>
          <Stack.Screen name='RegisterPageL' component={RegisterPageL}/>
          <Stack.Screen name='ChatMessage' component={ChatMessage}/>
          <Stack.Screen name='ChatMessageOptions' component={ChatMessageOptions}/>
          <Stack.Screen name='QRCodeScanner' component={QRCodeScanner}/>
        </>
      ) : (
        <>
          {/* <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name='LoginPage' component={LoginPage}/>
          <Stack.Screen name='Setting' component={Setting}/>   */}
          <Stack.Screen name='MainScreen' component={MainScreen}/>  
          <Stack.Screen name='AccountAndSecurity' component={AccountAndSecurity}/>
          <Stack.Screen name='Privacy' component={Privacy}/>
          <Stack.Screen name='Notification' component={Notification}/>
          <Stack.Screen name='SettingMessage' component={SettingMessage}/>
          <Stack.Screen name='SettingCalling' component={SettingCalling}/>
          <Stack.Screen name='SettingTimeline' component={SettingTimeline}/>
          <Stack.Screen name='SettingContact' component={SettingContact}/>
          <Stack.Screen name='SettingInfo' component={SettingInfo}/>
          <Stack.Screen name='RegisterPageL' component={RegisterPageL}/>
          <Stack.Screen name='ChatMessage' component={ChatMessage}/>
          <Stack.Screen name='ChatMessageOptions' component={ChatMessageOptions}/>
          <Stack.Screen name='QRCodeScanner' component={QRCodeScanner}/>
        </>
      ) }
    </Stack.Navigator>
   
  )
}

const App = () => {
  return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
  );
}

export default App;
