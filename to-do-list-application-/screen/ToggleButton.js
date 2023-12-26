import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isOn ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isOn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
});

export default ToggleButton;