import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import {
  Grid,
  Tabs,
  NoticeBar,
  Badge,
  List,
  WingBlank,
  WhiteSpace,
  Slider,
  ImagePicker,
  Toast,
} from 'antd-mobile-rn';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import { Button } from 'antd-mobile-rn';
import { connect } from 'react-redux';
/*
 * @Description: 报备添加.
 */
@connect()
export default class ReportAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type1: '#B3B7C0',
      type2: '#B3B7C0',
      type3: '#B3B7C0',
      text1: '#B3B7C0',
      text2: '#B3B7C0',
      text3: '#B3B7C0',
      backgroundColor1: '#FFFFFF',
      backgroundColor2: '#FFFFFF',
      backgroundColor3: '#FFFFFF',
      files: [
        {
          url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
          id: '2121',
        },
        {
          url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
          id: '2122',
        },
      ],
      files2: [],
    };
  }
  types1 = () => {
    if (this.state.type2 === '#9EB1FE') {
      this.setState({ type2: '#B3B7C0' });
      this.setState({ text2: '#B3B7C0' });
      this.setState({ backgroundColor2: '#FFFFFF' });
    }
    if (this.state.type3 === '#9EB1FE') {
      this.setState({ type3: '#B3B7C0' });
      this.setState({ text3: '#B3B7C0' });
      this.setState({ backgroundColor3: '#FFFFFF' });
    }
    if (this.state.type1 === '#B3B7C0') {
      this.setState({ type1: '#9EB1FE' });
      this.setState({ text1: '#9EB1FE' });
      this.setState({ backgroundColor1: '#DCDCDC' });
    } else {
      this.setState({ type1: '#B3B7C0' });
      this.setState({ text1: '#B3B7C0' });
      this.setState({ backgroundColor1: '#FFFFFF' });
    }
  }

  types2 = () => {
    if (this.state.type1 === '#9EB1FE') {
      this.setState({ type1: '#B3B7C0' });
      this.setState({ text1: '#B3B7C0' });
      this.setState({ backgroundColor1: '#FFFFFF' });
    }
    if (this.state.type3 === '#9EB1FE') {
      this.setState({ type3: '#B3B7C0' });
      this.setState({ text3: '#B3B7C0' });
      this.setState({ backgroundColor3: '#FFFFFF' });
    }
    if (this.state.type2 === '#B3B7C0') {
      this.setState({ type2: '#9EB1FE' });
      this.setState({ text2: '#9EB1FE' });
      this.setState({ backgroundColor2: '#DCDCDC' });
    } else {
      this.setState({ type2: '#B3B7C0' });
      this.setState({ text2: '#B3B7C0' });
      this.setState({ backgroundColor2: '#FFFFFF' });
    }
  }

  types3 = () => {
    if (this.state.type2 === '#9EB1FE') {
      this.setState({ type2: '#B3B7C0' });
      this.setState({ text2: '#B3B7C0' });
      this.setState({ backgroundColor2: '#FFFFFF' });
    }
    if (this.state.type1 === '#9EB1FE') {
      this.setState({ type1: '#B3B7C0' });
      this.setState({ text1: '#B3B7C0' });
      this.setState({ backgroundColor1: '#FFFFFF' });
    }
    if (this.state.type3 === '#B3B7C0') {
      this.setState({ type3: '#9EB1FE' });
      this.setState({ text3: '#9EB1FE' });
      this.setState({ backgroundColor3: '#DCDCDC' });
    } else {
      this.setState({ type3: '#B3B7C0' });
      this.setState({ text3: '#B3B7C0' });
      this.setState({ backgroundColor3: '#FFFFFF' });
    }
  }
  showToastNoMask() {
    Toast.info('已添加', 2, null, false);
  }

  handleFileChange = (files: any) => {
    this.setState({
      files,
    });
  }
  render() {
    return (
      <View style={styles.view1}>
        <View style={styles.view2}>
          <ScrollView style={{ width: '100%', flex: 1 }}>
            <View style={{ width: '100%' }}>
              <View
                style={{
                  marginTop: '5%',
                  marginBottom: '5%',
                  flexDirection: 'row',
                }}
              >
                <View style={{ width: '33.3%', height: 100 }}>
                  <TouchableOpacity onPress={this.types1}>
                    <View
                      style={[
                        {
                          width: '90%',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: 100,
                          backgroundColor: this.state.backgroundColor1,
                          marginLeft: '5%',
                          borderRadius: 5,
                        },
                      ]}
                    >
                      <View>
                        <Image
                          tintColor={this.state.type1}
                          source={require('../../images/tingdian.png')}
                          style={{ width: 40, height: 40 }}
                        />
                      </View>
                      <View style={{ marginTop: 3 }}>
                        <Text style={{ color: this.state.text1 }}>停电</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{ width: '33.3%', borderRadius: 5, height: 100 }}>
                  <TouchableOpacity onPress={this.types2}>
                    <View
                      style={{
                        width: '90%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 100,
                        backgroundColor: this.state.backgroundColor2,
                        marginLeft: '5%',
                        borderRadius: 5,
                      }}
                    >
                      <View>
                        <Image
                          tintColor={this.state.type2}
                          source={require('../../images/guzhang.png')}
                          style={{ width: 40, height: 40 }}
                        />
                      </View>
                      <View style={{ marginTop: 3 }}>
                        <Text style={{ color: this.state.text2 }}>
                          设备故障
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{ width: '33.3%', borderRadius: 5, height: 100 }}>
                  <TouchableOpacity onPress={this.types3}>
                    <View
                      style={{
                        width: '90%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 100,
                        backgroundColor: this.state.backgroundColor3,
                        marginLeft: '5%',
                        borderRadius: 5,
                      }}
                    >
                      <View>
                        <Image
                          tintColor={this.state.type3}
                          source={require('../../images/tingchan.png')}
                          style={{ width: 40, height: 40 }}
                        />
                      </View>
                      <View style={{ marginTop: 3 }}>
                        <Text style={{ color: this.state.text3 }}>停产</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={styles.view3}>
                  <View style={{ height: 45, paddingTop: 12 }}>
                    <Image
                      tintColor="#5F7CFC"
                      source={require('../../images/dianwei.png')}
                      style={{ width: 17, height: 17 }}
                    />
                  </View>
                  <View style={{ flex: 9 }}>
                    <TextInput
                      keyboardType="default"
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      placeholderTextColor="#BDC6D0"
                      placeholder="请输入锅炉号"
                      autoCapitalize="none"
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                    />
                  </View>
                </View>
                <View style={styles.view3}>
                  <View style={{ height: 45, paddingTop: 12 }}>
                    <Image
                      tintColor="#5F7CFC"
                      source={require('../../images/rili.png')}
                      style={{ width: 17, height: 17 }}
                    />
                  </View>
                  <View style={{ flex: 9 }}>
                    <TextInput
                      keyboardType="default"
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      placeholderTextColor="#BDC6D0"
                      placeholder="开始时间"
                      autoCapitalize="none"
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                    />
                  </View>
                </View>
                <View style={styles.view3}>
                  <View style={{ height: 50, paddingTop: 12 }}>
                    <Image
                      tintColor="#5F7CFC"
                      source={require('../../images/rili.png')}
                      style={{ width: 17, height: 17 }}
                    />
                  </View>
                  <View style={{ flex: 9 }}>
                    <TextInput
                      keyboardType="default"
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      placeholderTextColor="#BDC6D0"
                      placeholder="结束时间"
                      autoCapitalize="none"
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                    />
                  </View>
                </View>
                <View style={styles.view3}>
                  <View style={{ height: 45, paddingTop: 12 }}>
                    <Image
                      tintColor="#5F7CFC"
                      source={require('../../images/beizhu.png')}
                      style={{ width: 17, height: 17 }}
                    />
                  </View>
                  <View style={{ flex: 9, marginLeft: '1%' }}>
                    <TextInput
                      keyboardType="default"
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      placeholderTextColor="#BDC6D0"
                      placeholder="原因备注"
                      autoCapitalize="none"
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                    />
                  </View>
                </View>
              </View>
              <View style={{ marginTop: '5%', marginBottom: '5%' }}>
                <View style={{ marginTop: 20, marginLeft: '12%' }}>
                  <ImagePicker
                    onChange={this.handleFileChange}
                    files={this.state.files}
                  />
                  <WhiteSpace />
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Button
              inline={true}
              style={{
                width: SCREEN_WIDTH - 70,
                borderRadius: 20,
                height: 45,
                backgroundColor: '#5F7CFC',
              }}
              onClick={this.showToastNoMask}
            >
              <Text style={{ color: '#FFFFFF' }}>完成添加</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view1: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  view2: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '95%',
    marginLeft: '2.5%',
    marginTop: '3%',
    marginBottom: '3%',
    borderRadius: 5,
  },
  view3: {
    width: '85%',
    flexDirection: 'row',
    height: 45,
    borderBottomColor: '#8EAFE0',
    borderBottomWidth: 1,
  },
});
