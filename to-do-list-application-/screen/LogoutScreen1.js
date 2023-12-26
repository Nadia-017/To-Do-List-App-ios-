import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { firebase } from '../config/firebase';
import ToggleButton from './ToggleButton';

const Logout = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  const handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate('Main');
      })
      .catch((error) => {
        console.error('เกิดข้อผิดพลาดในการออกจากระบบ: ', error);
      });
  };

  return (
    <View style={{ padding: 0, marginTop: 0 }}>
    
        <View>
          <Text style={styles.h2}>Setting</Text>
          <Text style={styles.p}>Notification</Text>
        </View>
        <View>
          <ToggleButton />
        </View>

        <View>
          <Text style={styles.h3}>Help & Support</Text>
          <Text style={styles.p}>Support Inbox</Text>
          <Text style={styles.p}>Report a problem</Text>
        </View>    
       <View style={styles.container}>
      <TouchableOpacity onPress={handleSignout} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },

  button: {
    backgroundColor: '#7f7cf1',
    borderRadius: 10,
    height: 45,
    width: 280,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
  },
  
  h2:{
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'left',
    fontFamily: 'inter',
    marginLeft: 20,
    marginTop: 20,
    color: '#000',
  },

  h3:{
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'left',
    fontFamily: 'inter',
    marginLeft: 20,
    marginTop: 20,
    color: '#000',
  },

  p:{
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
    fontFamily: 'inter',
    marginLeft: 20,
    marginTop: 5,
    color: '#000',
  },
});

export default Logout;
