import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {

  const [fruit, setFruit] = useState("Apelsin");

  const [animal, setAnimal] = useState("");

return (
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app! Hej hej hej</Text>
    <Text style={styles.fancytext}>Mera text</Text>
    
    <View style={{ width: 50, height: 50, backgroundColor: 'powderblue',}}>
      <Text>{ fruit }</Text>
    </View>

    <Button title="Klicka här" onPress={() => {
      setFruit("Banan");
    }} />

    <TextInput style={{ borderWidth: 1 }} onChangeText={setAnimal} value={animal} />

    <View style={styles.fakephone}>
      <View style={{ backgroundColor: "#0000ff", flex: 2 }}></View>
      <View style={{ backgroundColor: "#ff00ff", flex: 8, flexDirection: "row" }}>
        <View style={{ backgroundColor: "#ff0000", flex: 1 }}></View>
        <View style={{ backgroundColor: "#00ff00", flex: 1 }}>
          <Text>Hej</Text>
        </View>
      </View>
    </View>


    <StatusBar style="auto" />
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fancytext: {
    color: "#0000ff"
  },
  fakephone: {
    width: 300,
    height: 500,
    backgroundColor: "#cccccc"
  }
});
