import React from "react";
import {
  Button,
  Text,
  Icon,
} from "native-base";
import {
  View,
  Image
} from "react-native";
import { resetTransfer } from "../../actions";
import { withRouter } from "react-router-native";
import { connect } from "react-redux";
import styles from './styles'

const mapDispatchToProps = dispatch => {
  return {
    resetTransfer: () => dispatch(resetTransfer())
  };
};

interface VerificationSuccessProps{
  resetTransfer:any;
  history:{push:any}
}

interface VerificationSuccessState{

}
class ConnectedVerificationSuccess extends React.Component<VerificationSuccessProps, VerificationSuccessState> {
  componentDidMount = () => {
    this.props.resetTransfer();
  };

  render() {
    const {history} = this.props;
    return (
      <View
        style={styles.container}
      >
        <View style={styles.imageBlock}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.image}
              source={require("./success.png")}
            />
          </View>
          <View style={styles.messageBlock}>
            <Text style={styles.title}>Успішно!</Text>
            <Text style={styles.message}>
              Плітіж надіслано на опрацювання
            </Text>
          </View>
        </View>

        <View>
          <View style={styles.question}>
            <Text style={styles.message}>Шановний "Користувач"!</Text>
            <Text style={styles.message}>
              Чи бажаєте додати цю операцію до Ваших шаблонів?
            </Text>
          </View>

          <Button
            onPress={() => history.push("/")}
            style={styles}
            transparent
            full
            rounded
          >
            <Icon style={styles.textColor} name="calendar"></Icon>
            <Text style={styles.textColor}>ЗБЕРЕГТИ ЯК ШАБЛОН</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const VerificationSuccess = connect(
  null,
  mapDispatchToProps
)(ConnectedVerificationSuccess);
export default withRouter(VerificationSuccess);
