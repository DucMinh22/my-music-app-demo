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
            {/* <Image
                source={{
                    uri: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'
                }}
                style={{
                    width: 300,
                    height: 300,
                    // borderRadius: 100
                    resizeMode: 'contain'
                }}
                accessible={true}
            /> */}
            <Text
                style={{
                    color: 'white',
                    marginTop: 30,
                    fontWeight: 'bold'
                }}>
                Welcome to my music app
            </Text>
            <PlayButton
                onPress={() => { navigation.navigate('TrackSound') }}
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