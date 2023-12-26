import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config/firebase';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      if (email && email.length > 0 && password && password.length > 0) {
        
        const userRef = firebase.firestore().collection('user');
        const querySnapshot = await userRef.where('email', '==', email).get();

        if (!querySnapshot.empty) {
          
          const userDoc = querySnapshot.docs[0];
          const userData = userDoc.data();

          if (userData.password === password) {
            console.log('Logged in successfully.');
            navigation.navigate('Home'); 
          } else {
            Alert.alert('Error', 'Login failed. Please check your email and password.');
          }
        } else {
          Alert.alert('Error', 'User not found.');
        }
      } else {
        Alert.alert('Error', 'Please enter both email and password.');
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
      Alert.alert('Error', 'Login failed. Please check your email and password.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View>
        <Text style={styles.rt}>Login</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ padding: 5, fontSize: 12, fontWeight: 'bold', marginTop: 140, color: '#999999' }}>
        Don't have an account?
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{ color: '#34a2f2', fontWeight: 'bold', fontSize: 13, marginTop: 5 }}>Create a new account</Text>
      </TouchableOpacity>
      <Text style={{backgroundColor:'#9f93ff'}}>
      </Text>
    </ScrollView>

  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
    height: 45,
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
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
  },
  rt: {
    fontSize: 25,
    marginBottom: 30,
    fontWeight: 'bold',
  },
});
