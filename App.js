/*
* File: App.js
* Author: Megyeri Márk Máté
* Copyright: 2023,  Megyeri Márk Máté
* Group: Szoft II/N
* Date: 2023-04-017
* Github: https://github.com/megyerimark/
* Licenc: GNU GPL
*/




import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[long , setLong]=useState('');
  const[meter, setPerimeter]=useState('');
  const[result , setResult]=useState('');

  function calc(){
    let result = (meter*meter*long)/11877;
    setResult(result);
    
  }
  return (
    <View style={styles.container}>
      <Text>Ló súly számítás feladat 0375</Text>
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
