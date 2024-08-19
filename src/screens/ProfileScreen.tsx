import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Profile Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#333', justifyContent: 'center', alignItems: 'center' },
  text: { color: '#fff', fontSize: 24 },
});

export default ProfileScreen;
