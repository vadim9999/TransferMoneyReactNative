import React from 'react'
import { Button, Text,Footer,FooterTab, Icon} from 'native-base'
import {withRouter} from 'react-router-native'
class FooterApp extends React.Component<{},{}>{

  render(){
    const {history, location}:any = this.props;

    return(
      <Footer>
          <FooterTab style={{backgroundColor:'white'}}>
            
            <Button vertical>
              <Icon name="filing" />
              <Text style={{fontSize:6}}>Карти</Text>
            </Button>
            <Button vertical>
              <Icon active name="cash" />
              <Text style={{fontSize:6}}>Поповнення</Text>
            </Button>
            <Button vertical onPress={location.pathname === '/success'? ()=>history.push('/'):null} active>
              <Icon name="repeat" />
              <Text style={{fontSize:6}}>Перекази</Text>
            </Button>
            <Button vertical>
              <Icon name="tv" />
              <Text style={{fontSize:6}}>Платежі</Text>
            </Button>
            <Button vertical>
              <Icon name="apps" />
              <Text style={{fontSize:6}}>Інше</Text>
            </Button>
          </FooterTab>
        </Footer>
    )
  }
}


export default withRouter(FooterApp)