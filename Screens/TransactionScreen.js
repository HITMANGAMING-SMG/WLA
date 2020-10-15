import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import { render } from "react-dom";

export default class TransactionScreen {
  render() {
    return (
      <View style={styles.container}>
        <Text>TransactionScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
