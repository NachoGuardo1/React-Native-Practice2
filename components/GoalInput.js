import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  Button,
  View,
  Modal,
  Image,
} from "react-native";

export const GoalInput = (props) => {
  const [valueText, setValueText] = useState("");

  const goalEntered = (value) => {
    setValueText(value);
  };

  const addGoalHandler = () => {
    props.addGoal(valueText);
    setValueText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Your goal here"
          style={styles.textInput}
          onChangeText={goalEntered}
          value={valueText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="blue" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.endVisible} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 6,
    padding: 16,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    marginHorizontal: 8,
    width: 100,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
