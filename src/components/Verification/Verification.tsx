import React from 'react'
import { Button, Container, Header, Text, Left, Icon, Body, Title,Item, Right,Input , Content, Picker, Form } from 'native-base'
import {
  StyleSheet, View,
  StatusBar,
  Platform,
  TouchableOpacity,
  Image
} from 'react-native';


class Verification extends React.Component<{},{}>{
  render(){
    return(
      <View style={{ flex:1, margin:20}}>
        <View style={{ alignItems:'center' }}>
          <Image 
          style={{width: 50, height: 50 }}
          source={require('./message.png')} />
          <Text style={{textAlign:'center', fontSize:13,marginTop:20}}>
            Введіть пароль з СМС, що надіслано на Ваш номер
            Ніколи не повідомляйте йогоо іншим особам
          </Text>
          <Text style={{color:'gray', alignSelf:'flex-start', marginTop:25, fontSize:13}}>ПАРОЛЬ З СМС</Text>
          <Item style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
            
          <Input style={{textAlign:'center'}} placeholder="1" maxLength={1} />

          <Input style={{textAlign:'center'}} placeholder="2" maxLength={1} />
          <Input style={{textAlign:'center'}} placeholder="3" maxLength={1} />
          <Input style={{textAlign:'center'}} placeholder="4" maxLength={1} />
      
</Item> 
          <Button onPress={() => this.props.history.push('/success')} style={{display:'flex', justifyContent:'center', marginTop:15, backgroundColor:'white', borderWidth:1 }} transparent full rounded >
            <Text style={{ color:'black'}}>ПЕРЕКАЗАТИ</Text>
         
            <Icon style={{ color:'black'}} name ="ios-arrow-forward"></Icon>
            </Button>
          
        </View>
          
      </View>
      
    )
  }
}


export default Verification