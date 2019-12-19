import React from 'react'
import { Button, Container, Header, Text, Left, Icon, Body, Title,Item, Right,Input , Content, Picker, Form } from 'native-base'
import {Link} from 'react-router-native'
import {View, Switch} from 'react-native'

class ApplyTransfer extends React.Component<{},{}>{
  render(){
    return(
      <View style={{flex:1, borderWidth:1, flexDirection:'column',justifyContent:'flex-start'}} >
        {/* <Form style={{display:'flex',justifyContent:'center', alignContent:'center'}}> */}
          <View style={{display:'flex', borderWidth:3,flexDirection:'row', justifyContent:'center'}}>
          <Text>На картку іншого банку</Text>
          </View>
          
          
       
        <View style={{display:'flex',marginTop:20,marginLeft:10, marginRight:10, flexDirection:'row', justifyContent:'space-around' }}>
          <Text style={{color:'gray'}}>1234</Text>
          <Text style={{color:'gray'}}>1234</Text>
          <Text style={{color:'gray'}}>1234</Text>
          <Text style={{color:'gray'}}>1234</Text>
        </View>
        <View >
        <Item style={{ marginLeft:"25%", marginRight:"25%", display:'flex',flexDirection:'row'}}>
          <Input style={{textAlign:'center'}} placeholder="Введіть суму" /><Text>грн</Text>
       </Item>
        </View>
        <View  style={{marginTop:15, display:"flex", flexDirection:'row', justifyContent:'space-between'}}>
          <Text>Сплатити комісію з отримувача 24.50 грн?</Text>
          <Switch />
        </View>
       
        <View>
        <Button onPress={() => this.props.history.push('/apply')} style={{display:'flex', justifyContent:'center', marginTop:15, backgroundColor:'white', borderWidth:1 }} transparent full rounded >
            <Text style={{ color:'black'}}>Підтвердити</Text>
         
            <Icon style={{ color:'black'}} name ="ios-arrow-forward"></Icon>
            </Button>
        </View>
       
        
        
        {/* </Form> */}
        
      </View>
      
    )
  }
}
export default ApplyTransfer