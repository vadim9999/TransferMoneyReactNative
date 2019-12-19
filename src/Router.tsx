import React from "react";
import { StyleSheet, View, AppRegistry } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import HeaderApp from './components/HeaderApp/HeaderApp'
import InputCard from './components/InputCard/InputCard'
import ApplyTransfer from './components/ApplyTransfer/ApplyTransfer'
import {withRouter} from 'react-router-native'
import Verification from './components/Verification/Verification'
import VerificationSuccess from './components/VerificationSuccess/VerificationSuccess'

import { Button, Container, Header, Text, Left,Footer,FooterTab, Icon, Body, Title,Item, Right,Input , Content, Picker, Form } from 'native-base'

class Router extends React.Component<{},{}>{
  render(){
    return (
      <NativeRouter>
        
        <Container>
      <HeaderApp />
      <Route exact path ="/" component={InputCard}/>
      <Route path = "/apply" component={ApplyTransfer} />
      <Route path = '/verification' component={Verification} />
      <Route path = '/success' component={VerificationSuccess} /> 
      <Footer>
          <FooterTab style={{backgroundColor:'white'}}>
            
            <Button vertical>
              <Icon name="filing" />
              <Text style={{fontSize:7}}>Карти</Text>
            </Button>
            <Button vertical>
              <Icon active name="cash" />
              <Text style={{fontSize:7}}>Поповнення</Text>
            </Button>
            <Button vertical active>
              <Icon name="repeat" />
              <Text style={{fontSize:7}}>Перекази</Text>
            </Button>
            <Button vertical>
              <Icon name="tv" />
              <Text style={{fontSize:7}}>Платежі</Text>
            </Button>
            <Button vertical>
              <Icon name="apps" />
              <Text style={{fontSize:7}}>Інше</Text>
            </Button>
          </FooterTab>
        </Footer>
    </Container>
      </NativeRouter>
    )
  }
}


export default Router