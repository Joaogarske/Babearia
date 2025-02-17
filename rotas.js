import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/pages/login";
import Cadastro from "./src/pages/cadastro";

const stack = createStackNavigator()

function Rotes(){
    return(
        <NavigationContainer>
            <stack.Navigator initialRouteName="Login">
                <stack.Screen name="Login" component={Login}/>
                <stack.Screen name="Cadastro" component={Cadastro}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default Rotes;