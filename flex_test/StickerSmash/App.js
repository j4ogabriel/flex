import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>as abelhas do cume picam,
            as flores do cume cheiram,
            a chuva no cume cai,
            as rosas do cume espetam
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
