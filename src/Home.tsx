import React from 'react';
import {
  StyleSheet, View,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Button, Container, Header, Text, Left, Icon, Body, Title,Item, Right,Input , Content, Picker, Form } from 'native-base'

import { Col, Row, Grid } from 'react-native-easy-grid'

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
          <View style={{backgroundColor:"#6ca8f8", }}>
            <View >
            <Header transparent>
            <Left style={{flex:2}}>
            <Button transparent>
              <Icon name='ios-arrow-back' ></Icon>
              
            </Button>
            </Left>
                    <Body style={{flex:3}}>
                    <Title>Грошові перекази</Title>
                    </Body>
                    <Right style={{flex:1}}>
                      <Button transparent >
                        <Icon name='ios-notifications-outline' />
                      </Button>
                    </Right>
            </Header>
            </View>
           <View style={{display:'flex', flexDirection:'column', alignItems:'center'}}>

             <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
             <View>
             <Text style={{color:'white'}}>Golden Dream</Text>
             </View>
             <View>
             <Text style={{color:'white'}}> 01/09</Text>
             </View>
             </View>

             <View>
             <Text style={{fontSize:50 , color:'white'}}>2,950.00</Text>
             </View>
            
             <View style={{display:'flex', flexDirection:'row',justifyContent:'center'}}>
              <Text style={{color:'white'}}>  XXXX</Text>
              <Text style={{color:'white'}}>  XXXX</Text>
              <Text style={{color:'white'}}>  XXXX</Text>
              <Text style={{color:'white'}}>  3456</Text>
            </View>
           </View>
            
          </View>
          
          <View>

          
          <Form style={{display:'flex', flexDirection:'column', justifyContent:'center', margin:15}}>
            <Item picker style={{marginTop:5}}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              // selectedValue={this.state.selected}
              // onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="На картку іншого банку VISA\MIC" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
            </Item>
         
            <Item style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:10}}>

              <Input placeholder="1234" maxLength={4} ></Input>
              <Input placeholder="5678" maxLength={4} ></Input>
              <Input placeholder="9012" maxLength={4} ></Input>
              <Input placeholder="3456" maxLength={4} ></Input>

            </Item>
            
            <Button style={{display:'flex', justifyContent:'center', marginTop:15, backgroundColor:'white', borderWidth:1 }} transparent full rounded >
            <Text>Далі</Text>
         
            <Icon name ="ios-arrow-forward"></Icon>
           
              
            
            </Button>
          
            
            
          </Form>
        
 
          {/* <Button onPress={this.onClick}>
              <Text>Далі</Text>
            </Button> */}
          </View>
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
