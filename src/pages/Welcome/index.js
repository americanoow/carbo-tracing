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
