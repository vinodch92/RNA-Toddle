import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const AddEditToDo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>AddEditToDo Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default AddEditToDo;
