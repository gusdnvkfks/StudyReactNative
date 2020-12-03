/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, Text, ScrollView, TextInput, StyleSheet} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

import MyButton from '../controls/MyButton';

var db = openDatabase({ name: 'Users.db' });

const ViewUser = ({navigation}) => {
    let [userId, setInputUserId] = useState(''); // string
    let [userData, setUserData] = useState({}); // object

    const searchUser = () => {
        db.transaction((txn) => {
            txn.executeSql(
                'SELECT * FROM table_user WHERE user_id = ?',
                [userId],
                (txn, res) => {
                    console.log('record num :', res.rows.length);
                    if (res.rows.length === 1) {
                        setUserData(res.rows.item(0));
                    } else {
                        alert('유저 정보 없음');
                        setUserData({});
                    }
                }
            );
        });
    };

    const userInfo = userData.user_id ? (
        <View style={styles.Userinfo}>
            <Text children={`유저 아이디 : ${userData.user_id}`} style={styles.text} />
            <Text children={`유저 이름 : ${userData.user_name}`} style={styles.text} />
            <Text children={`연락처 : ${userData.user_contact}`} style={styles.text} />
            <Text children={`주소 : ${userData.user_address}`} style={styles.text} />
        </View>
    ) : (
        <View />
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text children="조회 화면" style={{textAlign: 'center', fontSize: 20}} />
                <TextInput placeholder="아이디 입력" style={styles.textInput}
                           onChangeText={(userId) => setInputUserId(userId)} />
                <MyButton title="검색" onButtonClick={searchUser} />
                {userInfo}
            </View>
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

export default ViewUser;

