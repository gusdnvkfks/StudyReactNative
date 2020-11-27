/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

const TodoInsert = ({onAddTodo}) => {

    const [newTodoItem, setNewTodoItem] = useState('');

    const handleTodoInput = (newTodo) => {
        setNewTodoItem(newTodo);
    };

    const handleAddTodo = () => {
        if (newTodoItem === '') {
            return;
        }
        // alert(newTodoItem);
        console.log(`newTodoItem => ${newTodoItem}`);
        onAddTodo(newTodoItem.replace('\n',' '));
        setNewTodoItem('');
    };

    // const handleKeyPress = (e) => {
    //     if (e.nativeEvent.key === 'Enter') {
    //         handleAddTodo();
    //     }
    // };

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}
                       placeholder={'할일을 입력하세요!!'}
                       autoCorrect={false}
                       value={newTodoItem}
                       onChangeText={handleTodoInput}
                    //    onKeyPress={handleKeyPress}
                        />
            <View style={styles.button}>
                <Button title={'ADD'}
                        onPress={handleAddTodo}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        padding: 20,
        borderBottomColor: '#bbbbbb',
        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: 20,
        width: '75%',
      },
      button: {
          marginRight: 10,
      },
});

export default TodoInsert;
