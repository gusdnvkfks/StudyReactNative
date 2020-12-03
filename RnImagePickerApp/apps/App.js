import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

import ImagePicker from 'react-native-image-picker';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: {uri: 'https://t1.daumcdn.net/cfile/blog/99D4583F5B5D7E5129'},
    };
  }

  showPicker = () => {
    const options = {
      title: '이미지 선택',
      takePhotoButtonTitle: '카메라',
      chooseFromLibraryButtonTitle: '저장소',
      cancelButtonTitle: '취소',
      // customButtons: [
      //   {name: 'kb', title: '카카오톡 이미지 선택'},
      // ],
      storageOptions: {
        skipBackup: true, //IOS용, android는 무시
        path: 'Pictures/images/',
        privateDirectory: true,
      },
    };
    ImagePicker.showImagePicker(options, (res) => {
      if (res.didCancle) {
        alert('취소하였습니다.');
      } else if (res.error) {
        alert(`에러 : ${res.error}`);
      } else if (res.customButton) {
        //...
      } else {
        //선택된 이미지 경로 가져오기
        const uri = {uri: res.uri}; // url < uri 상위개념
        this.setState({img: uri});
      }
    });
  };

  render() {
    return (
      <View style={styles.body}>
        <Button title="이미지 선택" onPress={this.showPicker} />
        <Text children={this.state.img.uri} style={styles.urlText} />
        <Image source={this.state.img} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#e9e9e9',
    flex: 1,
    padding: 15,
  },
  urlText: {
    fontSize: 12,
    color: '#000000',
    margin: 18,
  },
  image: {
    backgroundColor: '#D9D6FF',
    marginTop: 8,
    flex: 1,
    borderRadius: 10,
  },
});
