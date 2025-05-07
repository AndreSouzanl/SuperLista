import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../../styles/styles";
import CustomButton from "../../componentes/botoes/CustomButton";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function Login() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [senha, setSenha] = useState("");
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
