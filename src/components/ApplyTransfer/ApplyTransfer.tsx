import React from 'react'
import { Button, Container, Header, Text, Left, Icon, Body, Title,Item, Right,Input , Content, Picker, Form } from 'native-base'
import {Link} from 'react-router-native'

class ApplyTransfer extends React.Component<{},{}>{
  render(){
    return(
      <Link to="/apply"><Text>ApplyTransfer</Text></Link>
      
    )
  }
}
export default ApplyTransfer