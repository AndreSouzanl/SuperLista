import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/Login/Login";
import Cadastro from "../screens/Cadastro/Cadastro";
import Lista from "../screens/Lista/Lista";
import LoginCadastro from "../screens/LoginCadastro/LoginCadastro";

const Tab = createBottomTabNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Tela de Login" >
        <Tab.Screen  name="Tela de Login" component={Login} />
        <Tab.Screen name="Cadastre seus Produtos" component={Cadastro} />
        <Tab.Screen name="Lista de Compras do Mês" component={Lista} />
        <Tab.Screen name="Login Cadastro" component={LoginCadastro} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
