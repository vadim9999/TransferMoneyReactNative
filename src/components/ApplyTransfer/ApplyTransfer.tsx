import React from 'react'
import { Button, Container, Header, Text, Left, Icon, Body, Title,Item, Right,Input , Content, Picker, Form } from 'native-base'
import {Link} from 'react-router-native'
import {View, Switch} from 'react-native'
import {withRouter} from 'react-router-native'
import {connect} from 'react-redux'

const mapStateToProps = (state) =>{
  return {
    option: state.transfer.option,
    numberCard: state.transfer.numberCard
  }
}
interface ApplyTransferProps {
  option:string;
  numberCard: string[]
}

class ConnectedApplyTransfer extends React.Component<ApplyTransferProps,{}>{
  render(){
    const {numberCard} = this.props;

    
    return(
      <View style={{flex:1, margin:20, flexDirection:'column',justifyContent:'flex-start'}} >
        {/* <Form style={{display:'flex',justifyContent:'center', alignContent:'center'}}> */}
          <View style={{display:'flex',flexDirection:'row', justifyContent:'center'}}>
          <Text>{this.props.option === 'other'?"На картку іншого банку VISA/MIC":'На картку банку'  }</Text>
          </View>
          
          
        
        <View style={{display:'flex',marginTop:20,marginLeft:10, marginRight:10, flexDirection:'row', justifyContent:'space-around' }}>
        {
          numberCard.map((block,index)=>{
            
          return <Text style={{color:'gray'}}>{block}</Text>
          })
        }
        </View>
        <View >
        <Item style={{ marginLeft:"25%", marginRight:"25%", marginTop:10, display:'flex',flexDirection:'row'}}>
          <Input style={{textAlign:'center'}} placeholder="Введіть суму" /><Text>грн</Text>
       </Item>
        </View>
        <View  style={{marginTop:15, display:"flex", flexDirection:'row', justifyContent:'space-between'}}>
          <Text>Сплатити комісію з отримувача 24.50 грн?</Text>
          <Switch />
        </View>
       
        <View>
        <Button onPress={() => this.props.history.push('/verification')} style={{display:'flex', justifyContent:'center', marginTop:15, backgroundColor:'white', borderWidth:1 }} transparent full rounded >
            <Text style={{ color:'black'}}>Підтвердити</Text>
         
            <Icon style={{ color:'black'}} name ="ios-arrow-forward"></Icon>
            </Button>
        </View>
       
        
        
        {/* </Form> */}
        
      </View>
      
    )
  }
}

const ApplyTransfer = connect(mapStateToProps)(ConnectedApplyTransfer)
export default withRouter(ApplyTransfer)