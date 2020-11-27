/* eslint-disable prettier/prettier */
import React, { useState } from 'react'; //useState 상태관리?
import {SafeAreaView, Text, StatusBar, StyleSheet, View} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  //todos: { id: 1, textValue: 'todoitem', checked: true/false }

  const [todos, setTodos] = useState([]);

  // 할일 목록 추가
  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, textValue: text, checked: false },
    ]);
    //Axios DB처리 // Insert 호출
  };

  function onRemove(id) {
    console.log(`App / delete id => ${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const onToggle = (id) => {
    console.log(`App / toggle id => ${id}`);
    setTodos(todos.map((todo) =>
      todo.id === id ? {...todo, checked:!todo.checked} : todo,
    ),);
  };

  return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Text children="Todo List" style={styles.appTitle} />
          <View style={styles.card}>
            <TodoInsert onAddTodo={addTodo} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
          </View>
        </SafeAreaView>
      </>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbbbbb',
    borderBottomWidth: 1,
    fontSize: 17,
    margin: 20,
  },
});

export default App;
