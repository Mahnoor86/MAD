import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import react, {useState} from 'react'

export default function App() {
const [count, setCount] = useState (0);

const incrementButton =()=>{

  setCount(count+1);
};
const decrementButton =()=>{

  setCount(count-1);
};
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button title="Increment" onPress={incrementButton}/>
      <Button title="Decrement" onPress={decrementButton}/>
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
  text:{
    fontSize:24
  }
});
