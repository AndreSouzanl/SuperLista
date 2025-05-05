import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,

} from "react-native";
import { styles } from "../../styles/styles";
import { useState } from "react";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Super Lista</Text>
      <Image
        source={require("../../../assets/des_telas/logo.jpg")}
        style={styles.img}
      />
      <View style={styles.containerInput}>
        <Text style={styles.label}>Usuario</Text>
        <TextInput style={styles.input} placeholder="Digite seu Usuario" />
        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input}  placeholder="Digite sua Senha" secureTextEntry={true} />

        <TouchableOpacity style={styles.botao} onPress={() => {}}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.botoesEstilos}>
        <TouchableOpacity style={styles.botoes} onPress={() => {}}>
          <Text style={[styles.botoesEstilos, styles.corFundo]}>
            Não tem conta? Clique Aqui
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botoes} onPress={() => {}}>
          <Text style={[styles.botoesEstilos, styles.corFundo]}>
            Esqueceu a Senha? Clique Aqui
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
