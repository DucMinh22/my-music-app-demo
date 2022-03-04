import { View, StyleSheet, Button, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import Ionicons from 'react-native-vector-icons/Ionicons';

const PlayButton = ({ onPress }) => {
    return (
        <LinearGradient colors={['#0d5caf', '#121f50']} style={styles.buttonStyle}>
            <TouchableOpacity onPress={onPress}>
                <View>
                    <Ionicons name={'arrow-forward'} size={25} color={'white'} />
                </View>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default PlayButton;

const styles = StyleSheet.create({
    buttonStyle: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginTop: 180
    }
})