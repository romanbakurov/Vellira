import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert } from 'react-native';
import { Check } from '@romanbakurov/virelia-icons';

import { Button, Checkbox } from '@romanbakurov/virelia-native';

export default function App() {
  const [loaded] = useFonts({
    'KantumruyPro-ExtraLight': require('./assets/fonts/KantumruyPro-ExtraLight.ttf'),
    'KantumruyPro-Regular': require('./assets/fonts/KantumruyPro-Regular.ttf'),
    'KantumruyPro-Medium': require('./assets/fonts/KantumruyPro-Medium.ttf'),
    'KantumruyPro-SemiBold': require('./assets/fonts/KantumruyPro-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Button
        variant='primary'
        size='md'
        onPress={() => Alert.alert('Virelia!')}
      >
        Click me
      </Button>
      <Checkbox>
        <Check />
      </Checkbox>
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
