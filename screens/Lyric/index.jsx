import React from "react";
import { Text, View, StyleSheet } from 'react-native';
const Lyric = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Lyric song</Text>
            <Text style={{ color: 'white', fontSize: 18, marginTop: 30, textAlign: 'justify'}}>
                Từ một phút tình cờ anh biết rằng mình mong nhớ
                Và từ một phút tình cờ anh thấy nhẹ nhàng bất ngờ
                Ta đã từng đi đến tận cùng thế giới tìm một ai đó
                Cho đến phút giây ta vô tình biết bằng ta tìm thấy nhau
                Chẳng cần quá vội vàng tìm kiếm nhiều điều xa xôi
                Vì tình yêu đến nhẹ nhàng như chính nụ cười em rồi
                Chẳng cần biết đường dài phía trước còn nhiều tăm tối
                Anh sẽ hát lên bao câu tình ca vì yêu em thế thôi
                Thật lòng anh muốn và rất muốn nhẹ nhàng giữ em cho riêng mình
                Để nỗi nhớ vu vơ sẽ không còn là cơn mơ
                Thật lòng anh muốn và luôn muốn là người nắm tay em suốt đời
                Vì đã trót yêu thương có ai nào muốn xa rời
                Vì đã trót yêu thương trái tim chẳng tiếc đôi lời
                Uhm uhm uhm uhm
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