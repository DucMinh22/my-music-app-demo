import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { Files } from "../../mock";
const Lyric = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Lyric song</Text>
            <Text style={{ color: 'white', fontSize: 18, marginTop: 30, textAlign: 'justify'}}>
                {Files[0].lyric}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101d4a',
        paddingTop: 40,
        paddingHorizontal: 24
    }
})

export default Lyric;