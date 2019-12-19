import React from 'react'
import { Button, Container, Header, Text, Left, Icon, Body, Title,Item, Right,Input , Content, Picker, Form } from 'native-base'
import {Link} from 'react-router-native'
import {View} from 'react-native'

class ApplyTransfer extends React.Component<{},{}>{
  render(){
    return(
      <View style={{flex:1, borderWidth:1, flexDirection:'column', justifyContent:'flex-start'}} >
        {/* <Form style={{display:'flex',justifyContent:'center', alignContent:'center'}}> */}
          <View style={{display:'flex', flexDirection:'row', borderWidth:1, justifyContent:'center'}}>
          <Text>На картку іншого банку</Text>
          </View>
          
          
       
        <View style={{flex:1, borderWidth:1,flexDirection:'row', justifyContent:'space-around' }}>
          <Text >1234</Text>
          <Text >1234</Text>
          <Text >1234</Text>
          <Text >1234</Text>
        </View>
        
        
        {/* </Form> */}
        
      </View>
      
    )
  }
}
export default ApplyTransfer