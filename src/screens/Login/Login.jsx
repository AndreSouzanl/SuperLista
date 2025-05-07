import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../../styles/styles";
import CustomButton from "../../componentes/botoes/CustomButton";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Super Lista</Text>

      {/* <Image style={styles.img} source={require("../../../assets/des_telas/logo.jpg")} /> */}

      <View style={styles.containerFormLogin}>
        <View style={styles.containerFormLoginGroup}>
          <Text style={styles.containerFormLoginGroupLabel}>Email</Text>
          <TextInput
            keyboardType="email-address"
            style={styles.containerFormLoginGroupInput}
            placeholder="Digite seu usuario"
          />
        </View>
        <View style={styles.containerFormLoginGroup}>
          <Text style={styles.containerFormLoginGroupLabel}>Senha</Text>
          <TextInput
            style={styles.containerFormLoginGroupInput}
            placeholder="Digite sua senha"
            secureTextEntry={true}
          />
        </View>

        <CustomButton
          title={"Entrar"}
          onPress={() => {}}
          backgroundColor="#007BFF"
          textColor="#FFFFFF"
        />
      </View>
      <View style={styles.secondaryActions}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.link}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <View style={styles.registerContainer}>
          <Text>Ainda não tem conta?</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.registerLink}> Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
