import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { styles } from "../../styles/styles";
import CustomButton from "../../componentes/botoes/CustomButton";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";


export default function Login(props) {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");

  function handleLogin() {
    if (email === "" && senha === "") {
      Alert.alert("Preencha todos os campos");
      return;
    }

    if (email === "Andre" && senha === "629730als") {
      props.navigation.navigate("Cadastre seus Produtos");
    } else {
      Alert.alert("Email ou senha incorretos");
    }

    setEmail("");
    setSenha("");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Super Lista</Text>

      <View>
        <MaterialIcons name="shopping-cart" size={140} color="#A8A8A8" />
      </View>

      <View style={styles.containerFormLogin}>
        <View style={styles.containerFormLoginGroup}>
          <Text style={styles.containerFormLoginGroupLabel}>Email</Text>
          <View style={{ position: "relative" }}>
            <TextInput
              keyboardType="email-address"
              style={styles.containerFormLoginGroupInput}
              placeholder="Digite seu email"
              value={email}
              onChangeText={setEmail}
            />
            <MaterialIcons
              name="email"
              size={20}
              color="black"
              style={{ position: "absolute", top: 12, right: 10, padding: 10 }}
            />
          </View>
        </View>
        <View style={styles.containerFormLoginGroup}>
          <Text style={styles.containerFormLoginGroupLabel}>Senha</Text>

          <View style={{ position: "relative" }}>
            <TextInput
              style={styles.containerFormLoginGroupInput}
              placeholder="Digite sua senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={!senhaVisivel}
            />
            <TouchableOpacity
              onPress={() => setSenhaVisivel(!senhaVisivel)}
              style={{
                position: "absolute",
                top: 12,
                right: 10,
                padding: 10,
              }}
            >
              <MaterialIcons
                name={senhaVisivel ? "visibility" : "visibility-off"}
                size={20}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>

        <CustomButton
          title={"Entrar"}
          onPress={handleLogin}
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
          <TouchableOpacity onPress={() => props.navigation.navigate("Login Cadastro")}>
            <Text style={styles.registerLink}> Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
//fazer tela de cadastro
//fazer tela de esqueci minha senha
