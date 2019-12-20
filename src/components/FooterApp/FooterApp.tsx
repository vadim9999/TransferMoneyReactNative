import React from 'react'
import { Button, Text,Footer,FooterTab, Icon} from 'native-base'
import {withRouter} from 'react-router-native'
import styles from './styles'

interface FooterAppState{
  onClick:any;
}
interface FooterAppProps{
  location:{pathname:string};
  history:{push:any};

}
class FooterApp extends React.Component<FooterAppProps,FooterAppState>{

  onClick = () =>{
    const {location, history} = this.props;
    return location.pathname === '/success'? ()=>history.push('/'):null
  }
  render(){
  
    return(
      <Footer>
          <FooterTab style={{backgroundColor:'white'}}>
            
            <Button vertical>
              <Icon name="filing" />
              <Text style={styles.text}>Карти</Text>
            </Button>
            <Button vertical>
              <Icon active name="cash" />
              <Text style={styles.text}>Поповнення</Text>
            </Button>
            <Button vertical onPress={this.onClick} active>
              <Icon name="repeat" />
              <Text style={styles.text}>Перекази</Text>
            </Button>
            <Button vertical>
              <Icon name="tv" />
              <Text style={styles.text}>Платежі</Text>
            </Button>
            <Button vertical>
              <Icon name="apps" />
              <Text style={styles.text}>Інше</Text>
            </Button>
          </FooterTab>
        </Footer>
    )
  }
}


export default withRouter(FooterApp)