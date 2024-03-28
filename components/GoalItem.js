import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDelete.bind(this, props.id)}
        android_ripple={{ color: "#210644" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "violet",
  },
  pressedItem: {
    backgroundColor: "#210655",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
