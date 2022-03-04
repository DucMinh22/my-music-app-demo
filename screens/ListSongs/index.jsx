import React from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

const ListSongs = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 24}} style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
                <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                    <Ionicons name="chevron-back-outline" size={20} color='white' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                    <Ionicons name="ellipsis-horizontal-sharp" size={20} color='white' />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 81, marginVertical: 60 }}>
                <Image source={require('../../assets/images/duc_logo.jpg')} style={{ width: 200, height: 200, borderRadius: 100 }} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, color: 'white', marginBottom: 8 }}>
                    Đôi lời
                </Text>
                <Text style={{ color: '#cbc7c7', fontSize: 14 }}>
                    Minh Đức
                </Text>
            </View>
            <View>
                <Slider
                    minimumValue={0}
                    maximumValue={1}
                    value={0.3}
                    minimumTrackTintColor="#3ab4ff"
                    // maximumTrackTintColor="#000000"
                />
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{color: 'white', fontSize: 14}}>0.17</Text>
                <Text style={{color: 'white', fontSize: 14}}>4.37</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center', marginTop: 30, paddingHorizontal: 55}}>
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="play-back" size={27} color='white' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="play-circle-outline" size={70} color='white' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="play-forward" size={27} color='white' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101d4a',
        paddingHorizontal: 24
    },
    headerSection: {

    }
})

export default ListSongs;