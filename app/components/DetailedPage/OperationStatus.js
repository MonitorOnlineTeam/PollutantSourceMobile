import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { NavigationActions } from '../../utils';
import { WhiteSpace, WingBlank, DatePicker, List, Carousel } from 'antd-mobile-rn';
import OperationStatusSlide from '../Assembly/OperationStatusSlide';
import OperationStatusModular from '../Assembly/OperationStatusModular';

/*
 * @Description: 运维状况.
 */
export default class OperationStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const personss = [{ entName: "首钢京唐", Total: "120", plan: "100", task: "100", check: "120", hour: "5H", overdue: "12", transmissionEfficiency: "50%", transmissionRate: "50%", effectiveRate: "50%" },
    { entName: "首钢京唐", Total: "120", plan: "100", task: "100", check: "120", hour: "5H", overdue: "12", transmissionEfficiency: "50%", transmissionRate: "50%", effectiveRate: "50%" },
    { entName: "首钢京唐", Total: "120", plan: "100", task: "100", check: "120", hour: "5H", overdue: "12", transmissionEfficiency: "50%", transmissionRate: "50%", effectiveRate: "50%" }];
    const persons = [{ effective: "91%", outNumber: 11, operatioNumber: "1339/1344" },
    { effective: "91%", outNumber: 11, operatioNumber: "1339/1344" },
    { effective: "91%", outNumber: 11, operatioNumber: "1339/1344" },
    { effective: "91%", outNumber: 11, operatioNumber: "1339/1344" }];
    return (
      <View style={{ height: "100%" }}>
        <View style={styles.MainView}>

          <Carousel
            style={styles.wrapper}
            selectedIndex={2}
            autoplay={false}
            infinite={false}
            slideWidth={0.8}
            styles={{}}
          >
            {

              persons.map((item, key) => {
                return (
                  <OperationStatusSlide
                    key={key}
                    effective={item.effective}
                    outNumber={item.outNumber}
                    operatioNumber={item.operatioNumber}
                  ></OperationStatusSlide>);

              })
            }
          </Carousel>
        </View>

        <View style={[styles.MainView, { flexDirection: "row", alignSelf: "center", alignItems: "center", justifyContent: "center" }]} >

          <Image
            style={{ width: 15, height: 15 }}
            tintColor="#FF9F69"
            source={require('../../images/cs.png')}
          />
          <WingBlank size="sm" />
          <Text>传输有效率</Text>

          <WingBlank size="lg" />

          <WingBlank size="lg" /><WingBlank size="lg" />
          <Image
            style={{ width: 15, height: 15 }}
            tintColor="#87BC60"
            source={require('../../images/sx.png')}
          />
          <WingBlank size="sm" />
          <Text>筛选</Text>


        </View>
        <ScrollView style={styles.MainView}>{
          personss.map((item, key) => {


            return (<OperationStatusModular
            key={key}
              entName={item.entName}
              Total={item.Total}
              plan={item.plan}
              task={item.task}
              check={item.check}
              hour={item.hour}
              overdue={item.overdue}
              transmissionEfficiency={item.transmissionEfficiency}
              transmissionRate={item.transmissionRate}
              effectiveRate={item.effectiveRate}
            >
            </OperationStatusModular>);
          })
        }
        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({

  MainView: {
    width: '96%',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 1,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 1,
   marginBottom: 3,

  },
  TitleImg: {
    width: 14,
    height: 14,
    marginRight: 10,
  },

  wrapper: {

    backgroundColor: 'rgba(255, 255, 255, 0)',

  },
});