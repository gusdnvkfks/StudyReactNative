/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoItem = ({id, textValue, checked, onRemove, onToggle}) => {
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => onToggle(id)}>
                {checked ? (
                    <View style={styles.checkedCircle}>
                        <Icon name="checksquareo" size={30} color="#3143e8" />
                    </View>
                ) : (
                    <View style={styles.circle} />
                )}
            </TouchableOpacity>
            <Text children={textValue}
                  style={[styles.itemText, checked ? styles.strikeText : styles.unstrikeText]} />
            <TouchableOpacity onPress={() => onRemove(id)}>
                <View style={styles.delete}>
                    <MatIcon name="delete-outline" size={30} color="#ff0000" />
                </View>
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        borderBottomColor: '#9e9e9e',
        borderBottomWidth:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    circle: {
        width: 25,
        height: 25,
        borderColor: '#0000ff',
        borderWidth: 2,
        borderRadius: 2,
        marginLeft: 22,
        marginRight: 22,
    },
    checkedCircle: {
        marginLeft: 20,
        marginRight: 20,
    },

    itemText: {
        fontSize: 17,
        marginVertical: 15,
        flex: 1,
        marginLeft: 10,
    },
    strikeText: {
        color: '#9e9e9e',
        textDecorationLine: 'line-through',
    },
    unstrikeText: {
        color: '#222222',
    },
    delete: {
        marginLeft: 20,
        marginRight: 20,  
    },
});

export default TodoItem;
