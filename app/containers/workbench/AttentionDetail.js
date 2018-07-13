//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import {
  Accordion,
  List,
  Icon,
  InputItem,
  Radio,
  WhiteSpace,
  TextareaItem,
  Button,
  Modal,
  ImagePicker,
} from 'antd-mobile-rn';
import RNImagePicker from 'react-native-image-picker';
import { NavigationActions } from '../../utils';
import { SCREEN_WIDTH, WINDOW_HEIGHT } from '../../config/globalsize';
import globalcolor from '../../config/globalcolor';

const RadioItem = Radio.RadioItem;
const data = [
  {
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
  },
];
let thisComponent;
// create a component
class AttentionDetail extends Component {
  static navigationOptions = ({ router, navigation }) => {
    return {
      title: '气态分析仪运行状况检查记录表',
      tabBarLabel: '气态分析仪运行状况检查记录表',
      headerLeft: (
        <Text
          onPress={() => {
            navigation.dispatch(NavigationActions.back());
          }}
          style={{ marginLeft: 5, width: 32, height: 32, textAlign: 'center' }}
        >
          <Icon name={'angle-left'} size={32} style={{ color: 'black' }} />
        </Text>
      ),
    };
  }
  constructor(props) {
    super(props);
 
    thisComponent = this;
    this.state = {
      devicename: 'CEMS',
      deviceno: 'CEMS 3080',
      deviceproductor: '北京雪迪龙科技股份有限公司',
      val1: '红外传感器工作原理',
      val2: '红外传感器工作原理',
      val3: '12',
      val4: '10',
      val5: '相对误差',
      val6: '2',
      val7: '',
      part1Value: 1,
      part2Value: 1,
      avatarSource: '',
      imageSrc: '',
      visible2: false,
      files: data,
      multiple: false,
    };
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
    RNImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('RNImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        let filetemp = thisComponent.state.files;
        filetemp.push({ id: response.fileSize, url: response.uri });
        thisComponent.setState({
          avatarSource: source,
          imageSrc: response.uri,
          files: filetemp,
        });
      }
    });
  }
  takephoto = () => {}
  submit = () => {}
  onClose2 = () => {
    this.setState({
      visible2: false,
    });
  }
  onImageChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }
  render() {
    const {
      devicename,
      deviceno,
      deviceproductor,
      val1,
      val2,
      val3,
      val4,
      val5,
      val6,
      val7,
    } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Accordion onChange={this.onChange} defaultActiveKey="0">
            <Accordion.Panel header="参比法对比测试仪">
              <List>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>仪器名称</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          devicename: text,
                        });
                      }}
                      value={devicename}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>仪器型号</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          deviceno: text,
                        });
                      }}
                      value={deviceno}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>仪器供应商</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          deviceproductor: text,
                        });
                      }}
                      value={deviceproductor}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
              </List>
            </Accordion.Panel>
            <Accordion.Panel header="烟尘比对监测">
              <List>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>对比测试仪原理</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val1: text,
                        });
                      }}
                      value={val1}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>CEMS分析仪原理</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val2: text,
                        });
                      }}
                      value={val2}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>参比三次均值</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val3: text,
                        });
                      }}
                      value={val3}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                    <Text style={styles.countBackground}>（mg/m3）</Text>
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>CEMS测定均值</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val4: text,
                        });
                      }}
                      value={val4}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                    <Text style={styles.countBackground}>（mg/m3）</Text>
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>公式</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                      }}
                      value={val5}
                      onFocus={() => {
                        this.setState({
                          visible2: true,
                        });
                      }}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>计算结果</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val6: text,
                        });
                      }}
                      value={val6}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>评价结果</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val7: text,
                        });
                      }}
                      value={val7}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
              </List>
            </Accordion.Panel>
            <Accordion.Panel header="SO2校准">
              <List>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>对比测试仪原理</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val1: text,
                        });
                      }}
                      value={val1}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>CEMS分析仪原理</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val2: text,
                        });
                      }}
                      value={val2}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>参比三次均值</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val3: text,
                        });
                      }}
                      value={val3}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                    <Text style={styles.countBackground}>（mg/m3）</Text>
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>CEMS测定均值</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val4: text,
                        });
                      }}
                      value={val4}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                    <Text style={styles.countBackground}>（mg/m3）</Text>
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>公式</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                      }}
                      value={val5}
                      onFocus={() => {
                        this.setState({
                          visible2: true,
                        });
                      }}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>计算结果</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val6: text,
                        });
                      }}
                      value={val6}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>评价结果</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val7: text,
                        });
                      }}
                      value={val7}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
              </List>
            </Accordion.Panel>
            <Accordion.Panel header="SO2比对监测">
              <List>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>对比测试仪原理</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val1: text,
                        });
                      }}
                      value={val1}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>CEMS分析仪原理</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val2: text,
                        });
                      }}
                      value={val2}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>参比三次均值</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val3: text,
                        });
                      }}
                      value={val3}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                    <Text style={styles.countBackground}>（mg/m3）</Text>
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>CEMS测定均值</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val4: text,
                        });
                      }}
                      value={val4}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                    <Text style={styles.countBackground}>（mg/m3）</Text>
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>公式</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                      }}
                      value={val5}
                      onFocus={() => {
                        this.setState({
                          visible2: true,
                        });
                      }}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>计算结果</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val6: text,
                        });
                      }}
                      value={val6}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>评价结果</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val7: text,
                        });
                      }}
                      value={val7}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
              </List>
            </Accordion.Panel>
            <Accordion.Panel header="NOx校准">
              <List>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>对比测试仪原理</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val1: text,
                        });
                      }}
                      value={val1}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>CEMS分析仪原理</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val2: text,
                        });
                      }}
                      value={val2}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>参比三次均值</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val3: text,
                        });
                      }}
                      value={val3}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                    <Text style={styles.countBackground}>（mg/m3）</Text>
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>CEMS测定均值</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val4: text,
                        });
                      }}
                      value={val4}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                    <Text style={styles.countBackground}>（mg/m3）</Text>
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>公式</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                      }}
                      value={val5}
                      onFocus={() => {
                        this.setState({
                          visible2: true,
                        });
                      }}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>计算结果</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val6: text,
                        });
                      }}
                      value={val6}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>评价结果</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val7: text,
                        });
                      }}
                      value={val7}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
              </List>
            </Accordion.Panel>
            <Accordion.Panel header="NOx比对监测">
              <List>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>对比测试仪原理</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val1: text,
                        });
                      }}
                      value={val1}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>CEMS分析仪原理</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val2: text,
                        });
                      }}
                      value={val2}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>参比三次均值</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val3: text,
                        });
                      }}
                      value={val3}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                    <Text style={styles.countBackground}>（mg/m3）</Text>
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>CEMS测定均值</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val4: text,
                        });
                      }}
                      value={val4}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                    <Text style={styles.countBackground}>（mg/m3）</Text>
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>公式</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                      }}
                      value={val5}
                      onFocus={() => {
                        this.setState({
                          visible2: true,
                        });
                      }}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>计算结果</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val6: text,
                        });
                      }}
                      value={val6}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>评价结果</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val7: text,
                        });
                      }}
                      value={val7}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
              </List>
            </Accordion.Panel>
            <Accordion.Panel header="O2比对监测">
              <List>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>对比测试仪原理</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val1: text,
                        });
                      }}
                      value={val1}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>CEMS分析仪原理</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val2: text,
                        });
                      }}
                      value={val2}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>参比三次均值</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val3: text,
                        });
                      }}
                      value={val3}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                    <Text style={styles.countBackground}>（mg/m3）</Text>
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>CEMS测定均值</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val4: text,
                        });
                      }}
                      value={val4}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                    <Text style={styles.countBackground}>（mg/m3）</Text>
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>公式</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                      }}
                      value={val5}
                      onFocus={() => {
                        this.setState({
                          visible2: true,
                        });
                      }}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>计算结果</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val6: text,
                        });
                      }}
                      value={val6}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>评价结果</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val7: text,
                        });
                      }}
                      value={val7}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
              </List>
            </Accordion.Panel>
            <Accordion.Panel header="流速比对监测">
              <List>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>对比测试仪原理</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val1: text,
                        });
                      }}
                      value={val1}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>CEMS分析仪原理</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val2: text,
                        });
                      }}
                      value={val2}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>参比三次均值</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val3: text,
                        });
                      }}
                      value={val3}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                    <Text style={styles.countBackground}>（mg/m3）</Text>
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>CEMS测定均值</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val4: text,
                        });
                      }}
                      value={val4}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                    <Text style={styles.countBackground}>（mg/m3）</Text>
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>公式</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                      }}
                      value={val5}
                      onFocus={() => {
                        this.setState({
                          visible2: true,
                        });
                      }}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>计算结果</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val6: text,
                        });
                      }}
                      value={val6}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>评价结果</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val7: text,
                        });
                      }}
                      value={val7}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
              </List>
            </Accordion.Panel>
            <Accordion.Panel header="温度比对监测">
              <List>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>对比测试仪原理</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val1: text,
                        });
                      }}
                      value={val1}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>CEMS分析仪原理</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val2: text,
                        });
                      }}
                      value={val2}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>参比三次均值</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val3: text,
                        });
                      }}
                      value={val3}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                    <Text style={styles.countBackground}>（mg/m3）</Text>
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>CEMS测定均值</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val4: text,
                        });
                      }}
                      value={val4}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                    <Text style={styles.countBackground}>（mg/m3）</Text>
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>公式</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                      }}
                      value={val5}
                      onFocus={() => {
                        this.setState({
                          visible2: true,
                        });
                      }}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>计算结果</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val6: text,
                        });
                      }}
                      value={val6}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
                <List.Item>
                  <View style={[styles.TextInputStyle]}>
                    <Text style={styles.countBackground}>评价结果</Text>
                    <TextInput
                      ref={ref => (this.passWordInput = ref)}
                      clearTextOnFocus={false}
                      blurOnSubmit={true}
                      keyboardType="default"
                      placeholderTextColor="gray"
                      placeholder=""
                      autoCapitalize="none"
                      editable={true}
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      clearButtonMode="always"
                      secureTextEntry={false}
                      onChangeText={text => {
                        // 动态更新组件内State记录密码
                        this.setState({
                          val7: text,
                        });
                      }}
                      value={val7}
                      style={{
                        width: SCREEN_WIDTH - 120,
                        marginLeft: 10,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginBottom: 3,
                        height: 21,
                        color: 'black',
                      }}
                    />
                  </View>
                </List.Item>
              </List>
            </Accordion.Panel>
            <Accordion.Panel header="校验结论">
              <List>
                <List.Item>
                  <TextareaItem
                    rows={5}
                    count={100}
                    placeholder={'总体校准和比对监测是否合格'}
                  />
                </List.Item>
                <List.Item>
                  <TextareaItem
                    rows={5}
                    count={100}
                    placeholder={
                      '如果总体校准和对比监测有不合格现象， 采取了哪些措施？计划还将采取什么措施？'
                    }
                  />
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion>
          <ImagePicker
            files={this.state.files}
            onChange={this.onImageChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={this.state.files.length < 5}
            multiple={this.state.multiple}
          />
          <WhiteSpace />
          <Button type="primary" inline={true} onClick={this.selectPhotoTapped}>
            现场拍照
          </Button>
          <WhiteSpace />
          <Button type="primary" inline={true} onClick={this.submit}>
            单据提交
          </Button>
          <WhiteSpace />
          <Modal
            popup={true}
            visible={this.state.visible2}
            animationType="slide-up"
            onClose={this.onClose2}
          >
            <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
              <List style={{ marginTop: 12 }}>
                <Text style={{ marginTop: 12 }}>公式</Text>
                <RadioItem
                  checked={this.state.part2Value === 1}
                  onChange={(event: any) => {
                    if (event.target.checked) {
                      this.setState({ part2Value: 1, val5: '相对误差' });
                    }
                  }}
                >
                  相对误差
                </RadioItem>
                <RadioItem
                  checked={this.state.part2Value === 2}
                  onChange={(event: any) => {
                    if (event.target.checked) {
                      this.setState({ part2Value: 2, val5: '绝对误差' });
                    }
                  }}
                >
                  绝对误差
                </RadioItem>
              </List>
            </View>
            <Button type="primary" inline={true} onClick={this.onClose2}>
              关闭
            </Button>
          </Modal>
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  TextInputStyle: {
    flexDirection: 'row',
    width: SCREEN_WIDTH - 50,
    borderBottomWidth: 0,
    borderBottomColor: 'gray',
    marginLeft: 10,
    marginRight: 20,
    marginBottom: 5,
  },
  countBackground: {
    fontSize: 12,
    marginTop: 3,
  },
});

//make this component available to the app
export default AttentionDetail;
