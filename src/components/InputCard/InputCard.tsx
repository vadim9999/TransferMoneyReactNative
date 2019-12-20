import React from "react";
import { Button, Text, Icon, Item, Input, Picker, Form } from "native-base";
import { View } from "react-native";
import { withRouter } from "react-router-native";
import { connect } from "react-redux";
import { addTransferNumberCard, addOptionTransfer } from "../../actions/index";
import styles from "./styles";

const mapStateToProps = state => {
  return {
    numberCard: state.transfer.numberCard,
    option: state.transfer.option
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addTransferNumberCard: numberCard =>
      dispatch(addTransferNumberCard(numberCard)),
    addOptionTransfer: option => dispatch(addOptionTransfer(option))
  };
};
interface InputCardState {
  numberCard: string[];
  selected: string;
  error: boolean;
  box1?;
  box2?;
  box3?;
  box4?: any;
}

interface InputCardProps {
  location: object;
  history: { push: any };
  numberCard: string[];
  addTransferNumberCard: any;
  addOptionTransfer: any;
}

class ConnectedInputCard extends React.Component<
  InputCardProps,
  InputCardState
  > {
  constructor(props) {
    super(props);
    this.state = {
      numberCard: [],
      selected: "other",
      error: false
    };
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (
      prevState.numberCard !== undefined &&
      nextProps.numberCard !== undefined
    ) {
      if (
        prevState.numberCard.length === 0 &&
        nextProps.numberCard.length > 0
      ) {
        return {
          numberCard: [...nextProps.numberCard],
          selected: nextProps.option
        };
      }
    }
    
    return null;
  };

  onChangeInput = (value, target) => {
    let card = this.state.numberCard;

    switch (target) {
      case "block1":
        card[0] = value;
        break;
      case "block2":
        card[1] = value;
        break;
      case "block3":
        card[2] = value;
        break;
      case "block4":
        card[3] = value;
        break;
    }
    this.setState({
      numberCard: [...card]
    });
  };

  onSave = () => {
    let card = this.state.numberCard;

    if (
      card.length === 4 &&
      card[0].length + card[1].length + card[2].length + card[3].length === 16
    ) {
      this.props.addTransferNumberCard([...card]);
      this.props.addOptionTransfer(this.state.selected);
      this.props.history.push("/apply");
    } else {
      this.setState({
        error: true
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Form style={styles.form}>
          <Item picker style={styles.itemPicker}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Виберіть спосіб перерахування"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={value => this.setState({ selected: value })}
            >
              <Picker.Item
                label="На картку іншого банку VISA\MIC"
                value="other"
              />
              <Picker.Item label="На картку банку" value="current" />
            </Picker>
          </Item>

          <View style={styles.inputGroup}>
            <Item style={styles.item} error={this.state.error} floatingLabel>
              <Input
                getRef={input => {
                  this.box1 = input;
                }}
                onSubmitEditing={() => {
                  this.box2._root.focus();
                }}
                returnKeyType={"next"}
                value={this.state.numberCard[0]}
                onChangeText={e => this.onChangeInput(e, "block1")}
                style={{ textAlign: "center" }}
                placeholder="1234"
                maxLength={4}
              ></Input>
            </Item>
            <Item style={styles.item} floatingLabel error={this.state.error}>
              <Input
                getRef={input => {
                  this.box2 = input;
                }}
                onSubmitEditing={() => {
                  this.box3._root.focus();
                }}
                returnKeyType={"next"}
                value={this.state.numberCard[1]}
                onChangeText={e => this.onChangeInput(e, "block2")}
                style={{ textAlign: "center" }}
                placeholder="5678"
                maxLength={4}
              ></Input>
            </Item>

            <Item style={styles.item} floatingLabel error={this.state.error}>
              <Input
                getRef={input => {
                  this.box3 = input;
                }}
                onSubmitEditing={() => {
                  this.box4._root.focus();
                }}
                returnKeyType={"next"}
                value={this.state.numberCard[2]}
                onChangeText={e => this.onChangeInput(e, "block3")}
                style={{ textAlign: "center" }}
                placeholder="9012"
                maxLength={4}
              ></Input>
            </Item>

            <Item style={styles.item} floatingLabel error={this.state.error}>
              <Input
                getRef={input => {
                  this.box4 = input;
                }}
                onSubmitEditing={this.onSave}
                value={this.state.numberCard[3]}
                onChangeText={e => this.onChangeInput(e, "block4")}
                style={{ textAlign: "center" }}
                placeholder="3456"
                maxLength={4}
              ></Input>
            </Item>
          </View>

          <Button
            onPress={this.onSave}
            style={styles.button}
            transparent
            full
            rounded
          >
            <Text style={styles.blackText}>Далі</Text>

            <Icon style={styles.blackText} name="ios-arrow-forward"></Icon>
          </Button>
        </Form>
      </View>
    );
  }
}
const InputCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedInputCard);
export default withRouter(InputCard);
