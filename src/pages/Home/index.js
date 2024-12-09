import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Menu</Text>
            </View>

            <View style={styles.body}>
                <TouchableOpacity style={styles.button}>
                    <Image
                        source={require('../../assets/forum-icon.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.buttonText}>Fórum</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Image
                        source={require('../../assets/pegadas-icon.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.buttonText}>Pegada de Carbono</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Image
                        source={require('../../assets/metas-icon.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.buttonText}>Metas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Image
                        source={require('../../assets/info-icon.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.buttonText}>Infos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Perfil')}
                >
                    <Image
                        source={require('../../assets/conta-icon.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.buttonText}>Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        backgroundColor: '#A8CBE6',
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        marginBottom: 30,
    },
    icon: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
});
