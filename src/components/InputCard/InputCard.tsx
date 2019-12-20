import React from 'react'
import { Button, Container, Header, Text, Left, Icon, Body, Title,Item, Right,Input , Content, Picker, Form, InputGroup } from 'native-base'
import {
  StyleSheet, View,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Link, Redirect, withRouter} from 'react-router-native'
import {connect} from 'react-redux'
import store from '../../store'
import {addTransferNumberCard, addOptionTransfer} from '../../actions/index'
const mapStateToProps = (state) =>{
  return {
    numberCard:state.transfer.numberCard
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addTransferNumberCard: (numberCard) => dispatch(addTransferNumberCard(numberCard)),
    addOptionTransfer: (option) =>dispatch(addOptionTransfer(option))
  }
}
interface InputCardState {
  numberCard: string[]

}

interface InputCardProps {
  location:object;
  history:{push:any};
  numberCard:string[]
  addTransferNumberCard:any;
  addOptionTransfer: any;
}

class ConnectedInputCard extends React.Component<InputCardProps,InputCardState>{
  constructor(props){
    super(props)
    this.state = {
      numberCard:[],
      selected:'other' 
    }
  }
  // componentDidMount = () =>{
  //   if(this.state.numberCard.length === 0 && this.props.numberCard.length >0){
  //     // this.setState({

  //     // })
  //   }
  // }
 static getDerivedStateFromProps = (nextProps,prevState) =>{
   console.log("call ******");
  //  console.log("prevState", prevState);
  //  console.log("prevProps", nextProps);
   
   
   if(prevState.numberCard !== undefined && nextProps.numberCard !== undefined){
    if(prevState.numberCard.length === 0 && nextProps.numberCard.length >0){
      console.log("Derived");
      return {
        numberCard:[...nextProps.numberCard]
      }
      
    }
   }
   return null
}
  // getSnapshotBeforeUpdate = (prevProps, prevState) =>{
  //   if(prevPro);
    
  //   return null;
  // }
 
  
  onChangeInput = (value,target) =>{
    console.log(value);
    console.log("target",target);
    let card = this.state.numberCard;

    switch(target){
      case 'block1':
        card[0] = value;
        break;
      case 'block2':
        card[1] = value;
        break;
      case 'block3':
        card[2] = value;
        break;
      case 'block4':
          card[3] = value;
        break;
    }
    this.setState({
      numberCard: [...card]
    })
  }
  onSave = () =>{
    let card = this.state.numberCard
    if(card.length>0){
      if(card[0].length ===4 && card[1].length ===4 && card[2].length ===4 && card[3].length ===4){
        this.props.addTransferNumberCard([...card])
        this.props.addOptionTransfer(this.state.selected)
        this.props.history.push('/apply')
      }
    }
    

  }
  render(){
    
  
    console.log("state****", this.state);
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
              selectedValue={this.state.selected}
              onValueChange={(value)=>this.setState({selected:value})}
            >
              <Picker.Item label="На картку іншого банку VISA\MIC" value="other" />
              <Picker.Item label="На картку банку" value="current" />
              
            </Picker>
            </Item>
         
            <Item style={{display:'flex', flexDirection:'row', justifyContent:'space-around', 
            marginTop:10}}>
              
              <Input value={this.state.numberCard[0]} onChangeText={(e)=>this.onChangeInput(e,'block1')} style={{textAlign:'center'}} placeholder="1234" maxLength={4} ></Input>
              <Input value={this.state.numberCard[1]} onChangeText={(e)=>this.onChangeInput(e,'block2')} style={{textAlign:'center'}} placeholder="5678" maxLength={4} ></Input>
              <Input value={this.state.numberCard[2]} onChangeText={(e)=>this.onChangeInput(e,'block3')} style={{textAlign:'center'}} placeholder="9012" maxLength={4} ></Input>
              <Input value={this.state.numberCard[3]} onChangeText={(e)=>this.onChangeInput(e,'block4')} style={{textAlign:'center'}} placeholder="3456" maxLength={4} ></Input>
              
              

            </Item>
            
          
            <Button onPress={this.onSave} style={{display:'flex', justifyContent:'center', marginTop:15, backgroundColor:'white', borderWidth:1 }} transparent full rounded >
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
const InputCard = connect(mapStateToProps, mapDispatchToProps)(ConnectedInputCard)
export default withRouter(InputCard)