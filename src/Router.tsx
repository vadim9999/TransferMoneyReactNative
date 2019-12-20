import React from "react";
import { NativeRouter, Route } from "react-router-native";
import HeaderApp from './components/HeaderApp/HeaderApp'
import InputCard from './components/InputCard/InputCard'
import ApplyTransfer from './components/ApplyTransfer/ApplyTransfer'
import Verification from './components/Verification/Verification'
import VerificationSuccess from './components/VerificationSuccess/VerificationSuccess'
import FooterApp from './components/FooterApp/FooterApp'
import { Container } from 'native-base'

class Router extends React.Component<{}, {}>{
  render() {
    return (
      <NativeRouter>
        <Container>
          <HeaderApp />
          <Route exact path="/" component={InputCard} />
          <Route path="/apply" component={ApplyTransfer} />
          <Route path='/verification' component={Verification} />
          <Route path='/success' component={VerificationSuccess} />
          <FooterApp />
        </Container>
      </NativeRouter>
    )
  }
}
export default Router