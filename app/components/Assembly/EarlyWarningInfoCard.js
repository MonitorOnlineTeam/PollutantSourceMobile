import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class EarlyWarningInfoCard extends Component {
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

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.MainView}
          onPress={event => {
            if (this.state.checkBox1 == true) {
              this.setState({ checkBox1: false });
            } else {
              this.setState({ checkBox1: true });
            }
          }}
        >
          {/* 标题 */}
          <View style={[styles.RowView]}>
            <Checkbox style={styles.TitleImg} checked={this.state.checkBox1} />

            <Text style={[styles.TitleText]}>大唐集团-废气排口1</Text>
          </View>
          {/* 文字描述模块 */}
          <View style={styles.SpecificView}>
            <Text style={styles.ContentText}>
              2018年9月19日 10:59:32~2018年9月19日 10:59:24
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#000000' }}>预警次数：</Text>
              <Text style={{ color: '#ff4f4f' }}>2</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#000000' }}>预警类别：</Text>
              <Text style={{ color: '#ff4f4f' }}>对比预警</Text>
            </View>
            <View style={styles.RowView}>
              <Text style={[styles.ContentText, styles.flexStyle]}>
                内容：烟气分析仪型号EMS16878979879数据发生较大变化
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
