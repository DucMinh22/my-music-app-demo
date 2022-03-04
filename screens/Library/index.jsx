import { View, Text, StyleSheet } from "react-native"
import { Tabs } from "../../navigation"

const Library = () => {
    return (
        <View style={styles.container}>
            <Tabs/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  });

export default Library;