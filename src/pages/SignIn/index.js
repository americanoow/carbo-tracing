import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { createClient } from '@supabase/supabase-js';

// Configuração do Supabase
const supabaseUrl = 'https://xxcchwyqbdnvafcosjnf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4Y2Nod3lxYmRudmFmY29zam5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxNTk4NjksImV4cCI6MjA0NTczNTg2OX0.6dUMT4LcHwvu-OrwKyGQY7ZsoP__hRshKlkIErdbVLQ';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function SignIn({ navigation }) {
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // Função para formatar a data de nascimento
    const formatDataNascimento = (text) => {
        const cleaned = text.replace(/\D+/g, '');
        const formatted = cleaned
            .replace(/^(\d{2})(\d)/, '$1/$2')
            .replace(/\/(\d{2})(\d)/, '/$1/$2');
        setDataNascimento(formatted);
    };

    // Registro por e-mail
    const handleRegister = async () => {
        try {
            const { data, error } = await supabase.auth.signUp(
                {
                    email,
                    password: senha,
                }
               
            );

            if (error) {
                Alert.alert('Erro ao registrar', error.message);
                return;
            }

            if (data.user) {
                Alert.alert(
                    'Sucesso',
                    'Usuário registrado com sucesso! Um e-mail de confirmação foi enviado para o endereço registrado.'
                );
            }

            // Após registro, adicionar informações ao perfil
            const userId = data.user.id;
            const { error: profileError } = await supabase
                .from('profiles')
                .insert([{ id: userId, nome, data_nascimento: dataNascimento }]);

            if (profileError) {
                Alert.alert('Erro ao salvar perfil', profileError.message);
                return;
            }

            // Redirecionar para a tela de login
            navigation.navigate('Login');
        } catch (err) {
            Alert.alert('Erro', 'Falha no registro');
            console.error(err);
        }
    };

    // Registro/Login com Google
    const handleGoogleSignIn = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: 'http://localhost:3000',
                },
            });

            if (error) {
                Alert.alert('Erro', error.message);
                return;
            }

            Alert.alert('Sucesso', 'Login com Google iniciado. Verifique seu navegador.');
        } catch (err) {
            Alert.alert('Erro', 'Falha ao iniciar login com Google');
            console.error(err);
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
                    placeholder="Insira aqui seu nome completo"
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                />

                <Text style={styles.title}>Data de nascimento:</Text>
                <TextInput
                    placeholder="dd/mm/yyyy"
                    style={styles.input}
                    value={dataNascimento}
                    onChangeText={formatDataNascimento}
                    keyboardType="numeric"
                    maxLength={10}
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

                <TouchableOpacity style={styles.buttonGoogle} onPress={handleGoogleSignIn}>
                    <Text style={styles.buttonText}>Registrar com Google</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginText}>Já possui uma conta? Login</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

// Estilização
const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#AEC7DD' 
    },
    containerHeader: { 
        marginTop: '14%', 
        marginBottom: '8%', 
        paddingLeft: '5%' 
    },
    message: { 
        fontSize: 28, 
        fontWeight: 'bold', 
        color: '#FFF', 
        alignSelf: 'center' 
    },
    containerForm: { 
        backgroundColor: 'white', 
        flex: 1, 
        paddingLeft: '5%', 
        paddingRight: '5%' 
    },
    title: { 
        fontSize: 20, 
        marginTop: 28 
    },
    input: { 
        borderBottomWidth: 1, 
        height: 40, 
        marginBottom: 12, 
        fontSize: 16 
    },
    button: { 
        backgroundColor: '#AEC7DD', 
        width: '100%', 
        borderRadius: 4, 
        paddingVertical: 8, 
        marginTop: 14, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    buttonGoogle: { 
        backgroundColor: '#EA4335', 
        width: '100%', 
        borderRadius: 4, 
        paddingVertical: 8, 
        marginTop: 14, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    buttonText: { 
        color: 'black', 
        fontSize: 18, 
        fontWeight: 'bold' 
    },
    loginText: { 
        color: '#a1a1a1', 
        alignSelf: 'center', 
        marginTop: 20 
    },
});
