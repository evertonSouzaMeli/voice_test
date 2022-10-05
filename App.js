import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title={"Speak"} onPress={() => { Speech.speak('Open up App.js to start working on your app!') } }/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
