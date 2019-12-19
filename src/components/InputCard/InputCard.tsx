import React from 'react'
import { Button, Container, Header, Text, Left, Icon, Body, Title,Item, Right,Input , Content, Picker, Form } from 'native-base'
import {
  StyleSheet, View,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Link, Redirect, withRouter} from 'react-router-native'

class ConnectedInputCard extends React.Component<{},{}>{
  constructor(props){
    super(props)
    this.state = {
      redirect: false
    }
  }

  render(){
    console.log("redirect", this.state.redirect);

    console.log('location ** ', this.props.location);
    
    if(this.state.redirect){
      console.log("redirect");
      return(<Redirect to ="/apply" />)
    }
    return(
      <View style={{flex:1,marginTop:10, marginLeft:20, marginRight:20}}>
          
          <Form style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <Item picker style={{marginTop:5}}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Виберіть спосіб перерахування"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              // selectedValue={this.state.selected}
              // onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="На картку іншого банку VISA\MIC" value="other" />
              <Picker.Item label="Цього банку" value="current" />
              
            </Picker>
            </Item>
         
            <Item style={{display:'flex', flexDirection:'row', justifyContent:'space-around', 
            marginTop:10}}>

              <Input style={{textAlign:'center'}} placeholder="1234" maxLength={4} ></Input>
              <Input style={{textAlign:'center'}} placeholder="5678" maxLength={4} ></Input>
              <Input  style={{textAlign:'center'}} placeholder="9012" maxLength={4} ></Input>
              <Input  style={{textAlign:'center'}} placeholder="3456" maxLength={4} ></Input>

            </Item>
            
          
            <Button onPress={() => this.props.history.push('/apply')} style={{display:'flex', justifyContent:'center', marginTop:15, backgroundColor:'white', borderWidth:1 }} transparent full rounded >
            <Text style={{ color:'black'}}>Далі</Text>
         
            <Icon style={{ color:'black'}} name ="ios-arrow-forward"></Icon>
            </Button>
          
            
          
           
            
          </Form>
        
 
          {/* <Button onPress={this.onClick}>
              <Text>Далі</Text>
            </Button> */}
          </View>
    )
  }
}
const InputCard = withRouter(ConnectedInputCard)
export default InputCard