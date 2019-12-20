import React from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
// import Home from './src/Home'
import * as Font from 'expo-font';
import Router from './src/Router'
import {Provider} from 'react-redux'
import store from './src/store/index'

class App extends React.Component<{},{}> {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      // Ionicons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  // componentDidMount() {
  //   Font.loadAsync({
  //     Roboto: require("native-base/Fonts/Roboto.ttf"),
  //     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),

  //   });
  // }
  render(){
    if (this.state.loading) {
      return <ActivityIndicator />;
    }
    return (
      <Provider store={store}>
        <Router />
      </Provider>
      
    );
  }
  
}

export default App
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
