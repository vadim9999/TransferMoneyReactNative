import React from "react";
import {
  Button,
  Text,
  Icon,
  Item,
  Input,
} from "native-base";
import {
  View,
  Image
} from "react-native";
import styles from './styles'

import {withRouter} from 'react-router-native'

interface VerificationProps{
history:{push:any}
}
interface VerificationState{

}
class Verification extends React.Component<VerificationProps, VerificationState> {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    const {history} = this.props;
   history.push("/success");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.block}>
          <Image
            style={styles.image}
            source={require("./message.png")}
          />
          <Text style={styles.textInfo}>
            Введіть пароль з СМС, що надіслано на Ваш номер Ніколи не
            повідомляйте йогоо іншим особам
          </Text>
          <Text
            style={styles.message}
          >
            ПАРОЛЬ З СМС
          </Text>
          <Item
            style={styles.item}
          >
            <Input
              style={styles.input}
              placeholder="1"
              maxLength={1}
            />

            <Input
              style={styles.input}
              placeholder="2"
              maxLength={1}
            />
            <Input
              style={styles.input}
              placeholder="3"
              maxLength={1}
            />
            <Input
              style={styles.input}
              placeholder="4"
              maxLength={1}
            />
          </Item>
          <Button
            onPress={this.onClick}
            style={styles.button}
            transparent
            full
            rounded
          >
            <Text style={styles.textColor}>ПЕРЕКАЗАТИ</Text>

            <Icon style={styles.textColor} name="ios-arrow-forward"></Icon>
          </Button>
        </View>
      </View>
    );
  }
}

export default withRouter(Verification);
