import React from 'react';
import { View, Text, TextInput, StyleSheet , TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Login() {

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" style={styles.containerHeader}>
                <Text style={styles.message}>Login</Text>
            </Animatable.View>


        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <TextInput
                    placeholder='Insira aqui seu e-mail'
                    style={styles.input}
                />

                <TextInput
                placeholder='Insira aqui sua senha'
                style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

        </Animatable.View>
        


        </View>
    );
}