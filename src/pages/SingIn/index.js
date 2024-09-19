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