import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Messages } from './src/components/messages/Messages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Contacts } from './src/components/contacts/Contacts';
import { SafeAreaFrameContext, SafeAreaInsetsContext, SafeAreaProvider } from 'react-native-safe-area-context';
import { Discovery } from './src/components/discovery/Discovery';
import { Timeline } from './src/components/timeline/Timeline';
import { Me } from './src/components/me/Me';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAddressBook, faClock, faCommentDots, faSnowflake, faUser } from '@fortawesome/free-regular-svg-icons';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/components/login/Login';
import { Setting } from './src/components/settings/Setting';
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
        {/* <Tab.Screen name="Messages" component={ChatListItem} options={{tabBarLabel: 'Tin nhắn', tabBarLabelStyle:{fontSize: 12}, tabBarBadge: '3'}}/> */}
        <Tab.Screen name="Contacts" component={Contacts} options={{tabBarLabel: 'Danh bạ', tabBarLabelStyle:{fontSize: 12}}}/>
        <Tab.Screen name="Discovery" component={Discovery} options={{tabBarLabel: 'Khám phá', tabBarLabelStyle:{fontSize: 12}}}/>
        <Tab.Screen name="Timeline" component={Timeline} options={{tabBarLabel: 'Nhật ký', tabBarLabelStyle:{fontSize: 12}}}/>
        <Tab.Screen name="Me" component={Me} options={{tabBarLabel: 'Cá nhân', tabBarLabelStyle:{fontSize: 12}}}/>
      </Tab.Navigator>
  )
}

const RootStack = () => {
  return(
    <Stack.Navigator initialRouteName='MainScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name='Setting' component={Setting}/> 
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
