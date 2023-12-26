import React, { Component, useState } from 'react';
import {Text,Image,View,SafeAreaView,TextInput,TouchableOpacity,ScrollView,StyleSheet,Button,} from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



export default function App() {
  const navigation = useNavigation();

  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ marginTop: 15, marginLeft: 35 }}>
          <Text style={styles.title1}>Let's Getting</Text>
          <Text style={styles.title2}>Thing</Text>
          <Text style={styles.title3}>Done</Text>

        </View>
        <View style={{ marginTop: -10, marginLeft: 20 }}>
          <Text style={styles.title4}>Task status</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={this.onPressButton}
            title="gotoTask"
            style={styles.taskStatus1}></TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={this.onPressButton}
            title="gotoDo"
            style={styles.taskStatus2}></TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={this.onPressButton}
            title="gotoProgress"
            style={styles.taskStatus3}></TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={this.onPressButton}
            title="gotoDone"
            style={styles.taskStatus4}></TouchableOpacity>
        </View>
        <View>
          <Text style={styles.taskText1}>Task</Text>
        </View>
        <View>
          <Text style={styles.taskText2}>To do</Text>
        </View>
        <View>
          <Text style={styles.taskText3}>Progress</Text>
        </View>
        <View>
          <Text style={styles.taskText4}>Done</Text>
        </View>
        
        <View style={{ marginTop: -90, marginLeft: 20 }}>
          <Text style={styles.title4}>Today's Task</Text>
        </View>

        <Card style={styles.card1}>
          <Text
            style={{
              top: 10.36,
              left: 10.03,
              fontFamily: 'inter',
              fontSize: 18,
              fontWeight: 600,
            }}>
            Mobile Class
          </Text>
          <Text style={{
              top: 15.53,
              left: 11.03,
          }}>
            Mobile Application Development
          </Text>
          <Text style={{
              top: 15.53,
              left: 11.03,
          }}>
            26 July - No class
          </Text>
          <Text style={{
              top: 15.53,
              left: 11.03,
          }}>
            Class Assign before 12.00
          </Text>
          <Text style={{
              top: 60.53,
              left: 11.03,
          }}>
            09.00 am - 11.50 am
          </Text>
        </Card>
        <Card style={styles.card2}>
          <Text
            style={{
              top: 10.36,
              left: 10.03,
              fontFamily: 'inter',
              fontSize: 18,
              fontWeight: 600,
            }}>
            Assignment
          </Text>
          <Text style={{
              top: 15.53,
              left: 11.03,
          }}>
            Behavioral Science
          </Text>
          <Text style={{
              top: 15.53,
              left: 11.03,
          }}>
            Submit before 11.59 pm
          </Text>
          <Text style={{
              top: 15.53,
              left: 11.03,
          }}>
            July 26,2023
          </Text>
          <Text style={{
              top: 77.53,
              left: 11.03,
          }}>
            08.00 pm
          </Text>
        </Card>
        <View style={{marginTop: 30, marginLeft: 20}}>
          <Text style={{fontFamily: 'inter', fontSize: 25, fontWeight: 700, color: '#000',}}>All Tasks</Text>
        </View>
        
        <View style={{ marginTop: -33, marginLeft: 270 }}>
          <Button
            color="#999191"
            onPress={this.onPressButton}
            title="See All"
            type="clear"
          />
        </View>

        <Card style={styles.card3}>
          <Text
            style={{
              color: '#FFF',
              top: 10.36,
              left: 10.03,
              fontFamily: 'inter',
              fontSize: 18,
              fontWeight: 600,
            }}>
            Mobile Class
          </Text>
          <Text style={{
              top: 15.53,
              left: 11.03,
              color: '#FFF',
          }}>
            Mobile Application Development
          </Text>
           <Text style={{
              top: 15.53,
              left: 11.03,
              color: '#FFF',
          }}>
            26 July - No class
          </Text>
           <Text style={{
              top: 15.53,
              left: 11.03,
              color: '#FFF',
          }}>
            Class Assign before 12.00
          </Text>
          <Text style={{
              top: -58.53,
              left: 220.03,
              color: '#FFF'
          }}>
            09.00 am
          </Text>
        </Card>
        <Card style={styles.card4}>
          <Text
            style={{
              color: '#FFF',
              top: 10.36,
              left: 10.03,
              fontFamily: 'inter',
              fontSize: 18,
              fontWeight: 600,
            }}>
            Assignment
          </Text>
          <Text style={{
              top: 15.53,
              left: 11.03,
              color: '#FFF',
          }}>
            Behavioral Science
          </Text>
          <Text style={{
              top: 15.53,
              left: 11.03,
              color: '#FFF',
          }}>
            Submit before 11.59 pm
          </Text>
          <Text style={{
              top: 15.53,
              left: 11.03,
              color: '#FFF',
          }}>
            July 26,2023
          </Text>
          <Text style={{
              top: -58.53,
              left: 220.03,
              color: '#FFF'
          }}>
            08.00 am
          </Text>
        </Card>     

      </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title1: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'left',
    fontFamily: 'inter',
    color: '#000',
  },
  title2: {
    fontSize: 35,
    fontWeight: '700',
    textAlign: 'left',
    fontFamily: 'inter',
    color: '#000',
  },
  title3: {
    fontSize: 35,
    left: 100,
    top: -42,
    fontWeight: '700',
    textAlign: 'left',
    fontFamily: 'inter',
    color: '#616DDA',
  },
  title4: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'left',
    fontFamily: 'inter',
    color: '#000',
  },
  logo: {
    borderRadius: 100,
    height: 40,
    width: 40,
    left: 300,
    top: -110,
    boxshadow: 10,
  },
  styleTextInput: {
    top: -10,
    left: 0,
    right: 10,
    padding: 10,
    borderRadius: 20,
    width: 321,
    height: 40,
    borderColor: 'black',
    backgroundColor: '#F8F3F3',
  },
  taskStatus1: {
    backgroundColor: '#D2D6FF',
    borderRadius: 10,
    height: 65,
    width: 65,
    left: 35,
    top: 20,
  },
  taskStatus2: {
    backgroundColor: '#FFD5DC',
    borderRadius: 10,
    height: 65,
    width: 65,
    left: 120,
    top: -45,
  },
  taskStatus3: {
    backgroundColor: '#FFE4B1',
    borderRadius: 10,
    height: 65,
    width: 65,
    left: 205,
    top: -110,
  },
  taskStatus4: {
    backgroundColor: '#D9FFCF',
    borderRadius: 10,
    height: 65,
    width: 65,
    left: 290,
    top: -175,
  },
  taskText1: {
    fontFamily: 'inter',
    fontSize: 13,
    fontWeight: 500,
    marginTop: -155,
    marginLeft: 55,
  },
  taskText2: {
    fontFamily: 'inter',
    fontSize: 13,
    fontWeight: 500,
    marginTop: -155,
    marginLeft: 136,
  },
  taskText3: {
    fontFamily: 'inter',
    fontSize: 13,
    fontWeight: 500,
    marginTop: -155,
    marginLeft: 210,
  },
  taskText4: {
    fontFamily: 'inter',
    fontSize: 13,
    fontWeight: 500,
    marginTop: -155,
    marginLeft: 308,
  },
  card1: {
    borderRadius: 15,
    backgroundColor: 'rgba(244, 244, 244, 0.58)',
    width: 183.484,
    height: 180.153,
    marginLeft: 6,
    marginTop: 11.85,
  },
  card2: {
    borderRadius: 15,
    backgroundColor: 'rgba(244, 244, 244, 0.58)',
    width: 183.484,
    height: 180.153,
    marginLeft: 200,
    marginTop: -180.85,
  },
  card3:{
    borderRadius: 15,
    backgroundColor: '#7F7CF1',
    width: 280,
    height: 100,
    marginLeft: 20,
    marginTop: 30,
  },
  card4:{
    borderRadius: 15,
    backgroundColor: '#7F7CF1',
    width: 280,
    height: 100,
    marginLeft: 20,
    marginTop: 20,
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },
  menuItem: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeMenuItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#34a2f2',
  },
});
