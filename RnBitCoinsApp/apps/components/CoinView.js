/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, StyleSheet, Button, ScrollView} from 'react-native';
import axios from 'axios';

import CoinItem from './CoinItem';
import {getCoinIconUri} from '../data/constants';

//가짜데이터
const sampleData = [
  {
    "circulating_supply": 185000,
    "cmc_rank": 1,
    "date_added": "2020-12-01T00:00:00.000Z",
    "id": 1,
    "last_updated": "2020-11-28T11:27:02.000Z",
    "max_supply": 21000000,
    "name": "Bitcoin",
    "num_market_pairs": 9550,
    "platform": null,
    "quote": [Object],
    "slug": "bitcoin",
    "symbol": "BTC",
    "tag": [Array],
    "total_supply": 185000,
  },
  {
    "circulating_supply": 111111,
    "cmc_rank": 2,
    "date_added": "2020-12-01T00:00:00.000Z",
    "id": 2,
    "last_updated": "2020-11-28T11:27:02.000Z",
    "max_supply": null,
    "name": "Ethereum",
    "num_market_pairs": 5775,
    "platform": null,
    "quote": [Object],
    "slug": "ethereum",
    "symbol": "ETH",
    "tag": [Array],
    "total_supply": 111111,
  },
];

const client = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com',
  method: 'GET',
  headers: {
    'content-type': 'application/json',
    'X-CMC_PRO_API_KEY': 'dffd02b0-c77a-4221-87ad-98cb80e6224c',
  },
});

export default class CoinView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinData: [], //API로 받아오는 진짜데이터
      isLoading: false,
    };
  }

  componentDidMount() {
    // this.getCoinData();
    // setInterval(() => {
    //   this.getCoinData();
    // }, 10000);  //10초마다, 1000ms -> 1초, 10000ms -> 10초
  }

  getCoinData = async () => {
    this.setState({isLoading: true});

    try {
      await client
        .get('/v1/cryptocurrency/listings/latest', {
          params: {limit: 10},
        })
        .then(res => {
          // console.log(res);
          console.log('API 조회 완료');
          this.setState({
            coinData: res.data.data,
            isLoading: false,
          });
        })
        .catch(err => {
          console.error('getCoinData() :', err);
          alert("API조회 오류 발생, \n관리자 문의 요망");
        });
    } catch (error) {
        console.error('getCoinData() :', error);
        alert("API오류 발생, \n관리자 문의 요망");
    }
  }

  render() {
    let coinItems = this.state.coinData.map((item, index) => {
      const {cmc_rank, name, num_market_pairs, total_supply, symbol} = item; // item객체 재구성

      return (
        <CoinItem
          key={index}
          name={name}
          rank={cmc_rank}
          price={num_market_pairs}
          volume={total_supply}
          symbol={symbol}
          iconUri={getCoinIconUri(name)}
        />
      );
    });
    return (
      <ScrollView>
        {/* Touchableopacity만들어서 마이버튼 스타일만들기 */}
        <View style={styles.button}>
          <Button title="재조회" onPress={this.getCoinData} />
        </View>
        <View style={styles.container}>{coinItems}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },
  button: {
    paddingTop: 5,
    marginLeft: 5,
    marginRight: 5,
  },
});
