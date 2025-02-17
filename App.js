
import { StyleSheet, View,Button,TextInput,ImageBackground,Image } from 'react-native';
import { useState } from 'react';


 function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function mostrarDados(){
     if(!email || !senha){
      alert(`insira um email ou senha`)
      return
     }
     alert(`seu email: ${email}, sua Senha: ${senha}`)
  }
  return (
     <ImageBackground
     source={require('./assets/background.jpg')}
     resizeMode='cover'
     style={styles.background}
     >
    <View style={styles.container}>
    <Image source={require('./assets/logo.png')} style={styles.logo} />
      
      <TextInput style={styles.input}  placeholder='E-mail' onChangeText={(e)=> setEmail(e)}/>
      <TextInput style={styles.input}  placeholder='Senha'  onChangeText={(e)=> setSenha(e)} secureTextEntry={true}/>
      <View style={styles.btnContainer}>
        <Button title="LOGAR" onPress={mostrarDados} color="black"/>
      </View>
    </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 320,
    borderRadius: 5
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
    width: 250,
    margin: 10,
  },
  btnContainer: {
    width: 250,
    height: 60, 
    marginTop: 10, 
  },
   background: {
    flex: 1,  
    justifyContent: 'center', 
    alignItems: 'center',
  },
  logo: {
    width: 100, 
    height: 100,
    marginBottom: 5, 
  }
});

import React from "react";
import Rotes from "./rotas";
 function App() {
  return (
    <Rotes/>    
  );
}



export default App;
