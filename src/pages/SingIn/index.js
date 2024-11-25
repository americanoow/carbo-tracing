import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { supabase } from '../../../supabaseClient'; // Verifique se o caminho está correto

export default function SignIn({ navigation }) {
    // Estados para armazenar dados do formulário
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // Função para registrar o usuário
    const handleRegister = async () => {
        // Exibe um alerta com os dados antes de enviar para o Supabase
        Alert.alert("Dados do Registro", Nome: ${nome}\nData de Nascimento: ${dataNascimento}\nEmail: ${email}\nSenha: ${senha});

        // Insere os dados no Supabase
        const { data, error } = await supabase
            .from('users')
            .insert([{ nome, data_nascimento: dataNascimento, email, senha }]);

        // Verifica se ocorreu algum erro
        if (error) {
            Alert.alert('Erro ao registrar', error.message);
        } else {
            Alert.alert('Sucesso', 'Usuário registrado com sucesso');
            // Redireciona para a tela de login após o registro
            navigation.navigate('Login');
        }
    };

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" style={styles.containerHeader}>
                <Text style={styles.message}>Sign Up</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Nome completo:</Text>
                <TextInput
                    placeholder='Insira aqui seu nome completo'
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                />

                <Text style={styles.title}>Data de nascimento:</Text>
                <TextInput
                    placeholder='Insira aqui sua data de nascimento'
                    style={styles.input}
                    value={dataNascimento}
                    onChangeText={setDataNascimento}
                />

                <Text style={styles.title}>Email:</Text>
                <TextInput
                    placeholder='Insira aqui seu email'
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.title}>Senha:</Text>
                <TextInput
                    placeholder='Insira aqui sua senha'
                    style={styles.input}
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginText}>Já possui uma conta? Login</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#AEC7DD' },
    containerHeader: { marginTop: '14%', marginBottom: '8%', paddingLeft: '5%' },
    message: { fontSize: 28, fontWeight: 'bold', color: '#FFF', alignSelf: 'center' },
    containerForm: { backgroundColor: 'white', flex: 1, paddingLeft: '5%', paddingRight: '5%' },
    title: { fontSize: 20, marginTop: 28 },
    input: { borderBottomWidth: 1, height: 40, marginBottom: 12, fontSize: 16 },
    button: { backgroundColor: '#AEC7DD', width: '100%', borderRadius: 4, paddingVertical: 8, marginTop: 14, justifyContent: 'center', alignItems: 'center' },
    buttonText: { color: 'black', fontSize: 18, fontWeight: 'bold' },
    loginText: { color: '#a1a1a1', alignSelf: 'center', marginTop: 20 }
});