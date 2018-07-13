//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { NavigationActions } from '../../utils';
import {
  Card,
  WingBlank,
  WhiteSpace,
  InputItem,
  TextareaItem,
  Button,
  Steps,
} from 'antd-mobile-rn';
const Step = Steps.Step;

// create a component
@connect()
class TodoDetail extends Component {
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
    // this.props.dispatch(NavigationActions.navigate({ routeName: 'AttentionDetail' });
  }
  render() {
    const steps = [
      {
        title: '运维人',
        description: '小王',
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
        description: '小王 2018-6-12 12:32',
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

    return (
      <View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <WingBlank size="sm">
            <WhiteSpace size="lg" />
            <Card>
              <Card.Header
                title="任务信息"
                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              />
              <Card.Body>
                <InputItem value="2323102931" editable={false}>
                  任务单号
                </InputItem>
                <InputItem value="厂北场口" editable={false}>
                  排口
                </InputItem>
                <InputItem value="北京雪迪龙科技股份有限公司" editable={false}>
                  企业
                </InputItem>
                <InputItem value="北京市" editable={false}>
                  省份
                </InputItem>
                <InputItem value="北京市" editable={false}>
                  城市
                </InputItem>
                <InputItem value="数据审核" editable={false}>
                  任务来源
                </InputItem>
                <InputItem value="处理中" editable={false}>
                  任务状态
                </InputItem>
                <InputItem value="设备数据异常" editable={false}>
                  任务内容
                </InputItem>
                <InputItem value="小王" editable={false}>
                  创建人
                </InputItem>
                <InputItem value="创建时间" editable={false}>
                  创建时间
                </InputItem>
                <InputItem value="SDL_CEMS334" editable={false}>
                  设备类型
                </InputItem>
                <InputItem value="SDL" editable={false}>
                  设备品牌
                </InputItem>
                <InputItem value="SDL23001" editable={false}>
                  设备编号
                </InputItem>
                <InputItem value="SDL_CEMS334" editable={false}>
                  设备型号
                </InputItem>
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
                  <Button onClick={this.attentionDetailClick}>
                    气态分析仪运行状况检查记录表
                  </Button>
                  <WhiteSpace size="lg" />
                </WingBlank>
                <WingBlank size="sm">
                  <Button>备品备件更换记录</Button>
                  <WhiteSpace size="lg" />
                </WingBlank>
                <InputItem value="">处理人</InputItem>
                <InputItem value="2018-6-12 12:32" editable={false}>
                  处理时间
                </InputItem>
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
          <WingBlank size="sm">
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
          </WingBlank>
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
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default TodoDetail;
