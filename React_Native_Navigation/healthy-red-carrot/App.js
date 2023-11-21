import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { PaperProvider  } from 'react-native-paper';
import Demo from './components/demo';
import {StatusBar} from 'expo-status-bar'


export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Demo/>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
  },
  
});
