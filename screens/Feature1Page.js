import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export class Feature1Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: [],
      input: "",
      currency: ``
    };
  }

  componentDidMount = () => {
    this.fetchAPI();
  };

  fetchAPI = () => {
    // Placeholder for crypto api
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(source => {
        this.setState({
          source: source.results,
          currency: `${source.results[0].email}`
        });
      });
  };
  callApi = async (currency) => {
    let results = await fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=' + currency + '&api_key=[your_api_key]')
    let data = await results.json();
    this.setState({
      data: data[currency.toUpperCase()]
    })
    return data[currency.toUpperCase()]  
  } 
  
  handleSubmit = async () => {
    let bitcoinValue = await this.callApi(this.state.name)
    .catch((e)=>{console.log(e)});
    Alert.alert(this.state.name + ": " + bitcoinValue );
  }
  
  async textToUpper(name) {
    this.setState({name : name})
  }
  
    render() {
  
      return (
        <View style={styles.container}>
          <TextInput placeholder="Search?" onChangeText={name => this.textToUpper(name)}>
          </TextInput>
            <Button
            title="Submit"
            onPress={() => this.handleSubmit()}
            ></Button>
          <Text>{this.state.data}</Text>
  
        </View>
      );
    }
  }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>API Feature</Text>
//         <TextInput
//           style={styles.textinput}
//           placeholder="Search by key word"
//           onSubmitEditing={e => console.log(e.nativeEvent.text)}
//           clearButtonMode="always"
//         />
//         <Text>{this.state.currency}</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textinput: {
    alignContent: "center",
    textAlign: "center",
    margin: 5,
    height: 40,
    width: 250,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white"
  }
});

export default Feature1Page;
