import React from "react";
import { Button, Text, Icon, Item, Input } from "native-base";
import { View, Switch } from "react-native";
import { withRouter } from "react-router-native";
import { connect } from "react-redux";
import { addCommission, addAmount } from "../../actions";
import store from "../../store";
import styles from "./styles";

const mapStateToProps = state => {
  return {
    option: state.transfer.option,
    numberCard: state.transfer.numberCard,
    commission: state.transfer.commission,
    amount: state.transfer.amount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCommission: commission => dispatch(addCommission(commission)),
    addAmount: amount => dispatch(addAmount(amount))
  };
};
interface ApplyTransferProps extends ApplyCommissionState {
  option: string;
  numberCard: string[];
  addAmount:any;
  addCommission:any;
  history:any;
}
interface ApplyCommissionState{
  commission: boolean;
  amount: string;
}
class ConnectedApplyTransfer extends React.Component<ApplyTransferProps, ApplyCommissionState> {
  constructor(props) {
    super(props);
    this.state = {
      commission: false,
      amount: "0"
    };
  }

  onChangeSwitch = () => {
    this.setState({
      commission: !this.state.commission
    });
  };

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (
      nextProps.commission !== undefined &&
      nextProps.amount !== undefined &&
      prevState.commission !== undefined &&
      prevState.amount !== undefined
    ) {
      if (prevState.amount === "0") {
        if (
          nextProps.commission !== false &&
          nextProps.amount.toString() !== "0"
        ) {
          return {
            amount: nextProps.amount.toString(),
            commission: nextProps.commission
          };
        } else if (
          nextProps.commission !== false &&
          nextProps.amount.toString() === "0"
        ) {
          return { commission: nextProps.commission };
        } else if (
          nextProps.commission === false &&
          nextProps.amount.toString() !== "0"
        ) {
          return {
            amount: nextProps.amount.toString()
          };
        }
      }
    }
    return null;
  };

  onChangeText = amount => {
    this.setState({
      amount: amount
    });
  };

  onClick = () => {
    const {history} = this.props;

    let money = 0;
    if (this.state.amount !== "" && this.state.amount !== "0") {
      try {
        money = parseInt(this.state.amount, 10);

        this.props.addAmount(money);
        this.props.addCommission(this.state.commission);

        history.push("/verification");
      } catch (e) {}
    }
  };

  render() {
    const { numberCard } = this.props;

    return (
      <View
        style={styles.container}
      >
        <View
          style={styles.optionBlock}
        >
          <Text>
            {this.props.option === "other"
              ? "На картку іншого банку VISA/MIC"
              : "На картку банку"}
          </Text>
        </View>

        <View
          style={styles.numberCard}
        >
          {numberCard.map((block, index) => {
            return (
              <Text key={index} style={{ color: "gray" }}>
                {block}
              </Text>
            );
          })}
        </View>
        <View>
          <Item
            style={styles.field}
          >
            <Input
              style={{ textAlign: "center" }}
              placeholder="Введіть суму"
              onChangeText={this.onChangeText}
              value={this.state.amount}
            />
            <Text>грн</Text>
          </Item>
        </View>
        <View
          style={styles.checkbox}
        >
          <Text>Сплатити комісію з отримувача 24.50 грн?</Text>
          <Switch
            value={this.state.commission}
            onValueChange={this.onChangeSwitch}
          />
        </View>

        <View>
          <Button
            onPress={this.onClick}
            style={styles.button}
            transparent
            full
            rounded
          >
            <Text style={styles.text}>Підтвердити</Text>
            <Icon style={styles.text} name="ios-arrow-forward"></Icon>
          </Button>
        </View>
      </View>
    );
  }
}

const ApplyTransfer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedApplyTransfer);
export default withRouter(ApplyTransfer);
