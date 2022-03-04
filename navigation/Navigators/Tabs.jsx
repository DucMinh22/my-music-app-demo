import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ListSongs, Lyric } from "../../screens";

const Tab = createBottomTabNavigator();

const Tabs = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'ListSongs') {
                    iconName = focused
                        ? 'musical-notes-sharp'
                        : 'musical-notes-sharp';
                } else if (route.name === 'Lyric') {
                    iconName = focused ? 'ios-disc' : 'ios-disc';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#0d5caf',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { backgroundColor: '#ebebeb' }
        })}>
        <Tab.Screen
            name="ListSongs"
            component={ListSongs}
            options={{
                headerShown: false
            }} 
            />
        <Tab.Screen
            name="Lyric"
            component={Lyric}
            options={{
                headerShown: false
            }}
         />
    </Tab.Navigator>
)

export default Tabs;