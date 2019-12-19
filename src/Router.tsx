import React from "react";
import { StyleSheet, View, AppRegistry } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import HeaderApp from './components/HeaderApp/HeaderApp'
import InputCard from './components/InputCard/InputCard'
import ApplyTransfer from './components/ApplyTransfer/ApplyTransfer'
import {withRouter} from 'react-router-native'

import { Button, Container, Header, Text, Left, Icon, Body, Title,Item, Right,Input , Content, Picker, Form } from 'native-base'

class Router extends React.Component<{},{}>{
  render(){
    return (
      <NativeRouter>
        
        <Container>
      <HeaderApp />
      <Route exact path ="/" component={InputCard}/>
      <Route path = "/apply" component={ApplyTransfer} />
    </Container>
      </NativeRouter>
    )
  }
}


export default Router