import React from "react";
import { StyleSheet, View,Button,TextInput,ImageBackground,Image,TouchableOpacity,Text } from 'react-native';
import { useState } from "react";
import { verificacaoCadastro } from "../funcoes/funcaoVerificacaoCadastro";
function Cadastro(){

   const [nome,setNome] = useState('')
   const [email, setEmail] = useState('')
   const [senha,setSenha] = useState('')
   const [confirmarSenha, setConfirmarSenha] = useState('');


   function confirmaDados(){
    if (!nome || !email || !senha || !confirmarSenha) {
        alert("Preencha todos os campos!");
        return;
      }
      if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
      }
  
      verificacaoCadastro(nome, email, senha);
  
      
      setNome('');
      setEmail('');
      setSenha('');
      setConfirmarSenha('');
   }


    return(
        <>
             <ImageBackground
                 source={require('../../assets/background.jpg')}
                 resizeMode='cover'
                 style={styles.background}
                 >
                <View style={styles.container}>
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
                  
                  <TextInput style={styles.input}  placeholder='Nome' onChangeText={(e)=> setNome(e)}/>
                  <TextInput style={styles.input}  placeholder='E-mail' onChangeText={(e)=> setEmail(e)}/>
                  <TextInput style={styles.input}  placeholder='Senha'  onChangeText={(e)=> setSenha(e)} secureTextEntry={true}/>
                  <TextInput style={styles.input}  placeholder='Confirme Senha'  onChangeText={(e)=> setConfirmarSenha(e)} secureTextEntry={true}/>
                  <View style={styles.btnContainer}>
                    <Button title="cadastrar" onPress={confirmaDados} color="black"/>
                  </View>
                </View>
                </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 450,
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
  },
  link: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  }
});
export default Cadastro;