import React from 'react'
import { Button, Text,Footer,FooterTab, Icon} from 'native-base'

class FooterApp extends React.Component<{},{}>{

  render(){
    return(
      <Footer>
          <FooterTab style={{backgroundColor:'white'}}>
            
            <Button vertical>
              <Icon name="filing" />
              <Text style={{fontSize:7}}>Карти</Text>
            </Button>
            <Button vertical>
              <Icon active name="cash" />
              <Text style={{fontSize:7}}>Поповнення</Text>
            </Button>
            <Button vertical active>
              <Icon name="repeat" />
              <Text style={{fontSize:7}}>Перекази</Text>
            </Button>
            <Button vertical>
              <Icon name="tv" />
              <Text style={{fontSize:7}}>Платежі</Text>
            </Button>
            <Button vertical>
              <Icon name="apps" />
              <Text style={{fontSize:7}}>Інше</Text>
            </Button>
          </FooterTab>
        </Footer>
    )
  }
}


export default FooterApp