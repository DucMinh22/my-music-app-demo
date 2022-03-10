import React, { useState, useRef, useContext, useEffect } from 'react';
import {
    Image, View, StyleSheet, TouchableOpacity, Text, ActivityIndicator,
} from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { Files } from '../../mock';
import { TrackContext } from '../../contexts/TrackContext';

const ListSongs = ({ navigation }) => {
    const {currentSong} = useContext(TrackContext);
    const [Loaded, SetLoaded] = useState(false);
    const [Loading, SetLoading] = useState(false);
    const [Playing, SetPlaying] = useState(false);  
    const [Duration, SetDuration] = useState(false);
    const CurrentIndex = useRef(0);
    const [Value, SetValue] = useState(0);
    const sound = useRef(new Audio.Sound());

    console.log(currentSong);



    const UpdateStatus = async (data) => {
        try {
            if (data.didJustFinish) {
                HandleNext(CurrentIndex + 1);
            } else if (data.positionMillis) {
                if (data.durationMillis) {
                    SetValue((data.positionMillis / data.durationMillis) * 100);
                }
            }
        } catch (error) {
            console.log('Error');
        }
    };

    const LoadAudio = async (index) => {
        SetLoading(true);
        const checkLoading = await sound.current.getStatusAsync();
        if (checkLoading.isLoaded === false) {
            try {
                const result = await sound.current.loadAsync(
                    Files[index].file,
                    {},
                    true
                );
                if (result.isLoaded === false) {
                    SetLoading(false);
                    SetLoaded(false);
                } else {
                    sound.current.setOnPlaybackStatusUpdate(UpdateStatus);
                    SetLoading(false);
                    SetLoaded(true);
                    SetDuration(result.durationMillis);
                    PlayAudio();
                }
            } catch (error) {
                SetLoading(false);
                SetLoaded(false);
            }
        } else {
            SetLoading(false);
            SetLoaded(true);
        }
    };

    const PlayAudio = async () => {
        try {
            const result = await sound.current.getStatusAsync();
            if (result.isLoaded) {
                if (result.isPlaying === false) {
                    sound.current.playAsync();
                    SetPlaying(true);
                }
            }
        } catch (error) {
            SetPlaying(false);
        }
    };

    const PauseAudio = async () => {
        try {
            const result = await sound.current.getStatusAsync();
            if (result.isLoaded) {
                if (result.isPlaying === true) {
                    sound.current.pauseAsync();
                    SetPlaying(false);
                }
            }
        } catch (error) {
            SetPlaying(true);
        }0
    };

    const HandleNext = async () => {
        if (CurrentIndex.current + 1 < Files.length) {
            await sound.current.unloadAsync();
            LoadAudio(CurrentIndex.current + 1);
            CurrentIndex.current += 1;
        }
    };

    const HandlePrev = async () => {
        if (CurrentIndex.current - 1 >= 0) {
            await sound.current.unloadAsync();
            LoadAudio(CurrentIndex.current - 1);
            CurrentIndex.current -= 1;
        }
    };

    useEffect(() => {
        CurrentIndex.current = currentSong
    },[currentSong])
    
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
                <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                    <Ionicons name="chevron-back-outline" size={20} color='white' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                    <Ionicons name="ellipsis-horizontal-sharp" size={20} color='white' />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 81, marginVertical: 60 }}>
                <Image source={Files[CurrentIndex.current].image} style={{ width: 200, height: 200, borderRadius: 100 }} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, color: 'white', marginBottom: 8 }}>
                    {Files[CurrentIndex.current].title}
                </Text>
                <Text style={{ color: '#cbc7c7', fontSize: 14 }}>
                    {Files[CurrentIndex.current].singer}
                </Text>
            </View>
            {/* <View>
                <Slider
                    minimumValue={0}
                    maximumValue={1}
                    value={0.3}
                    minimumTrackTintColor="#3ab4ff"
                // maximumTrackTintColor="#000000"
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontSize: 14 }}>0.17</Text>
                <Text style={{ color: 'white', fontSize: 14 }}>4.37</Text>
            </View> */}
            <View style={{ marginTop: 90 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        width: '100%',
                        alignItems: 'center',
                    }}>
                    <MaterialIcons
                        name="skip-previous"
                        size={40}
                        color="white"
                        onPress={() => HandlePrev()}
                    />

                    {Loading ? (
                        <ActivityIndicator size={'large'} color={'white'} />
                    ) : Loaded === false ? (
                        <Ionicons
                            name="md-reload-sharp"
                            size={30}
                            color="white"
                            onPress={() => LoadAudio(CurrentIndex.current)}
                        />
                    ) : Playing ? (
                        <Entypo
                            name="controller-paus"
                            size={40}
                            color="white"
                            onPress={() => PauseAudio()}
                        />
                    ) : (
                        <Entypo
                            name="controller-play"
                            size={40}
                            color="white"
                            onPress={() => PlayAudio()}
                        />
                    )}
                    <MaterialIcons
                        name="skip-next"
                        size={40}
                        color="white"
                        onPress={() => HandleNext()}
                    />
                </View>
                <Text style={{ color: 'white', marginTop: 40, textAlign: 'center' }}>
                    {Loading
                        ? 'Loading Audio Please Wait...'
                        : Playing === false
                            ? 'Not Playing'
                            : 'Playing....'}
                </Text>
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