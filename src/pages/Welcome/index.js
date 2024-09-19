import React from 'react';
import { 
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Text,
    TouchableOpacity
    } from 'react-native';

    import * as Animatable from 'react-native-animatable';

    import { useNavigation } from '@react-navigation/native';


export default function Welcome() {

    const navigation = useNavigation();

  return (
    <ImageBackground 
      source={require('../../assets/background.png')}
      style={styles.background}
      resizeMode='cover'
    >
      <View style={styles.container}>
        
      </View>

      <View style={styles.header}>
        <Animatable.View animation="fadeInUp">
        <Text style={styles.nomeAppText}>Carbo</Text>
        <Text style={styles.nomeAppText2}>Tracing</Text>
        </Animatable.View>

        <Animatable.Image
          animation="flipInY"
          source={require("../../assets/logo.png")}
          style={styles.logo}
          resizeMode='contain'
        
        />
        

        <Animatable.View animation="fadeInUp">
        <Text style={styles.textoMotivador}>Venha mudar seus</Text>
        <Text style={styles.textoMotivador}>hábitos conosco!</Text>
        </Animatable.View>


        
        <TouchableOpacity 
        style={styles.signUp}
        onPress={ () => navigation.navigate('SingIn')}
        >
          <Text style={styles.signUpText}>SIGN UP</Text>
        </TouchableOpacity>
        


        
        
        

        <Animatable.View animation="fadeInUp">
        <TouchableOpacity 
        style={styles.cliqueAqui}
        onPress={ () => navigation.navigate('Login')}  
      >
        <Text style={styles.buttonText}>Se você já tem uma conta</Text>
          <Text style={styles.buttonText2}>CLIQUE AQUI</Text>
        </TouchableOpacity>
        </Animatable.View>
      </View>
    </ImageBackground>

  );
}
const styles = StyleSheet.create({ background: { flex: 1, }, container: { flex: 1, }, header: { position: 'absolute', top: 50, width: '100%', alignItems: 'center', }, nomeAppText: { fontSize: 48, fontWeight: 'bold', color: '#000000', alignItems: 'center', }, nomeAppText: { fontSize: 48, fontWeight: 'bold', color: '#000000', alignItems: 'center', }, logo: { width: 200, height: 200, marginTop: 10, margin: 40, justifyContent: 'space-around', }, textoMotivador: { fontSize: 30, }, signUp: { position:'absolut', backgroundColor: '#D9D9D9', padding: 8, width: '60%', height: '10%', alignItems: 'center', justifyContent: 'center', bottom: '-10%', }, signUpText: { fontSize: 25, fontWeight: 'bold', }, anteButton: { bottom: '-33%', fontSize: 24, }, buttonText: { fontSize: 20, bottom: '-350%', fontWeight: 'bold', textAlign: 'center', }, buttonText2: { fontSize: 20, bottom: '-370%', fontWeight: 'bold', textAlign: 'center', }, });
