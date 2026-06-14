import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@romanbakurov/flux-ui-native';
import { Checkbox } from '@romanbakurov/flux-ui-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button variant='primary' size='md' onPress={() => alert('Flux UI!')}>
        Click me
      </Button>
      <Checkbox></Checkbox>
      <StatusBar style='auto' />
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
