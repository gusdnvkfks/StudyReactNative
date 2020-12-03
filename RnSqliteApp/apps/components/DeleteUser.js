/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, Text, ScrollView, TextInput, StyleSheet, Alert} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

import MyButton from '../controls/MyButton';

var db = openDatabase({ name: 'Users.db' });

const DeleteUser = ({navigation}) => {
    let [userId, setInputUserId] = useState(''); // string

    const deleteUser = () => {
        db.transaction((txn) => {
            txn.executeSql(
                'DELETE FROM table_user WHERE user_id = ?',
                [userId],
                (txn, res) => {
                    console.log('result :', res.rowsAffected);
                    if (res.rowsAffected > 0) {
                        Alert.alert(
                            '삭제 성공!',
                            '사용자 삭제 성공 했습니다.',
                            [
                                {text: 'OK', onPress: () => navigation.navigate('HomeScreen')},
                            ],
                            {cancelable: false}
                        );
                    } else {
                        alert('유저 삭제 실패');
                    }
                }
            );
        });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text children="삭제 화면" style={{textAlign: 'center', fontSize: 20}} />
                <TextInput placeholder="아이디 입력" style={styles.textInput}
                           onChangeText={(userId) => setInputUserId(userId)} />
                <MyButton title="삭제" onButtonClick={deleteUser} />
2            </View>
            <MyButton title="메인으로" onButtonClick={() => navigation.navigate('HomeScreen')} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#6799FF',
        margin: 10,
        fontSize: 16,
    },
    text: {
        fontSize: 20,
        fontStyle: 'italic',
    },
    Userinfo: {
        paddingTop: 5,
        backgroundColor: '#6799FF',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,

    },
});

export default DeleteUser;

