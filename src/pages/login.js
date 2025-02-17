import { StyleSheet, View,Button,TextInput,ImageBackground,Image,TouchableOpacity,Text } from 'react-native';
import { useState } from 'react';


 function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function mostrarDados(){
     if(!email || !senha){
      alert(`insira um email ou senha`)
      return
     }
     alert(`seu email: ${email}, sua Senha: ${senha}`)
  }

  function irParaCadastro(){
     navigation.navigate('Cadastro')
  }
  return (
     <ImageBackground
     source={require('../../assets/background.jpg')}
     resizeMode='cover'
     style={styles.background}
     >
    <View style={styles.container}>
    <Image source={require('../../assets/logo.png')} style={styles.logo} />
      
      <TextInput style={styles.input}  placeholder='E-mail' onChangeText={(e)=> setEmail(e)}/>
      <TextInput style={styles.input}  placeholder='Senha'  onChangeText={(e)=> setSenha(e)} secureTextEntry={true}/>
      <View style={styles.btnContainer}>
        <Button title="LOGAR" onPress={mostrarDados} color="black"/>
      </View>
      <TouchableOpacity onPress={irParaCadastro}>
          <Text style={styles.link}>Cadastre-se</Text>
       </TouchableOpacity>
    </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 350,
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

export default Login;