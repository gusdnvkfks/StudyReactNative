import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class TopBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/bitcoinSM.png')} />
        <View>
          {/* props 상위가 app에서 title을 받아옴 */}
          <Text children={this.props.title} style={styles.title} />
          <Text children={this.props.refreshDate} style={styles.subtitle} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6799FF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    alignSelf: 'stretch',
    flexDirection: 'row',
    // padding: 10,
  },
  box: {
    backgroundColor: '#D9D6FF',
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#ffffff',
    marginLeft: 10,
  },
  subtitle: {
    marginLeft: 10,
  },
});
