/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  useColorScheme,
  StyleSheet,
} from 'react-native';

function App(){
  const isDarkmode = useColorScheme() === 'dark';
 const styles =  StyleSheet.create({
  whiteText : {
    color : '#FFF',
    textAlign: 'center',
  },
  blackText : {
    color : '#000',
    textAlign: 'center',
  },
 });


  return(
    <SafeAreaView>
      <View>
        <Text style={isDarkmode ? styles.whiteText : styles.blackText}>Hello World !</Text>
        <Image source={{
          uri: 'https://imageskincare.com/cdn/shop/files/PIc.png?v=1724942876&width=700',
        }}
        style={{width: 200, height: 200, margin: 90}} />
         <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginLeft:10,
        }}
        defaultValue="You can type in me"
      />
      </View>
    </SafeAreaView>
  );
}

export default App;
