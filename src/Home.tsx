import React from 'react';
import {
  StyleSheet, View,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Button, Container, Header, Text, Left, Icon, Body, Title,Item, Right,Input , Content, Picker, Form } from 'native-base'

import { Col, Row, Grid } from 'react-native-easy-grid'
import HeaderApp from './components/HeaderApp/HeaderApp'
import ContentApp from './components/ContentApp/ContentApp'
class Home extends React.Component<{}, {}>{



  onClick = () => {
    console.log("hhii");

  }
//   measureYourComponent() {
//     this.refs.yourComponent.measure((ox, oy, width, height, px, py) => {
//         console.log("ox: " + ox); //Relative position
//         console.log("oy: " + oy); //Relative position
//         console.log("width: " + width);
//         console.log("height: " + height);
//         console.log("px: " + px); //Absolute position
//         console.log("py: " + py); //Absolute position
//       });
// }
  render() {

    return (

      <Container >
        {/* <View style={styles.container} ref="yourComponent">
        <TouchableOpacity onPress={this.measureYourComponent}>
          <Text>Measure it</Text>
        </TouchableOpacity>
      </View> */}

        {/* <Header  style={{ paddingTop: StatusBar.currentHeight }} >
          <Grid >
            

              <Row>
               
                
              
                    <Body style={{flex:1}}>
                    <Title>Header</Title>
                    </Body>
                    <Right style={{flex:1}}>
                      <Button transparent>
                        <Icon name='menu' />
                      </Button>
                    </Right>
                
              </Row>
              
              <Row>
               
                
              <Left style={{flex:1}}>
                <Button transparent>
                        <Icon name='arrow-back' />
                      </Button>
                    </Left>
                    <Body style={{flex:1}}>
                    <Title>Header</Title>
                    </Body>
                    <Right style={{flex:1}}>
                      <Button transparent>
                        <Icon name='menu' />
                      </Button>
                    </Right>
                
              </Row>
           
          </Grid>

        </Header> */}
        <View style={{display:'flex', flexDirection:'column'}}>
          
          <HeaderApp />
          <ContentApp />
          
        </View>
        {/* <Grid>
          <Row style={{height: StatusBar.currentHeight}}>
        <Text>Ok</Text>
        <Text>Ok</Text>
          </Row>
          <Row>
          <Col>
            <Button onPress={this.onClick}>
              <Text>Далі</Text>
            </Button>
          </Col>
          </Row>
         
        </Grid> */}
      </Container>



      /* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
<View>
  
  <Text>Okk</Text>
  </View> */

    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })

  }
})

export default Home
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
