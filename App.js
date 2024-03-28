import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  const startGoalHandler = () => {
    setVisibleModal(true);
  };

  const endGoalHandler = () => {
    setVisibleModal(false);
  };

  const addGoal = (valueText) => {
    setGoals([...goals, { text: valueText, key: Math.random().toString() }]);
    endGoalHandler();
  };

  const onDeleteHandler = (key) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== key);
    });
  };

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <Button
          title="Add a new goal"
          color="blue"
          onPress={startGoalHandler}
        />
        {visibleModal && (
          <GoalInput
            visible={visibleModal}
            endVisible={endGoalHandler}
            addGoal={addGoal}
          />
        )}
        <View style={styles.goalsContainer}>
          {/* <ScrollView>
          {goals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.key}
                  onDelete={onDeleteHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
