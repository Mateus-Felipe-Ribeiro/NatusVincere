import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [ modalIsVisible, setModalIsVisible ] = useState(false);
  const [ courseGoals, setCourseGoals ] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(inputText) {
    setCourseGoals(
      (currentCourseGoals) => [
        ...currentCourseGoals, 
        {text: inputText, id: Math.random().toString()},
      ]
    );
    endAddGoalHandler();
  };

  function deleteGoalHandler(id){
    setCourseGoals(courseGoals => {
      return courseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title='+ Objetivo' color="#5e0acc" onPress={startAddGoalHandler} />
        <GoalInput visible={modalIsVisible} 
        onAddGoal={addGoalHandler} 
        onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={
            (item) => {
              return (
              <GoalItem 
                text={item.item.text} 
                id={item.item.id}
                onDeleteItem={deleteGoalHandler}
              />
              );
            }
          } 
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 60,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 6
  },
});
