import React from 'react';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

const  TodayTaskScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
          <Text style={styles.title}>Today's Task</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    top: 40,
  },
});





export default TodayTaskScreen;
