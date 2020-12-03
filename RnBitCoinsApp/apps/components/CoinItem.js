/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class CoinItem extends Component {
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  render() {
    console.log('CoinItem : ',this.props.iconUri);
    return (
      <View style={styles.subContainer}>
        <Image source={{uri: this.props.iconUri}} style={styles.Coin} />
        <View style={styles.coinDetail}>
          <Text children={this.props.name} style={styles.coinName} />
          <Text children={`vol : ${this.numberWithCommas(Number(this.props.volume))}`} style={{color: 'white', fontWeight: 'bold'}} />
          <Text children={`vol : ${this.numberWithCommas(Number(this.props.price))}`} />
          <Text children={'#' + this.props.rank} style={{fontSize: 20}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    height: 90,
    backgroundColor: '#D9D6FF',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  Coin: {
    width: 64,
    height: 64,
  },
  coinDetail: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  coinName: {
    fontSize: 20,
    width: 100,
    color: 'white',
    fontWeight: 'bold',
  },
});
