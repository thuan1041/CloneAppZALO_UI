import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { styles } from './style'
import { socket } from '../../config/io';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Hướng camera về phía mã QR');
  const [isConnected, setIsConnected] = useState(false);
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Yêu cầu quyền sử dụng máy ảnh
  useEffect(() => {
    socket.then((socket) => {
      socket.emit('setup');
      socket.on('connected', () => {
        console.log('Socket connected');
        setIsConnected(true);
      })
    })
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    socket.then((socket) => {
      socket.emit('join-qr-room', data);
      socket.on('joined', room => {
        console.log('Joined room:', room);
        socket.emit('scan-success', {
          phoneNumber: '0935201508',
          id: 1,
          avatar: 'https://i.pinimg.com/236x/76/18/38/761838420398ec0b0b412b46b71f2ab2.jpg',
          room: room
        })
      });
    })
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && <Button title={'Quét lại?'} onPress={() => setScanned(false)} color='tomato' />}
    </View>
  );
}
