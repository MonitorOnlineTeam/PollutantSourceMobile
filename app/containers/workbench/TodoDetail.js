//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { NavigationActions } from '../../utils';
import {
  Card,
  WingBlank,
  WhiteSpace,
  List,
  TextareaItem,
  Button,
  Steps,
  Checkbox,
  Modal,
} from 'antd-mobile-rn';
import { SCREEN_WIDTH, WINDOW_HEIGHT } from '../../config/globalsize';
import globalcolor from '../../config/globalcolor';

const Step = Steps.Step;
const CheckboxItem = Checkbox.CheckboxItem;
// create a component
@connect()
class TodoDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskno: '96658688955',
      pointname: '锅炉小号烟囱1',
      entname: '法电大唐(三门峡)城市供热有限公司',
      provice: '河南',
      city: '三门峡',
      source: '',
      status: '处理中',
      content: '设备数据异常',
      creator: '成云',
      createtime: '2018-06-12 09:00:00',
      devicetype: '便携式红外线烟气分析仪',
      devicebrand: '雪迪龙',
      deviceno: 'NO20170714010010',
      devicemodel: 'MODEL 3080',
      dealor: '',
      dealtime: '',
      modal1: false,
      formitem: [],
      checkBox1: true,
    };
  }

  static navigationOptions = ({ router, navigation }) => {
    return {
      title: '详情',
      tabBarLabel: '详情',
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
  goBack = () => {}
  attentionDetailClick = () => {
    this.props.dispatch(
      NavigationActions.navigate({ routeName: 'AttentionDetail' })
    );
  }
  addFormItemClick = key => e => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }
  onCheckItemChange = (val) => {
    const formitem = this.state.formitem;
    const index=formitem.findIndex(a=>a===val);
    if (index>-1) {
      formitem.splice(index);
    } else {
      formitem.push(val);
    }
    this.setState({ formitem: formitem });
  }
  render() {
    const steps = [
      {
        title: '运维人',
        description: '成云',
        status: 'process',
      },
      {
        title: '运维部经理',
        description: '李松桂',
        status: 'wait',
      },
    ].map((s, i) => (
      <Step
        key={i}
        title={s.title}
        status={s.status}
        description={s.description}
      />
    ));

    const steps1 = [
      {
        title: '创建任务单',
        description: '',
        status: 'process',
      },
      {
        title: '应急处理',
        description: '成云 2018-6-12 12:32',
        status: 'process',
      },
      {
        title: '校准',
        description: '',
        status: 'wait',
      },
      {
        title: '审核',
        description: '',
        status: 'wait',
      },
    ].map((s, i) => (
      <Step
        key={i}
        status={s.status}
        title={s.title}
        description={s.description}
      />
    ));
    const {
      taskno,
      pointname,
      entname,
      provice,
      city,
      source,
      status,
      content,
      creator,
      createtime,
      devicetype,
      devicebrand,
      deviceno,
      devicemodel,
      dealor,
      dealtime,
      formitem,
    } = this.state;

    const dataCheckboxItem = [
      { value: 5, label: 'SO2分析仪检修记录' },
      { value: 6, label: 'NOX分析仪检修记录' },
      { value: 7, label: '烟尘分析仪检修记录' },
    ];

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <WingBlank size="sm">
            <WhiteSpace size="lg" />
            <Card>
              <Card.Header
                title="任务信息"
                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              />
              <Card.Body>
                <View style={[styles.TextInputStyle]}>
                  <Text style={styles.countBackground}>任务单号</Text>
                  <TextInput
                    ref={ref => (this.passWordInput = ref)}
                    clearTextOnFocus={false}
                    blurOnSubmit={true}
                    keyboardType="default"
                    placeholderTextColor="gray"
                    placeholder=""
                    autoCapitalize="none"
                    editable={false}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    clearButtonMode="always"
                    secureTextEntry={false}
                    onChangeText={text => {
                      // 动态更新组件内State记录密码
                      this.setState({
                        taskno: text,
                      });
                    }}
                    value={taskno}
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
                <View style={[styles.TextInputStyle]}>
                  <Text style={styles.countBackground}>排口</Text>
                  <TextInput
                    ref={ref => (this.passWordInput = ref)}
                    clearTextOnFocus={false}
                    blurOnSubmit={true}
                    keyboardType="default"
                    placeholderTextColor="gray"
                    placeholder=""
                    autoCapitalize="none"
                    editable={false}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    clearButtonMode="always"
                    secureTextEntry={false}
                    onChangeText={text => {
                      // 动态更新组件内State记录密码
                      this.setState({
                        pointname: text,
                      });
                    }}
                    value={pointname}
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
                <View style={[styles.TextInputStyle]}>
                  <Text style={styles.countBackground}>企业</Text>
                  <TextInput
                    ref={ref => (this.passWordInput = ref)}
                    clearTextOnFocus={false}
                    blurOnSubmit={true}
                    keyboardType="default"
                    placeholderTextColor="gray"
                    placeholder=""
                    autoCapitalize="none"
                    editable={false}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    clearButtonMode="always"
                    secureTextEntry={false}
                    onChangeText={text => {
                      // 动态更新组件内State记录密码
                      this.setState({
                        entname: text,
                      });
                    }}
                    value={entname}
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
                <View style={[styles.TextInputStyle]}>
                  <Text style={styles.countBackground}>省份</Text>
                  <TextInput
                    ref={ref => (this.passWordInput = ref)}
                    clearTextOnFocus={false}
                    blurOnSubmit={true}
                    keyboardType="default"
                    placeholderTextColor="gray"
                    placeholder=""
                    autoCapitalize="none"
                    editable={false}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    clearButtonMode="always"
                    secureTextEntry={false}
                    onChangeText={text => {
                      // 动态更新组件内State记录密码
                      this.setState({
                        provice: text,
                      });
                    }}
                    value={provice}
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
                <View style={[styles.TextInputStyle]}>
                  <Text style={styles.countBackground}>城市</Text>
                  <TextInput
                    ref={ref => (this.passWordInput = ref)}
                    clearTextOnFocus={false}
                    blurOnSubmit={true}
                    keyboardType="default"
                    placeholderTextColor="gray"
                    placeholder=""
                    autoCapitalize="none"
                    editable={false}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    clearButtonMode="always"
                    secureTextEntry={false}
                    onChangeText={text => {
                      // 动态更新组件内State记录密码
                      this.setState({
                        city: text,
                      });
                    }}
                    value={city}
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
                <View style={[styles.TextInputStyle]}>
                  <Text style={styles.countBackground}>任务来源</Text>
                  <TextInput
                    ref={ref => (this.passWordInput = ref)}
                    clearTextOnFocus={false}
                    blurOnSubmit={true}
                    keyboardType="default"
                    placeholderTextColor="gray"
                    placeholder=""
                    autoCapitalize="none"
                    editable={false}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    clearButtonMode="always"
                    secureTextEntry={false}
                    onChangeText={text => {
                      // 动态更新组件内State记录密码
                      this.setState({
                        source: text,
                      });
                    }}
                    value={source}
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
                <View style={[styles.TextInputStyle]}>
                  <Text style={styles.countBackground}>任务状态</Text>
                  <TextInput
                    ref={ref => (this.passWordInput = ref)}
                    clearTextOnFocus={false}
                    blurOnSubmit={true}
                    keyboardType="default"
                    placeholderTextColor="gray"
                    placeholder=""
                    autoCapitalize="none"
                    editable={false}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    clearButtonMode="always"
                    secureTextEntry={false}
                    onChangeText={text => {
                      // 动态更新组件内State记录密码
                      this.setState({
                        status: text,
                      });
                    }}
                    value={status}
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
                <View style={[styles.TextInputStyle]}>
                  <Text style={styles.countBackground}>任务内容</Text>
                  <TextInput
                    ref={ref => (this.passWordInput = ref)}
                    clearTextOnFocus={false}
                    blurOnSubmit={true}
                    keyboardType="default"
                    placeholderTextColor="gray"
                    placeholder=""
                    autoCapitalize="none"
                    editable={false}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    clearButtonMode="always"
                    secureTextEntry={false}
                    onChangeText={text => {
                      // 动态更新组件内State记录密码
                      this.setState({
                        content: text,
                      });
                    }}
                    value={content}
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
                <View style={[styles.TextInputStyle]}>
                  <Text style={styles.countBackground}>创建人</Text>
                  <TextInput
                    ref={ref => (this.passWordInput = ref)}
                    clearTextOnFocus={false}
                    blurOnSubmit={true}
                    keyboardType="default"
                    placeholderTextColor="gray"
                    placeholder=""
                    autoCapitalize="none"
                    editable={false}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    clearButtonMode="always"
                    secureTextEntry={false}
                    onChangeText={text => {
                      // 动态更新组件内State记录密码
                      this.setState({
                        creator: text,
                      });
                    }}
                    value={creator}
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
                <View style={[styles.TextInputStyle]}>
                  <Text style={styles.countBackground}>创建时间</Text>
                  <TextInput
                    ref={ref => (this.passWordInput = ref)}
                    clearTextOnFocus={false}
                    blurOnSubmit={true}
                    keyboardType="default"
                    placeholderTextColor="gray"
                    placeholder=""
                    autoCapitalize="none"
                    editable={false}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    clearButtonMode="always"
                    secureTextEntry={false}
                    onChangeText={text => {
                      // 动态更新组件内State记录密码
                      this.setState({
                        createtime: text,
                      });
                    }}
                    value={createtime}
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
                <View style={[styles.TextInputStyle]}>
                  <Text style={styles.countBackground}>设备类型</Text>
                  <TextInput
                    ref={ref => (this.passWordInput = ref)}
                    clearTextOnFocus={false}
                    blurOnSubmit={true}
                    keyboardType="default"
                    placeholderTextColor="gray"
                    placeholder=""
                    autoCapitalize="none"
                    editable={false}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    clearButtonMode="always"
                    secureTextEntry={false}
                    onChangeText={text => {
                      // 动态更新组件内State记录密码
                      this.setState({
                        devicetype: text,
                      });
                    }}
                    value={devicetype}
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
                <View style={[styles.TextInputStyle]}>
                  <Text style={styles.countBackground}>设备品牌</Text>
                  <TextInput
                    ref={ref => (this.passWordInput = ref)}
                    clearTextOnFocus={false}
                    blurOnSubmit={true}
                    keyboardType="default"
                    placeholderTextColor="gray"
                    placeholder=""
                    autoCapitalize="none"
                    editable={false}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    clearButtonMode="always"
                    secureTextEntry={false}
                    onChangeText={text => {
                      // 动态更新组件内State记录密码
                      this.setState({
                        devicebrand: text,
                      });
                    }}
                    value={devicebrand}
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
                <View style={[styles.TextInputStyle]}>
                  <Text style={styles.countBackground}>设备编号</Text>
                  <TextInput
                    ref={ref => (this.passWordInput = ref)}
                    clearTextOnFocus={false}
                    blurOnSubmit={true}
                    keyboardType="default"
                    placeholderTextColor="gray"
                    placeholder=""
                    autoCapitalize="none"
                    editable={false}
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
                <View style={[styles.TextInputStyle]}>
                  <Text style={styles.countBackground}>设备型号</Text>
                  <TextInput
                    ref={ref => (this.passWordInput = ref)}
                    clearTextOnFocus={false}
                    blurOnSubmit={true}
                    keyboardType="default"
                    placeholderTextColor="gray"
                    placeholder=""
                    autoCapitalize="none"
                    editable={false}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    clearButtonMode="always"
                    secureTextEntry={false}
                    onChangeText={text => {
                      // 动态更新组件内State记录密码
                      this.setState({
                        devicemodel: text,
                      });
                    }}
                    value={devicemodel}
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
              </Card.Body>
              <Card.Footer content="" />
            </Card>
            <WhiteSpace size="lg" />
          </WingBlank>
          <WingBlank size="sm">
            <WhiteSpace size="lg" />
            <Card>
              <Card.Header
                title="应急处理"
                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              />
              <Card.Body>
                <TextareaItem rows={5} count={100} placeholder={'处理说明'} />
                <WingBlank size="sm">
                  <WhiteSpace size="lg" />
                  <Button onClick={this.attentionDetailClick}>
                    <Text style={styles.countBackground}>
                      气态分析仪运行状况检查记录表
                    </Text>
                  </Button>
                  <WhiteSpace size="lg" />
                </WingBlank>
                <WingBlank size="sm">
                  <Button>
                    <Text style={styles.countBackground}>备品备件更换记录</Text>
                  </Button>
                  <WhiteSpace size="lg" />
                </WingBlank>
                {formitem.map(i => (
                  <WingBlank size="sm" key={i}>
                    <Button>
                      <Text style={styles.countBackground}>
                        {dataCheckboxItem.findIndex(a => a.value === i) > -1
                          ? dataCheckboxItem.find(a => a.value === i).label
                          : ''}
                      </Text>
                    </Button>
                    <WhiteSpace size="lg" />
                  </WingBlank>
                ))}
                <WingBlank size="sm">
                  <Button onClick={this.addFormItemClick('modal1')}>
                    <Text style={styles.countBackground}>+</Text>
                  </Button>
                  <WhiteSpace size="lg" />
                </WingBlank>
                <View style={[styles.TextInputStyle]}>
                  <Text style={styles.countBackground}>处理人</Text>
                  <TextInput
                    ref={ref => (this.passWordInput = ref)}
                    clearTextOnFocus={false}
                    blurOnSubmit={true}
                    keyboardType="default"
                    placeholderTextColor="gray"
                    placeholder=""
                    autoCapitalize="none"
                    editable={false}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    clearButtonMode="always"
                    secureTextEntry={false}
                    onChangeText={text => {
                      // 动态更新组件内State记录密码
                      this.setState({
                        dealor: text,
                      });
                    }}
                    value={dealor}
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
                <View style={[styles.TextInputStyle]}>
                  <Text style={styles.countBackground}>处理时间</Text>
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
                        dealtime: text,
                      });
                    }}
                    value={dealtime}
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
              </Card.Body>
              <Card.Footer content="" />
            </Card>
            <WhiteSpace size="lg" />
          </WingBlank>
          <WingBlank size="sm">
            <WhiteSpace size="lg" />
            <Card>
              <Card.Header
                title="审核"
                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              />
              <Card.Body>
                <WingBlank size="lg">
                  <Steps direction="horizontal" size="small">
                    {steps}
                  </Steps>
                </WingBlank>
              </Card.Body>
              <Card.Footer content="" />
            </Card>
            <WhiteSpace size="lg" />
          </WingBlank>
          {/* <WingBlank size="sm">
            <WhiteSpace size="lg" />
            <Card>
              <Card.Header
                title="工作日志"
                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              />
              <Card.Body />
              <Card.Footer content="" />
            </Card>
            <WhiteSpace size="lg" />
          </WingBlank> */}
          <WingBlank size="sm">
            <WhiteSpace size="lg" />
            <Card>
              <Card.Header
                title="流程图"
                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              />
              <Card.Body>
                <WingBlank size="lg">
                  <Steps size="small">{steps1}</Steps>
                </WingBlank>
              </Card.Body>
              <Card.Footer content="" />
            </Card>
            <WhiteSpace size="lg" />
          </WingBlank>
        </ScrollView>
        <Modal
          visible={this.state.modal1}
          transparent
          maskClosable={false}
          onClose={this.onClose('modal1')}
          title="选择表单"
          footer={[
            {
              text: '确定',
              onPress: () => {
                console.log('ok');
                this.onClose('modal1')();
              },
            },
          ]}
          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
          <List style={{ marginTop: 12 }}>
            {dataCheckboxItem.map(i => (
              <CheckboxItem
                key={i.value}
                checked={
                  formitem.findIndex(a => a === i.value) > -1
                }
                onChange={() => this.onCheckItemChange(i.value)}
              >
                {i.label}
              </CheckboxItem>
            ))}
          </List>
        </Modal>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    /*  flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', */
  },
  TextInputStyle: {
    flexDirection: 'row',
    width: SCREEN_WIDTH - 50,
    borderBottomWidth: 0,
    borderBottomColor: 'gray',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
  },
  countBackground: {
    fontSize: 12,
    marginTop: 3,
  },
});

//make this component available to the app
export default TodoDetail;
