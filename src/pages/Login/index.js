import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, SafeAreaView } from "react-native";
import { supabase } from "../../../supabaseClient";

export default function SignIn() {
  // Estados para armazenar dados do formulário
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Função para registrar o usuário
  const handleRegister = async () => {
    const { error } = await supabase
      .from("users")
      .insert([{ nome, data_nascimento: dataNascimento, email, senha }]);

    if (error) {
      Alert.alert("Erro ao registrar", error.message);
    } else {
      Alert.alert("Sucesso", "Cadastro concluído com sucesso!");
      // Limpar os campos após o cadastro
      setNome("");
      setDataNascimento("");
      setEmail("");
      setSenha("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.message}>Cadastre-se</Text>
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Nome completo:</Text>
        <TextInput
          placeholder="Insira aqui seu nome completo"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.title}>Data de nascimento:</Text>
        <TextInput
          placeholder="Insira aqui sua data de nascimento"
          style={styles.input}
          value={dataNascimento}
          onChangeText={setDataNascimento}
        />

        <Text style={styles.title}>Email:</Text>
        <TextInput
          placeholder="Insira aqui seu email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.title}>Senha:</Text>
        <TextInput
          placeholder="Insira aqui sua senha"
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
});
