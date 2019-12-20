import React from 'react'
import { Button, Container, Header, Text, Left, Icon, Body, Title,Item, Right,Input , Content, Picker, Form } from 'native-base'
import {Link} from 'react-router-native'
import {View, Switch} from 'react-native'
import {withRouter} from 'react-router-native'
import {connect} from 'react-redux'
import {addCommission, addAmount} from '../../actions'
import store from '../../store'

const mapStateToProps = (state) =>{
  return {
    option: state.transfer.option,
    numberCard: state.transfer.numberCard,
    commission: state.transfer.commission,
    amount: state.transfer.amount
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addCommission: (commission) => dispatch(addCommission(commission)),
    addAmount: (amount) => dispatch(addAmount(amount))

  }
}
interface ApplyTransferProps {
  option:string;
  numberCard: string[]
}

class ConnectedApplyTransfer extends React.Component<ApplyTransferProps,{}>{
  constructor(props){
    super(props)
    this.state = {
      commission:false,
      amount:'0',
    
    }
  }

  onChangeSwitch = () =>{
   
    
    this.setState({
      commission: !this.state.commission

    })
    // addCommission()
  }

  static getDerivedStateFromProps = (nextProps, prevState) =>{
    
    if(nextProps.commission !== undefined && nextProps.amount !== undefined 
      && prevState.commission !== undefined && prevState.amount !== undefined ){
        console.log("call derid");
        if(prevState.amount === '0'){
          if (nextProps.commission !== false && nextProps.amount.toString() !== '0'){
            console.log("***derived commission");
            
            return{
              amount: nextProps.amount.toString(),
              commission: nextProps.commission
            }
          }else if(nextProps.commission !== false && nextProps.amount.toString() === '0' ) {
            return {commission: nextProps.commission}
          }else if(nextProps.commission === false && nextProps.amount.toString() !== '0'){
            return {
              amount: nextProps.amount.toString()
            }
          
          }
        }
      


    }
    
  } 
  onChangeText = (amount) =>{
    console.log(amount);
    
    this.setState({
      amount:amount
    })
  }
  onClick = () =>{
    let money = 0;
    if(this.state.amount !== '' && this.state.amount !== '0'){
      try {
    
        money= parseInt(this.state.amount,10)
  
        this.props.addAmount(money)
        this.props.addCommission(this.state.commission)
        
        this.props.history.push('/verification')
      }catch (e){
  
      }
    }
    
   
  }
  render(){
    const {numberCard} = this.props;
    console.log(this.state);
    
    console.log(store.getState());
    
    
    return(
      <View style={{flex:1, margin:20, flexDirection:'column',justifyContent:'flex-start'}} >
        {/* <Form style={{display:'flex',justifyContent:'center', alignContent:'center'}}> */}
          <View style={{display:'flex',flexDirection:'row', justifyContent:'center'}}>
          <Text>{this.props.option === 'other'?"На картку іншого банку VISA/MIC":'На картку банку'  }</Text>
          </View>
          
          
        
        <View style={{display:'flex',marginTop:20,marginLeft:10, marginRight:10, flexDirection:'row', justifyContent:'space-around' }}>
        {
          numberCard.map((block,index)=>{
            
          return <Text key={index} style={{color:'gray'}}>{block}</Text>
          })
        }
        </View>
        <View >
        <Item style={{ marginLeft:"25%", marginRight:"25%", marginTop:10, display:'flex',flexDirection:'row'}}>
          <Input style={{textAlign:'center'}} placeholder="Введіть суму" onChangeText={this.onChangeText} value={this.state.amount} /><Text>грн</Text>
       </Item>
        </View>
        <View  style={{marginTop:15, display:"flex", flexDirection:'row', justifyContent:'space-between',flexWrap:'wrap'}}>
          <Text>Сплатити комісію з отримувача 24.50 грн?</Text>
          <Switch value ={this.state.commission} onValueChange={this.onChangeSwitch} />
        </View>
       
        <View>
        <Button onPress={this.onClick} style={{display:'flex', justifyContent:'center', marginTop:15, backgroundColor:'white', borderWidth:1 }} transparent full rounded >
            <Text style={{ color:'black'}}>Підтвердити</Text>
         
            <Icon style={{ color:'black'}} name ="ios-arrow-forward"></Icon>
            </Button>
        </View>
       
        
        
        {/* </Form> */}
        
      </View>
      
    )
  }
}

const ApplyTransfer = connect(mapStateToProps, mapDispatchToProps)(ConnectedApplyTransfer)
export default withRouter(ApplyTransfer)