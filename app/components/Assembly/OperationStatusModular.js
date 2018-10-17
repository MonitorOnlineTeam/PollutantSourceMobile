import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { SCREEN_WIDTH } from '../../config/globalsize';
import CenterButton from '../Assembly/CenterButton';
import { WhiteSpace, Modal, Radio, WingBlank } from 'antd-mobile-rn';

/*
  * @Description: 滚动卡片模块.
  */
export default class OperationStatusModular extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: '#FFFFFF',
          borderRadius: 5,
          marginTop: 6,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            padding: '5%',
            borderBottomColor: '#F1F4F9',
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}
          >
            <Image
              style={styles.TitleImg}
              tintColor="#ff414e"
              source={require('../../images/qyfx.png')}
            />
            <Text>{this.props.entName}</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text>任务总计:{this.props.Total}</Text>
          </View>
          <WhiteSpace size="lg" />
        </View>

        <View style={{ flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row', padding: '2%' }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'row',
              }}
            >
              <WingBlank size="md" />
              <Text style={{ color: '#D1D1D1' }}>
                巡检计划：{this.props.plan}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ color: '#D1D1D1' }}>
                应急任务：{this.props.task}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', padding: '2%' }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'row',
              }}
            >
              <WingBlank size="md" />
              <Text style={{ color: '#D1D1D1' }}>
                实际巡检：{this.props.check}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ color: '#D1D1D1' }}>
                平均处理时常：{this.props.hour}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', padding: '2%' }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'row',
              }}
            >
              <WingBlank size="md" />
              <Text style={{ color: '#D1D1D1' }}>
                逾期：{this.props.overdue}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ color: '#D1D1D1' }}>
                传输有效率：{this.props.transmissionEfficiency}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', padding: '2%' }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'row',
              }}
            >
              <WingBlank size="md" />
              <Text style={{ color: '#D1D1D1' }}>
                传输率：{this.props.transmissionRate}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ color: '#D1D1D1' }}>
                有效率：{this.props.effectiveRate}
              </Text>
            </View>
          </View>
        </View>
        <WhiteSpace />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  TitleImg: {
    width: 14,
    height: 14,
    marginRight: 10,
  },
});
