import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/Background.JPG')}
      style={styles.background}
    >
      {/* White rectangle */}
      <View style={styles.whiteRectangle}></View>

      <View style={styles.container}>

        <Image style={styles.logo} source={require('../assets/Logo_app.PNG')} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Needed for absolute positioning within
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#7f7cf1',
    borderRadius: 20,
    height: 60,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {
    width: 270,
    height: 150,
    marginBottom: 50,
    margin: -10,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  whiteRectangle: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 20,
    width: 300,
    height: 440,
    top: 200, 
    left: 50,
  },
});

export default MainScreen;
