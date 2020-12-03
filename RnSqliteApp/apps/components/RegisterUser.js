/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Text, SafeAreaView, ScrollView, KeyboardAvoidingView, TextInput, StyleSheet, Alert} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

import MyButton from '../controls/MyButton';

var db = openDatabase({name: 'Users.db'});

const RegisterUser = ({navigation}) => {
    let [userName, setUserName] = useState('');
    let [userContact, setUserContact] = useState('');
    let [userAddress, setUserAddress] = useState('');

    const registerUser = () => {
        console.log(userName, userContact, userAddress);
        // alert(`${userName}, ${userContact}, ${userAddress}`)
        if (userName.length === 0) {
            alert('이름을 입력하세요');
            return;
        }
        if (userContact.length === 0) {
            alert('번호를 입력하세요');
            return;
        }
        if (userAddress.length === 0) {
            alert('주소를 입력하세요');
            return;
        }

        //DB처리
        db.transaction(function(txn) {
            txn.executeSql(
                `INSERT INTO table_user
                    (user_name, user_contact, user_address)
                VALUES
                    (?,?,?)`,
                [userName, userContact, userAddress],
                function(txn, res) {
                    console.log('res : ', res.rowsAffected);
                    if (res.rowsAffected > 0) {
                        Alert.alert(
                            '등록 성공!',
                            '사용자 등록 성공 했습니다.',
                            [
                                {text: 'OK', onPress: () => navigation.navigate('HomeScreen')},
                            ],
                            {cancelable: false}
                        );
                    } else {
                        alert('등록 실패!');
                    }
                }
            );
        });
    };

    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
            <ScrollView>
                <KeyboardAvoidingView>
                    <Text children="등록 화면" style={{textAlign: 'center', fontSize: 20}} />
                    <TextInput placeholder="이름 입력"
                        onChangeText={(userName) => setUserName(userName)}
                        maxLength={20}
                        style={styles.textInput} />

                    <TextInput placeholder="휴대폰 번호 입력"
                        onChangeText={(userContact) => setUserContact(userContact)}
                        maxLength={15}
                        keyboardType="numeric"
                        style={styles.textInput} />

                    <TextInput placeholder="주소 입력"
                        onChangeText={(userAddress) => setUserAddress(userAddress)}
                        maxLength={50}
                        style={styles.textInput} />
                    <MyButton
                        title="저장"
                        onButtonClick={registerUser} />
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#1877f2',
        margin: 10,
        fontSize: 16,
    },
});
export default RegisterUser;
