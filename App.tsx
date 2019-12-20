import React from 'react';
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import Router from './src/Router'
import { Provider } from 'react-redux'
import store from './src/store/index'

interface AppState {
  loading: boolean;
}

class App extends React.Component<{}, AppState> {
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

  render() {
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
