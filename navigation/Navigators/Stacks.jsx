import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Library, TrackSound } from "../../screens";

const Stack = createNativeStackNavigator();
const Stacks = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home} 
                options={{
                    headerShown: false
                }} 
            />
            <Stack.Screen
                name="Library"
                component={Library} 
                options={{
                    headerShown: false
                }} 
            />
             <Stack.Screen
                name="TrackSound"
                component={TrackSound} 
                options={{
                    headerShown: false
                }} 
            />
        </Stack.Navigator>
    )
}

export default Stacks;