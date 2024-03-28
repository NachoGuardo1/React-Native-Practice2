import React from "react";
import { Text, View } from "react-native";

export const FlexBox = () => {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "stretch",
        width: "90%",
        height: 400,
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
};
