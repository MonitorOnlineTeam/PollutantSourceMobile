import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  PixelRatio,
} from 'react-native';
import { connect } from 'react-redux';
import {
  SCREEN_WIDTH,
  WINDOW_HEIGHT,
  SCREEN_HEIGHT,
  NOSTATUSHEIGHT,
} from '../../config/globalsize';
import Checkboxes from '../Assembly/Checkboxes';
import { Modal, Radio, WhiteSpace, WingBlank } from 'antd-mobile-rn';
import EarlyWarningCard from '../Assembly/EarlyWarningCard';
import { NavigationActions, createAction } from '../../utils';

const RadioItem = Radio.RadioItem;
/*
 * @Description: 预警信息.
 */
@connect(({ earlyWarning }) => ({
  persons: earlyWarning.persons,
}))
export default class EarlyWarningInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBox1: false,
      checkBox2: false,
      checkBox3: false,
      visible: false,
      part1Value: 1,
      part2Value: 1,
    };
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  }

  clickItem = index => {
    this.props.dispatch(
      createAction('earlyWarning/clickItem')({ index: index })
    );
  }

  render() {
    console.log('EarlyWarningInfo');
    return (
      <View>
        <View
          style={{ backgroundColor: '#F1F4F9', width: SCREEN_WIDTH, flex: 1 }}
        >
          <ScrollView style={{ flex: 1 }}>
            {this.props.persons.map((item, key) => {
              return (
                <EarlyWarningCard
                  chicked={item.ifchicked}
                  title={item.name}
                  dateTime={item.time}
                  number={item.c}
                  key={key}
                  alarmType={item.type}
                  contentTexts={item.content}
                  index={key}
                  click={this.clickItem}
                />
              );
            })}
          </ScrollView>
          {/* 对话框 */}
          <Modal
            style={{
              borderRadius: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.0)',
              position: 'absolute',
            }}
            transparent={true}
            closable={false}
            onClose={this.onClose}
            maskClosable={true}
            visible={this.state.visible}
            modalVisible={true}
          >
            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 100,
                backgroundColor: '#C0D4EF',
                alignSelf: 'center',
                top: 35,
                zIndex: 99,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                style={{ width: 20, height: 20 }}
                tintColor="#FFFFFF"
                source={require('../../images/dg.png')}
              />
            </View>
            <View
              style={{
                paddingTop: '10%',
                paddingLeft: '5%',
                paddingRight: '5%',
                paddingBottom: '1%',
                backgroundColor: '#ffffff',
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  borderBottomColor: '#E3E3E3',
                  padding: 15,
                  alignSelf: 'center',
                }}
              >
                <Text style={{ color: '#000000', fontSize: 15 }}>
                  共选中
                  <Text style={{ color: '#ff0000' }}>3</Text>
                  条数据
                </Text>
              </View>
              <View style={{ padding: 12, alignSelf: 'center' }}>
                <Radio
                  checked={this.state.part1Value === 1}
                  onChange={event => {
                    if (event.target.checked) {
                      this.setState({ part1Value: 1 });
                    }
                  }}
                  style={{}}
                >
                  <WingBlank size="sm" />
                  <Text style={{ color: '#078FE9' }}>有问题生成应急任务单</Text>
                </Radio>
              </View>
              <View style={{ padding: 12, alignSelf: 'center' }}>
                <Radio
                  checked={this.state.part1Value === 2}
                  onChange={event => {
                    if (event.target.checked) {
                      this.setState({ part1Value: 2 });
                    }
                  }}
                  style={{}}
                >
                  <WingBlank size="sm" />
                  <Text style={{ color: '#078FE9' }}>无问题并生成反馈单</Text>
                </Radio>
              </View>
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={{}}>备注：</Text>
                <TextInput
                  style={{
                    borderColor: '#E3E3E3',
                    borderWidth: 0.8,
                    width: '80%',
                  }}
                  multiline={true}
                  placeholder=""
                  underlineColorAndroid="transparent"
                  clearButtonMode="always"
                  maxLength={100}
                />
              </View>
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    this.onClose();
                  }}
                  style={{
                    backgroundColor: '#4BB3F0',
                    borderRadius: 50,
                    height: 35,
                    width: '100%',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: '#FFFFFF',
                      alignSelf: 'center',
                      justifyContent: 'center',
                      fontSize: 14,
                    }}
                  >
                    确定
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        <View>
          <Checkboxes
            title={'核实'}
            bgColor={'#2196F3'}
            TColor={'#FFFFFF'}
            N={'11'}
            Number={this.props.persons.length}
            click={() => {
              this.setState({ visible: true });
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainView: {
    width: '96%',
    backgroundColor: '#FFFFFF',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 6,
    marginBottom: 3,
    shadowColor: '#E3E3E3',
    shadowOffset: { w: 0, h: 50 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  flexStyle: {
    marginRight: '2%',
  },
  TitleImg: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  TitleText: {
    color: '#3F3F3F',
    fontSize: 14,
  },
  ContentText: {
    fontSize: 13,
    color: '#000000',
    lineHeight: 24,
  },
  SpecificView: {
    marginLeft: 30,
  },
  RowView: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
