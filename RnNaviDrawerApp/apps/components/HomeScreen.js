/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';

class HomeScreen extends Component {
    render() {
        console.log('Home Render');
        console.log(Dimensions.get('window').width - 150);
        return (
            <View style={styles.layout}>
                <Text children="Home UI" />
                <View style={styles.button}>
                    <Button
                        title="open drawer"
                        onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} />
                    <Button
                        title="toggle drawer"
                        onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flexDirection: 'row',
    },
});

export default HomeScreen;
