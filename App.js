import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput placeholder="Digite um objetivo"></TextInput>
        <Button title="+Objetivo"></Button>
      </View>
      <View>
        <Text>Lista de Objetivos</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
  },
});
