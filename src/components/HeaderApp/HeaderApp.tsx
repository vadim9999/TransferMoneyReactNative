import React from 'react'
import { Button, Container, Header, Text, Left, Icon, Body, Title,Item, Right,Input , Content, Picker, Form } from 'native-base'
import {
  StyleSheet, View,
  StatusBar,
  Platform,
  TouchableOpacity,

} from 'react-native';
import {Link} from 'react-router-native'
import { withRouter} from 'react-router-native'
import { LinearGradient } from 'expo-linear-gradient';
import {connect} from 'react-redux'

const mapStateToProps = (state) =>{
  return {
    numberCard: state.user.numberCard,
    money: state.user.money
  }
}

class ConnectedHeaderApp extends React.Component<{},{}>{
  constructor(props){
    super(props)
    this.state ={
      hiddenCardType: false
    }
  }

  getPath = (path) =>{
    switch(path){
      
      case '/apply':
        return '/'
      case '/verification':
        return '/apply'

      default:
        return '/'
    }
  }
  updateButtonBack = () =>{
    const {history, location}:any = this.props;
    let path = this.getPath(location.pathname);

    history.push(path)
  }

  updateHeaderName = (path) =>{
    switch(path){
      case "/":
        return <Title>Грошові перекази</Title>
      case '/apply':
        return <Title>Сума переказу</Title>
      case '/verification':
        return <Title>Підтвердження операції</Title>
      case '/success':
        return <Title>Результат</Title>

      default:
        return( <Title>Грошові перекази</Title>)
    }

   
  }
   numberWithCommas =(money) => {

    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  render(){
    const {location, history, numberCard, money}:any = this.props;

    console.log("location header", this.props.location);
    
    return (
      <LinearGradient
      colors={['#6eaaf9','#0552ba']}
      start={[-0.1,0.4]}
      style={{borderRadius:4}}
     >
      <View >
            <View >
            <Header transparent>


            <Left style={{flex:2}}>
              {
                location.pathname !== '/success'? (
                  <Button onPress={this.updateButtonBack} transparent>
          
              <Icon name='ios-arrow-back' ></Icon>
              
            </Button>
                ):(
                  <Button  transparent>
          
                  <Icon name='close' ></Icon>
                  
                </Button>
                )
              }
              
             
            
            </Left>

                    <Body style={{flex:3}}>
                      {this.updateHeaderName(location.pathname)}
                   
                    </Body>
                    <Right style={{flex:1}}>
                      <Button transparent >
                        <Icon name='ios-notifications-outline' />
                      </Button>
                    </Right>
            </Header>
            </View>
           <View style={{display:'flex', flexDirection:'row', justifyContent:'center', marginBottom:20}}>

             <View style={{ display:"flex", flexDirection:'column'}}>

            
             {
               this.props.location.pathname === '/' ? (
                <View style={{display:'flex', flexDirection: 'row', justifyContent:'space-between' }}>
                  <View >
                  <Text style={{ color:'white'}}>Golden Dream</Text>
                  </View>
                  <View>
                  <Text style={{color:'white'}}> 01/19</Text>
                  </View>
                  </View>
                 ) : null
               
             }
             
             
             <View>
  <Text style={{fontSize:50 , color:'white'}}>&#8372; {this.numberWithCommas(money)}</Text>
             </View>
            
             <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
              <Text style={{color:'white'}}> XXXX</Text>
              <Text style={{color:'white'}}> XXXX</Text>
              <Text style={{color:'white'}}> XXXX</Text>
            <Text style={{color:'white'}}> {numberCard[3]}</Text>
            </View>
            </View>
           </View>
            
          </View>
    </LinearGradient>
     
    )
  }
}

const HeaderApp = connect(mapStateToProps)(ConnectedHeaderApp)
export default withRouter(HeaderApp)