import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function SingIn() {
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
                />

                <Text style={styles.title}>Data de nascimento:</Text>
                <TextInput
                    placeholder='Insira aqui sua data de nascimento'
                    style={styles.input}
                />

                <Text style={styles.title}>Email:</Text>
                <TextInput
                    placeholder='Insira aqui seu email'
                    style={styles.input}
                />

                <Text style={styles.title}>Senha:</Text>
                <TextInput
                    placeholder='Insira aqui sua senha'
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={ () => navigation.navigate('Login')}
                >
                    <Text style={styles.loginText}>Já possui uma conta? Login</Text>
                    
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#AEC7DD', }, message: { alignSelf: 'center', }, containerHeader: { marginTop: '14%', marginBottom: '8%', paddingLeft: '5%', }, message: { fontSize: 28, fontWeight: 'bold', color: '#FFF', }, containerForm: { backgroundColor: 'white', flex: 1, paddingLeft: '5%', paddingRight: '5%', }, title: { fontSize: 20, marginTop: 28, }, input: { borderBottomWidth: 1, height: 40, marginBottom: 12, fontSize: 16, }, button: { backgroundColor: '#AEC7DD', width: '100%', borderRadius: 4, paddingVertical: 8, marginTop: 14, justifyContent: 'center', alignItems: 'center', }, buttonText: { color: 'black', fontSize: 18, fontWeight: 'bold', }, buttonRegister: { marginTop: 14, alignSelf: 'center', }, loginText: { color: '#a1a1a1', alignSelf: 'center' } });
