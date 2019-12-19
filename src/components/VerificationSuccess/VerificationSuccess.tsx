import React from 'react'
import { Button, Container, Header,FooterTab,Footer, Text, Left, Icon, Body, Title,Item, Right,Input , Content, Picker, Form } from 'native-base'
import {
  StyleSheet, View,
  StatusBar,
  Platform,
  TouchableOpacity,
  Image
} from 'react-native';

class VerificationSuccess extends React.Component<{},{}>{
  render(){
    return (
      <View style={{flex: 1, flexDirection:'column', margin:20, justifyContent:'flex-end' }}>
        
        <View style={{ marginBottom:35}}>
        <View style={{ alignItems:'center'}}>
          <Image
          style={{width: 130, height: 130 }}
          source={require('./success.png')}
          />
        
        </View>
        <View style={{ alignItems:'center'}}>
          <Text style={{color:'blue', fontSize:30}}>Успішно!</Text>
          <Text style={{fontSize:14}}>Плітіж надіслано на опрацювання</Text>
        </View>

        
        </View>
        
    
        <View>
        <View style={{ alignContent:'flex-end', alignItems:'center'}}>
          <Text style={{fontSize:14}}>Шановний "Користувач"!</Text>
          <Text style={{fontSize:14}}>Чи бажаєте додати цю операцію до Ваших шаблонів?</Text>
        </View>
        
        <Button onPress={() => this.props.history.push('/')} style={{display:'flex', 
        justifyContent:'center', marginTop:10, backgroundColor:'white', 
        borderWidth:1 }} transparent full rounded >

            <Icon style={{ color:'black'}} name ="calendar"></Icon>
            <Text style={{ color:'black'}}>ЗБЕРЕГТИ ЯК ШАБЛОН</Text>
         
            
            </Button>
        </View>
        

       
      </View>
      
    )
  }
}

export default VerificationSuccess