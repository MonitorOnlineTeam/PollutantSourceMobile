import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { SCREEN_WIDTH } from '../../config/globalsize';
import CenterButton from '../Assembly/CenterButton';
import { Checkbox, List, WhiteSpace, Modal, Radio, WingBlank } from 'antd-mobile-rn';
import EarlyWarningCard from '../Assembly/EarlyWarningCard';
const RadioItem = Radio.RadioItem;
/*
 * @Description: 预警信息.
 */
export default class EarlyWarningInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
       checkBox1: false, checkBox2: false, checkBox3: false,
      visible: false, part1Value: 1,
      part2Value: 1,
    };
  }
  onClose = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const persons = [
      { name:"大唐集团-废气排口1",time:"2018年9月19日 10:59:32~2018年9月19日 10:59:24",type:"对比预警" ,c: '11', content: "烟气分析仪型号EMS168781数据发生较大变化",ifchicked:"1" },
      { name:"大唐集团-废气排口2",time:"2018年9月19日 10:59:32~2018年9月19日 10:59:24",type:"对比预警" ,c: '12', content: "烟气分析仪型号EMS168782数据发生较大变化",ifchicked:"1" },
      { name:"大唐集团-废气排口3",time:"2018年9月19日 10:59:32~2018年9月19日 10:59:24",type:"对比预警" ,c: '13', content: "烟气分析仪型号EMS168783数据发生较大变化",ifchicked:"1"},
      { name:"大唐集团-废气排口4",time:"2018年9月19日 10:59:32~2018年9月19日 10:59:24",type:"对比预警" ,c: '14', content: "烟气分析仪型号EMS168784数据发生较大变化",ifchicked:"1" },
      { name:"大唐集团-废气排口5",time:"2018年9月19日 10:59:32~2018年9月19日 10:59:24",type:"对比预警" ,c: '15', content: "烟气分析仪型号EMS168785数据发生较大变化",ifchicked:"0" },
      { name:"大唐集团-废气排口6",time:"2018年9月19日 10:59:32~2018年9月19日 10:59:24",type:"对比预警" ,c: '16', content: "烟气分析仪型号EMS168786数据发生较大变化",ifchicked:"0" },
      { name:"大唐集团-废气排口7",time:"2018年9月19日 10:59:32~2018年9月19日 10:59:24",type:"对比预警" ,c: '17', content: "烟气分析仪型号EMS168787数据发生较大变化",ifchicked:"0" },
      { name:"大唐集团-废气排口8",time:"2018年9月19日 10:59:32~2018年9月19日 10:59:24",type:"对比预警" ,c: '18', content: "烟气分析仪型号EMS168788数据发生较大变化",ifchicked:"0" },
      { name:"大唐集团-废气排口9",time:"2018年9月19日 10:59:32~2018年9月19日 10:59:24",type:"对比预警" ,c: '19', content: "烟气分析仪型号EMS168789数据发生较大变化",ifchicked:"0" },
  
  ];
    return (
      <View style={{ backgroundColor: "#F1F4F9", width: SCREEN_WIDTH }}>
        <ScrollView style={{ marginBottom: "1.5%",height: "90%"}}>
            {
              persons.map((item,key)=>
              {
                  return(
                    <TouchableOpacity
                    key={key}
              >
                    {
                                        
                        <EarlyWarningCard   
                        chicked={item.ifchicked}                  
                        title={item.name}
                        dateTime={item.time}
                        number={item.c}
                        alarmType={item.type}
                        contentTexts={item.content}
                      ></EarlyWarningCard>
                    }
                    </TouchableOpacity>
                  );

              })
            }
       
            

        </ScrollView>
        {/* 对话框 */}
        <Modal
          style={{ borderRadius: 10, backgroundColor: 'rgba(255, 255, 255, 0.0)', position: "absolute" }}
          transparent={true}
          closable={false}
          onClose={this.onClose}
          maskClosable={true}
          visible={this.state.visible}
          modalVisible
        >
          <View style={{
            width: 80, height: 80, borderRadius: 100, backgroundColor: "#C0D4EF",
            alignSelf: "center", top: 35, zIndex: 99,
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Image
              style={{ width: 20, height: 20, }}
              tintColor="#FFFFFF"
              source={require('../../images/dg.png')}
            />
          </View>
          <View style={{
            paddingTop: "10%",
            paddingLeft: "5%",
            paddingRight: "5%",
            paddingBottom: "1%",
            backgroundColor: "#ffffff",
            borderRadius: 10
          }}>

            <View style={{ borderBottomColor: "#E3E3E3",  padding: 15,alignSelf: "center", }}>
              <Text style={{ color: "#000000", fontSize: 15 }}>共选中
              <Text style={{ color: "#ff0000" }}>3
                  </Text>
                条数据
          </Text>
            </View>
            <View style={{  padding: 12 ,alignSelf: "center",}}>
              <Radio
                checked={this.state.part1Value === 1}
                onChange={(event) => {
                  if (event.target.checked) {
                    this.setState({ part1Value: 1 });
                  }
                }}
              
                style={{ 
              
              }}
              >
                <WingBlank size="sm" /><Text style={{color:"#078FE9"}}>有问题生成应急任务单</Text>
              </Radio>
            </View>
            <View style={{  padding: 12 ,alignSelf: "center",}}>
              <Radio
                checked={this.state.part1Value === 2}
                onChange={(event) => {
                  if (event.target.checked) {
                    this.setState({ part1Value: 2 });
                  }
                }}
                style={{ }}
              >
                <WingBlank size="sm" /><Text style={{color:"#078FE9"}}>无问题并生成反馈单</Text>
              </Radio>

            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <Text style={{}}>备注：</Text>
              <TextInput style={{ borderColor: "#E3E3E3", borderWidth: 0.8, width: "80%" }} multiline={true} placeholder=""
                underlineColorAndroid="transparent"
                clearButtonMode="always"
                maxLength={100}
              >
              </TextInput>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <TouchableOpacity onPress={() => { this.onClose(); }}
                style={{ backgroundColor: "#4BB3F0", borderRadius: 50, height: 35, width: "100%", justifyContent: "center" }}>
                <Text style={{ color: "#FFFFFF", alignSelf: "center", justifyContent: "center", fontSize: 14 }}>
                  确定
          </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View>
        <CenterButton title={'核实'} bgColor={'#2196F3'} TColor={'#FFFFFF'} click={() => {
          this.setState({ visible: true });
        }}></CenterButton>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainView: {
    width: '96%',
    backgroundColor: "#FFFFFF",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 6,
    marginBottom: 3,
    shadowColor: "#E3E3E3",
    shadowOffset: { w: 0, h: 50 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  flexStyle:
  {
    marginRight: "2%"
  },
  TitleImg: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  TitleText: {
    color: '#3F3F3F',
    fontSize: 14
  },
  ContentText: {
    fontSize: 13,
    color: "#000000",
    lineHeight: 24,


  },
  SpecificView:
  {

    marginLeft: 30
  },
  RowView:
  {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

});