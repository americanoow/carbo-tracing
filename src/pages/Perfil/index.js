import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function EditProfile() {
    const  [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [loading, setLoading] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar Perfil</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Nova senha (opcional)"
                value={password}            
                secureTextEntry
            />

            <TextInput
                style={styles.input}
                placeholder="Data de nascimento (YYYY-MM-DD)"
                value={birthdate}
            />

            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Salvar Alterações
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
