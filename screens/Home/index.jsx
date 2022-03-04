import { Text, View, StyleSheet, StatusBar, Image } from "react-native"
import { PlayButton } from "../../components";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Image
                source={require('../../assets/images/duc_logo.jpg')}
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100
                }}
            />
            <Text
                style={{
                    color: 'white',
                    marginTop: 30,
                    fontWeight: 'bold'
                }}>
                Welcome to my music app
            </Text>
            <PlayButton
                onPress={() => { navigation.navigate('TrackSound')}}
                style={{ marginTop: 202 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101d4a',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;