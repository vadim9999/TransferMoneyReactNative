import React from 'react'
import { Button, Container, Header, Text, Left, Icon, Body, Title,Item, Right,Input , Content, Picker, Form } from 'native-base'
import {
  StyleSheet, View,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import InputCard from '../InputCard/InputCard'

const MainNavigation = createStackNavigator({
  Home: {
    screen: InputCard
  }

})
// class ConnectedContentApp extends React.Component<{},{}>{
//   render(){
//     return(
//       <InputCard />
//     )
//   }
// }

// const ContentApp = createAppContainer(MainNavigation)
export default ContentApp