import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SingIn from '../pages/SingIn'
import Login from '../pages/Login'

//dudadrigues

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
             <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
             />

            <Stack.Screen
                name="SingIn"
                component={SingIn}
                options={{ headerShown: false }}
             />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
             />
        </Stack.Navigator>
    )
}