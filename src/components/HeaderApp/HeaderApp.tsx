import React from 'react'
import { Button, Container, Header, Text, Left, Icon, Body, Title,Item, Right,Input , Content, Picker, Form } from 'native-base'
import {
  StyleSheet, View,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';

class HeaderApp extends React.Component<{},{}>{
  render(){
    return (
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
    )
  }
}

export default HeaderApp