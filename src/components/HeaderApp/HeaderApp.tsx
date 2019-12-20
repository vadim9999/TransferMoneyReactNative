import React from "react";
import {
  Button,
  Header,
  Text,
  Left,
  Icon,
  Body,
  Title,
  Right,
} from "native-base";
import { View } from "react-native";
import { withRouter } from "react-router-native";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import styles from "./styles";

const mapStateToProps = state => {
  return {
    numberCard: state.user.numberCard,
    money: state.user.money
  };
};

interface HeaderAppState {
  hiddenCardType: boolean;
}

interface HeaderAppProps{
  numberCard : string[];
  money: number;
}
class ConnectedHeaderApp extends React.Component<HeaderAppProps, HeaderAppState> {
  constructor(props) {
    super(props);
    this.state = {
      hiddenCardType: false
    };
  }

  getPath = path => {
    switch (path) {
      case "/apply":
        return "/";
      case "/verification":
        return "/apply";
      default:
        return "/";
    }
  };

  updateButtonBack = () => {
    const { history, location }: any = this.props;
    let path = this.getPath(location.pathname);

    history.push(path);
  };

  updateHeaderName = path => {
    switch (path) {
      case "/":
        return <Title>Грошові перекази</Title>;
      case "/apply":
        return <Title>Сума переказу</Title>;
      case "/verification":
        return <Title>Підтвердження операції</Title>;
      case "/success":
        return <Title>Результат</Title>;

      default:
        return <Title>Грошові перекази</Title>;
    }
  };
  numberWithCommas = money => {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    const { location, numberCard, money }: any = this.props;

    return (
      <LinearGradient
        colors={["#6eaaf9", "#0552ba"]}
        start={[-0.1, 0.4]}
        style={styles.gradient}
      >
        <View>
          <View>
            <Header transparent>
              <Left style={styles.leftButton}>
                {location.pathname !== "/success" ? (
                  <Button onPress={this.updateButtonBack} transparent>
                    <Icon name="ios-arrow-back"></Icon>
                  </Button>
                ) : (
                  <Button transparent>
                    <Icon name="close"></Icon>
                  </Button>
                )}
              </Left>

              <Body style={styles.body}>
                {this.updateHeaderName(location.pathname)}
              </Body>
              <Right style={styles.rightButton}>
                <Button transparent>
                  <Icon name="ios-notifications-outline" />
                </Button>
              </Right>
            </Header>
          </View>
          <View
            style={styles.content}
          >
            <View style={styles.cardNameBlock}>
              {location.pathname === "/" ? (
                <View
                  style={styles.cardName}
                >
                  <View>
                    <Text style={styles.text}>Golden Dream</Text>
                  </View>
                  <View>
                    <Text style={styles.text}> 01/19</Text>
                  </View>
                </View>
              ) : null}

              <View>
                <Text style={styles.money}>
                  &#8372; {this.numberWithCommas(money)}
                </Text>
              </View>

              <View
                style={styles.numberCard}
              >
                <Text style={styles.text}> XXXX</Text>
                <Text style={styles.text}> XXXX</Text>
                <Text style={styles.text}> XXXX</Text>
                <Text style={styles.text}> {numberCard[3]}</Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const HeaderApp = connect(mapStateToProps)(ConnectedHeaderApp);
export default withRouter(HeaderApp);
