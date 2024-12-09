import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from  '../pages/SignIn'
import Login from   '../pages/Login'
import Home from    '../pages/Home'
import Perfil from '../pages/Perfil'



const Stack = createNativeStackNavigator();


//rotas para as telas
export default function Routes(){
    return(
        <Stack.Navigator>
             <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
             />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
             />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
             />

             <Stack.Screen
             name="Home"
             component={Home}
             options={{headerShown: false}}
             />

             <Stack.Screen
             name="Perfil"
             component={Perfil}
             options={{headerShown: false}}
             />


        </Stack.Navigator>
    )
}