import { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  Keyboard,
  FlatList
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/Ionicons';

import { firebase } from '../config/firebase';

const CreateTaskScreen = () => {
  const [name, setName] = useState('');
  const [isClicked, setClickStatus] = useState(false);
  const [choice, setChoice] = useState('');
  const [date, setDate] = useState('10-10-23');
  const [time, setTime] = useState('00:00');
  const [description, setDescription] = useState('');
  const [isCreateTaskSelected, setCreateTaskSelected] = useState(false);
  const [addData, setAddData] = useState('');
  const createtaskRef = firebase.firestore().collection('createtask');

  const addTodo = () => {
    // check if we have a todo.
    if (
      addData &&
      addData.length > 0 &&
      description &&
      description.length > 0 &&
      time &&
      time.length > 0 &&
      date &&
      date.length > 0
    ) {
      const data = {
        title: addData,
        description: description,
        date: date,
        time: time,
      };
      createtaskRef
        .add(data)
        .then(() => {
          setAddData('');
          setDescription('');
          setDate('10:10:23');
          setTime('00:00');
          console.log('Insert Success');
          alert('Success');
          // release keyboard
          Keyboard.dismiss();
        })
        .catch((error) => {
          // show an alert in case of error
          alert(error);
        });
    }
  };

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const tasksRef = firebase.firestore().collection('createtask');
    try {
      const snapshot = await tasksRef.get();
      const taskList = [];
      snapshot.forEach((doc) => {
        taskList.push({ id: doc.id, ...doc.data() });
      });
      setTasks(taskList);
    } catch (error) {
      console.error('Error fetching tasks: ', error);
    }
  };

  const deleteTask = async (taskId) => {
  const tasksRef = firebase.firestore().collection('createtask');
  try {
    await tasksRef.doc(taskId).delete();
    // Remove the deleted task from the state
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  } catch (error) {
    console.error('Error deleting task: ', error);
  }
};

  useEffect(() => {
    fetchTasks();
  }, []);


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ padding: 20, marginTop: -10}}>
        <Text
          style={{
            padding: 5,
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 25,
          }}>
          {' '}
          Title{' '}
        </Text>
        <TextInput
          style={styles.jk}
          placeholder="Add new todo"
          placeholderTextColor="#aaaaaa"
          onChangeText={(title) => setAddData(title)}
          value={addData}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <Text style={styles.Test2}> Description </Text>
        <TextInput
          style={styles.jk}
          placeholder="Describe your task"
          placeholderTextColor="#aaaaaa"
          onChangeText={(description) => setDescription(description)}
          value={description}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <View style={styles.inputContainer}>
          <Text style={styles.label}> Date </Text>
          <View style={styles.inputWithIcon}>
            <DatePicker
              style={styles.datePicker}
              date={date}
              mode="date"
              placeholder="Select date"
              format="DD-MM-YYYY"
              minDate="01-01-2020"
              maxDate="01-01-2030"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  display: 'none',
                },
                dateInput: {
                  borderRadius: 10,
                  marginLeft: 10,
                },
              }}
              onDateChange={(date) => {
                setDate(date);
              }}
            />
            <Icon
              name="calendar"
              size={22}
              color="#7f7cf1"
              style={styles.icon}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}> Time </Text>
          <View style={styles.inputWithIcon}>
            <DatePicker
              style={styles.timePicker}
              date={time}
              mode="time"
              placeholder="Select time"
              format="HH:mm"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  display: 'none',
                },
                dateInput: {
                  borderRadius: 10,
                  marginLeft: 10,
                },
              }}
              onDateChange={(time) => {
                setTime(time);
              }}
            />
            <Icon name="time" size={25} color="#7f7cf1" style={styles.icon} />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.textBt} onPress={addTodo}>
            <Text
              style={{
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}>
              Create Task
            </Text>
          </TouchableOpacity>

          <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text>Date: {item.date}</Text>
              <Text>Time: {item.time}</Text>
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Icon name="trash" size={24} color="red"/>
      </TouchableOpacity>
            </View>
          )}
        />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Test2: {
    padding: 5,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    borderRadius: 50,
  },
  
  jk: {
    padding: 10,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    borderRadius: 15,
    marginTop: 5,
    color: '#999999',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  timePicker: {
    width: 235,
    marginTop: 5,
    borderColor: '#DCDCDC',
    color: '#999999',
  },
  textBt: {
    textAlign: 'center',
    backgroundColor: '#7f7cf1',
    borderRadius: 10,
    height: 45,
    width: 280,
    padding: 10,
    marginTop: 40,
    marginBottom: 80,
  },
  inputContainer: {
    marginTop: 10,
  },
  label: {
    padding: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  datePicker: {
    width: 235,
    marginTop: 5,
    borderColor: '#DCDCDC',
    color: '#999999',
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  taskItem: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 10,
    width: 235,
  },
});

export default CreateTaskScreen;
