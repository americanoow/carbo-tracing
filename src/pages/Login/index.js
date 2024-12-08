import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { supabase } from "../../../supabaseClient";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      // Autentica o usuário usando o Supabase Auth
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: senha,
      });

      if (error) {
        if (error.message === "Email not confirmed") {
          Alert.alert(
            "Erro",
            "Você precisa confirmar o e-mail antes de fazer login. Verifique sua caixa de entrada."
          );
        } else {
          Alert.alert("Erro", error.message);
        }
        return;
      }

      if (data.session) {
        Alert.alert("Sucesso", "Login realizado com sucesso!");
        // Redireciona para a próxima tela
        navigation.navigate("Home");
      }
    } catch (err) {
      Alert.alert("Erro inesperado", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.message}>Login</Text>
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Email:</Text>
        <TextInput
          placeholder="Insira seu email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.title}>Senha:</Text>
        <TextInput
          placeholder="Insira sua senha"
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.registerText}>Não tem uma conta? Registre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#AEC7DD" },
  containerHeader: { marginTop: "14%", marginBottom: "8%", paddingLeft: "5%" },
  message: { fontSize: 28, fontWeight: "bold", color: "#FFF", alignSelf: "center" },
  containerForm: { backgroundColor: "white", flex: 1, paddingLeft: "5%", paddingRight: "5%" },
  title: { fontSize: 20, marginTop: 28 },
  input: { borderBottomWidth: 1, height: 40, marginBottom: 12, fontSize: 16 },
  button: {
    backgroundColor: "#AEC7DD",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { color: "black", fontSize: 18, fontWeight: "bold" },
  registerText: { color: "#a1a1a1", alignSelf: "center", marginTop: 20 },
});
