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
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function App() {
  const[long , setLong]=useState('');
  const[meter, setMeterr]=useState('');
  const[result , setResult]=useState('');

  function calc(){
    let result = (meter*meter*long)/11877;
    setResult(result);

  }
  return (
    <View style={styles.container}>
      <Text>Ló súly számítás feladat 0375</Text>



      <Text >Mellkas kerülete(cm)</Text>
          <TextInput  onChangeText={(res) => setMeterr(res)}></TextInput>

          <Text >Hossz(cm)</Text>
          <TextInput  onChangeText={(res) => setLong(res)}></TextInput>

          <TouchableHighlight onPress={calc} >
            <Text>Számít</Text>
          </TouchableHighlight>


          <Text>Eredmény</Text>
          <TextInput value={result} onChangeText={(res)=> setResult(res)}></TextInput>
      <StatusBar style="auto" />



<Text> Megyeri Márk Máté ,SZOFT II/N 2023.04.17</Text>

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
