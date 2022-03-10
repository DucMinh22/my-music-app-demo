import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Stacks, Tabs } from './navigation';
import { TrackProvider } from './contexts/TrackContext';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <TrackProvider>
      <NavigationContainer>
        <Stacks/>
      </NavigationContainer>
    </TrackProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // navbarContainer: {
  //   position: 'absolute',
  //   bottom: 48,
  //   zIndex: 999,
  //   backgroundColor: 'green',
  //   flex: 1,
  //   flexDirection: 'row',
  //   left: 0,
  //   right: 0,
  //   height: 60
  // }
});
