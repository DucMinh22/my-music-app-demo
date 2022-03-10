import { Image, View, StyleSheet, TouchableOpacity, TextInput, Text, FlatList } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { favoriteSongs, songs } from '../../mock';

const TrackSound = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ marginTop: 24, fontSize: 28, fontWeight: 'bold', color: '#3ab4ff' }}>Library</Text>
            <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                multiline
                placeholder="Song or artist"
                // keyboardType='numeric'
                placeholderTextColor={'#dedfe5'}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                <Text style={{ fontSize: 20, color: 'white' }}>Album</Text>
                <Ionicons name="chevron-forward" color={'#3ab4ff'} size={15} style={{ paddingRight: 15 }} />
            </View>
            <View>
                <FlatList
                    data={songs}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    // numColumns={2}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            key={index}
                        //   onPress={() => this._onPress(item)}
                        >
                            <View style={{ alignItems: 'center', marginRight: 20, marginTop: 20 }}>
                                <Image source={item.url} style={{ width: 180, height: 180, borderRadius: 30 }} />
                                <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 10 }}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                <Text style={{ fontSize: 20, color: 'white' }}>Favorite</Text>
                <Ionicons name="chevron-forward" color={'#3ab4ff'} size={15} style={{ paddingRight: 15 }} />
            </View>
            <View>
                <FlatList
                    data={favoriteSongs}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => { navigation.navigate('Library') }}
                        >
                            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                                <LinearGradient colors={['#0d5caf', '#121f50']} style={styles.buttonStyle}>
                                    <View>
                                        <Ionicons name="musical-notes" color={'#3ab4ff'} size={20} />
                                    </View>
                                </LinearGradient>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.name}</Text>
                                    <Text style={{ color: '#dedfe5', marginTop: 5 }}>{item.artist}</Text>
                                </View>
                                <View style={{ paddingRight: 15 }}>
                                    <Ionicons name="heart-outline" color={'#3ab4ff'} size={20} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101d4a',
        paddingLeft: 16
    },
    input: {
        // height: 40,
        margin: 12,
        padding: 10,
        paddingTop: 10,
        paddingLeft: 20,
        borderRadius: 30,
        height: 40,
        backgroundColor: '#8d9fe7ba',
        color: '#dedfe5',
        marginTop: 25
    },
    buttonStyle: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginRight: 20,
    }
})

export default TrackSound;