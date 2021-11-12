import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './Component/BottomTab';
import * as Font from 'expo-font'
import { Rajdhani_300Light, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    }
  }
  render() {
    return <BottomTabNavigator />
    // if (this.state.fontLoaded) {
      
    //   return (
    //     <View style={styles.container}>


    //     </View>

    //   );
    // } else {
      
    //   return null

    // }

  }
  loadfonts = async () => {
    // await Font.loadAsync({
    //   Rajdhani_300Light: 'Rajdhani_300Light'

    // })
    // this.setState({ fontLoaded: true })
  }
  componentDidMount() {
    this.loadfonts()

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
