import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Keyboard, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config/firebase';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const createtaskRef = firebase.firestore().collection('user');


  const navigation = useNavigation();

  const handleSignup =  () => {

    if (email && email.length > 0 && password && password.length > 0 && username && username.length > 0 && phoneNumber&& phoneNumber.length > 0  ) {
      const user = {
        email: email,
        password: password, 
        username: username,
        phone: phoneNumber      
      };

 createtaskRef
        .add(user)
        .then(() => {
          setEmail('');
          setPassword('');
          setUsername('');
          setPhoneNumber('');
          console.log('Insert Success')
          alert('Success')
          // release keyboard
          Keyboard.dismiss();
        })
        .catch((error) => {
          // show an alert in case of error
          alert(error);
        });
    }
  };



  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View>
        <Text style={styles.rt}>Register</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          keyboardType="phone-pad"
          onChangeText={(text) => setPhoneNumber(text)}
          style={styles.input}
        />
      </View>

  <TouchableOpacity onPress={() => { handleSignup(); navigation.navigate('Login'); }} style={styles.button}>
  <Text style={styles.buttonText}>Register</Text>
  </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 270,
    height: 50,
    padding: 15,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    marginBottom: 15,
    borderRadius: 15,
    color: '#403030',
  },
  inputContainer: {
    width: '80%',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#7f7cf1',
    borderRadius: 10,
    height: 45,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  rt: {
    fontSize: 25,
    marginBottom: 30,
    fontWeight: 'bold',
  }
});

export default Register;
