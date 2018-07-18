import React, { PureComponent } from 'react';
import { ScrollView, View, Text, ListView, Spin } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import pinyin from 'pinyin';
import Head from '../components/common/alphabetaList/head';
import MainList from '../components/common/alphabetaList/mainList';
import AlphabetaList from '../components/common/alphabetaList/alphabetaList';
import py from '../components/common/alphabetaList/py';
import PhoneList from '../Data/PhoneList.json';
import LoadingComponent from '../components/common/LoadingComponent';
import { NavigationActions } from '../utils';

class MyPhoneList extends PureComponent {
  static navigationOptions = ({ router, navigation }) => {
    return {
      title: '通讯录',
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#4f6aea' },
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
    this.state = {
      loading: true,
      dataSource: this.ds.cloneWithRows([]),
      headHeight: 0,
      functionHeight: 0,
    };
  }
  //constructor
  componentWillMount() {
    setTimeout(() => {
      const temp = this.JsonSort(PhoneList, 'User_Name');
      const data = py(temp);
      this.setState({
        loading: false,
        dataSource: this.ds.cloneWithRows(data),
      });
    }, 1000);
  }
  getScroll = () => this.refs.myScroll

  changeFunctionHeight = h => {
    this.setState({ functionHeight: h });
  }

  changeHeadHeight = h => {
    this.setState({ headHeight: h });
  }
  JsonSort = (array, key) =>
    array.sort((a, b) => {
      if (a && b && a[key] && b[key]) {
        const x = pinyin(a[key].toLowerCase());
        const y = pinyin(b[key].toLowerCase());
        return x < y ? -1 : x > y ? 1 : 0;
      }
    })
  ds = new ListView.DataSource({ rowHasChanged: (v1, v2) => v1 !== v2 })
  render() {
    if (this.state.loading) {
      return <LoadingComponent Message="正在努力加载中" />;
    } else {
      return (
        <View>
          <Head
            headHeight={46}
            changeHeadHeight={e => this.changeHeadHeight(e)}
          />
          <ScrollView bounces={false} ref="myScroll">
            <MainList dataSource={this.state.dataSource} />
          </ScrollView>
          <AlphabetaList
            scroll={() => this.getScroll()}
            headHeight={this.state.headHeight}
            functionHeight={this.state.functionHeight}
          />
        </View>
      );
    }
  }
}
export default MyPhoneList;
