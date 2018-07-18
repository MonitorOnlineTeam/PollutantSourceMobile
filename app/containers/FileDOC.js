import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { NavigationActions } from '../utils';
import datas from '../Data/FileDOC.json';
import { SCREEN_WIDTH } from '../config/globalsize';
import Input from '../../node_modules/antd-mobile-rn/lib/input-item/Input.native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
let navigationData;
let thisData = this;
let thisLength = 0;
@connect()
class FileDOC extends Component {
  static navigationOptions = ({ router, navigation }) => {
    navigationData = navigation;

    return {
      title: navigation.state.params.text,
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#4f6aea' },
      headerLeft: (
        <Text
          onPress={() => {
            navigation.dispatch(NavigationActions.back());
          }}
          style={{ marginLeft: 5, width: 32, height: 32, textAlign: 'center' }}
        >
<<<<<<< HEAD
          <Icon name={'angle-left'} size={32} style={{ color: '#ffffff' }} />
=======
          <Icon name={'angle-left'} size={32} style={{ color: 'black' }} />
>>>>>>> de69db19a87a0911761502f2ca8f65207eb936ce
        </Text>
      ),
    };
  }
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: ds.cloneWithRows(datas),
    };
  }

  onPressTou = data => {
    console.log('111111111');
    console.log(this);
  }
  renderRow(rowData, sectionID, rowID, highlightRow) {
    console.log('---------------------------');
    console.log(thisData.state.dataSource);
    console.log('-------------------全局');
    console.log(thisLength);
    console.log('-------------------数据');
    console.log(thisData.state.dataSource.rowIdentities[0].length);
    if (thisLength >= thisData.state.dataSource.rowIdentities[0].length) {
      thisLength = 0;
    }
    thisLength = thisLength + 1;

    if (navigationData.state.params.id === rowData.id) {
      return (
        <View>
          <TouchableOpacity
            style={{ backgroundColor: '#f0f2f8' }}
            activeOpacity={0.5}
            onPress={() => {
              thisData.props.dispatch(
                NavigationActions.navigate({
                  routeName: 'DisplayDOC',
                  params: rowData,
                })
              );
            }}
          >
            <View
              style={{
                width: SCREEN_WIDTH - 40,
                alignContent: 'center',
                alignSelf: 'center',
                alignContent: 'center',
                backgroundColor: '#ffffff',
                paddingTop: 26,
                borderColor: '#dbdde1',
                borderWidth: 1,
                borderRadius: 5,
                marginBottom: 20,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  lineHeight: 28,
                  fontSize: 20,
                  alignContent: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                  marginLeft: 20,
                  marginBottom: 25,
                  color: '#000000',
                }}
              >
                {rowData.title}
              </Text>
              <Image
                source={{ uri: rowData.icon }}
                style={{
                  width: SCREEN_WIDTH - 80,
                  height: 150,
                  alignContent: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                }}
              />
              <View
                style={{
                  alignContent: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                  marginLeft: 20,
                  marginBottom: 25,
                  marginTop: 30,
                }}
              >
                <Text
                  style={{
                    lineHeight: 28,
                    fontSize: 13,
                    color: '#808080',
                    marginRight: 20,
                  }}
                >
                  {rowData.text}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else {
      if (thisLength === thisData.state.dataSource.rowIdentities.length) {
        return (
          <View
            style={{
              alignContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}
          >
            <View style={{ borderRadius: 100, padding: 5, marginTop: 50 }}>
              <Text
                style={{
                  alignContent: 'center',
                  color: '#b7b7b7',
                  alignSelf: 'center',
                  alignItems: 'center',
                  fontSize: 11,
                }}
              >
                暂无数据
              </Text>
            </View>
          </View>
        );
      } else {
        return <View />;
      }
    }
  }

  render() {
    thisData = this;
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            width: SCREEN_WIDTH - 40,
            height: 40,
            marginTop: 10,
            marginBottom: 10,
            alignContent: 'center',
            backgroundColor: '#ffffff',
            alignSelf: 'center',
            borderColor: '#d4d4d4',
            borderWidth: 1,
            borderRadius: 50,
          }}
        >
          <Image
            style={{
              width: 17,
              height: 17,
              alignContent: 'center',
              alignSelf: 'center',
              marginLeft: 5,
            }}
            tintColor="#bdbdbd"
            source={{
              uri:
                'http://m.qpic.cn/psb?/V13bWnEG4SA0oG/c1v9Nnp4En4zm64xOAxbUdYmzsewafWjnb8ll4Y5zxU!/b/dDEBAAAAAAAA&bo=yADIAAAAAAADByI!&rf=viewer_4',
            }}
          />
          <TextInput
            placeholder="搜索"
            style={{
              width: SCREEN_WIDTH - 80,
              height: 37,
              borderColor: '#e0e0e0',
              color: '#333333',
              borderWidth: 0,
              marginTop: 3,
            }}
            underlineColorAndroid="transparent"
          />
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          style={{ marginBottom: 20 }}
        />
      </View>
    );
  }
}
export default FileDOC;
