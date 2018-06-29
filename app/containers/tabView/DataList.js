// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import JPushModule from 'jpush-react-native';

import wholeSituationStyle from '../../config/wholeSituationStyle';
import { Button } from '../../components';
import { NavigationActions } from '../../utils';
import TopSelector from '../../components/common/TopSelector';
import PollutantBar from '../../components/common/PollutantBar';
/*
 * @Script: Map.js018 SDL.All Rights Reserved
 *
 * @Script: DataList.js
 * @Author: houxf
 * @Last Modified By: houxfmark3955@163.com
 * @Last Modified At: 2018-06-20 15:10:45
 * @Last Modified By: houxfmark3955@163.com
 * @Last Modified At: 2018-06-20 15:10:18
 * @Description: 数据列表.
 */

// create a component
@connect()
class DataList extends Component {
  static navigationOptions = {
    // header: null,
    title: '监控总览',
    tabBarLabel: '监控总览',
    tabBarIcon: ({ focused, tintColor }) => (
      // <Image
      //   style={[
      //     wholeSituationStyle.icon,
      //     { tintColor: focused ? tintColor : 'gray' },
      //   ]}
      //   source={require('../../images/person.png')}
      // />
      <Icon
        name={'list-ul'}
        size={20}
        style={{ color: focused ? tintColor : 'gray' }}
      />
    ),
  }

  constructor(props) {
    super(props);
    this.state = {
      imageSrc: '',
    };
  }

  gotoDetail = () => {
    // this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }));
    this.props.dispatch(
      NavigationActions.navigate({ routeName: 'SingleStationDetail' })
    );
    // this.props.dispatch(NavigationActions.reset({
    //   index: 0,
    //   actions: [NavigationActions.navigate({ routeName: 'SingleStationDetail' })],
    // }));
  }

  //选择图片
  selectPhotoTapped() {
    const options = {
      title: '选择图片',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '选择照片',
      customButtons: [
        // {name: 'fb', title: 'Choose Photo from Facebook'},
      ],
      cameraType: 'back',
      mediaType: 'photo',
      videoQuality: 'high',
      durationLimit: 10,
      maxWidth: 300,
      maxHeight: 300,
      quality: 0.8,
      angle: 0,
      allowsEditing: false,
      noData: false,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
          imageSrc: response.uri,
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TopSelector
          ref={ref => (this._topSelector = ref)}
          showDatePicker={() => {}}
        />
        <PollutantBar />
        <Text onPress={this.gotoDetail}>
          DataList 监控总览
          以列表形式显示所有数据，可以调整显示数据的时间类型（实时、分钟、小时、日），切换污染物类型
        </Text>
        <Text
          style={[{ marginTop: 32 }]}
          onPress={() => {
            console.log('123');
            this.selectPhotoTapped();
          }}
        >
          {'选照片'}
        </Text>
        <Image
          style={[{ height: 100, width: 100 }]}
          defaultSource={require('../../images/person.png')}
          source={
            this.state.imageSrc === ''
              ? require('../../images/person.png')
              : { uri: this.state.imageSrc }
          }
        />
        <Text
          onPress={() => {
            JPushModule.initPush();
            console.log('123');
          }}
        >
          1
        </Text>
        <Text
          onPress={() => {
            console.log('345');
            JPushModule.getAlias(map => {
              if (map.errorCode === 0) {
                console.log('Get alias succeed, alias: ' + map.alias);
              } else {
                console.log('Get alias failed, errorCode: ' + map.errorCode);
              }
            });
          }}
        >
          2
        </Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
});

// make this component available to the app
export default DataList;
