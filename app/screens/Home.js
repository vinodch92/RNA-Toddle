import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Home;
