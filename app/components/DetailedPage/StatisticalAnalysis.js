import React, { Component } from 'react';
import { View, Text,StyleSheet,Image ,TouchableOpacity} from 'react-native';

import { SCREEN_WIDTH } from '../../config/globalsize';
import { Grid } from 'antd-mobile-rn';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { WhiteSpace, WingBlank } from 'antd-mobile-rn';
import { NavigationActions } from '../../utils';
/*
 * @Description:统计分析 .
 */
@connect()
export default class StatisticalAnalysis extends Component {
    
    static navigationOptions = ({ router, navigation }) => {
        return {
          title: '统计分析',
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: '#4f6aea' },
          
          headerLeft: (
            <Text
              onPress={() => {
                navigation.dispatch(NavigationActions.back());
              }}
              style={{ marginLeft: 5, width: 32, height: 32, textAlign: 'center' }}
            >
              <Icon name={'angle-left'} size={32} style={{ color: '#ffffff' }} />
            </Text>
          ),
        };
      }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        {/*主模块 */}
        <View style={[styles.MainView]}>
            <WhiteSpace size="sm"/>
            {/* 状态统计 */}
            <View style={{flexDirection:"row",alignItems:"center"}}>
            <Image
                style={{ width: 21, height: 21, }}
           
                source={require('../../images/zttj.png')}
                />
                  <WingBlank size="md"/>
            <Text style={{fontSize:15}}>状态统计</Text>
            </View>
            <WhiteSpace size="lg"/>
           <View style={{flexDirection:"row",flexWrap:"wrap"}}>
        
            <TouchableOpacity style={[styles.flexStyle,{alignItems:"center",justifyContent:"center"}]}
             onPress={(event) => {

                this.props.dispatch(
                    NavigationActions.navigate({
                        routeName: 'OperationCalendar'
                    })
                );
            }}
            
            >
            <WhiteSpace />
             <Image
              style={{ width: 20, height: 20, }}
              tintColor="#7694F4"
              source={require('../../images/ywrl.png')}
            />
               <WhiteSpace size="sm"/>
              <Text style={{fontSize:12}}>运维日历</Text>
         
            </TouchableOpacity>
            <WingBlank size="md"/>
            <TouchableOpacity style={[styles.flexStyle,{alignItems:"center",justifyContent:"center"}]}
                onPress={(event) => {

                this.props.dispatch(
                    NavigationActions.navigate({
                        routeName: 'WeeklyCalendar'
                    })
                );
            }}
            >
            <WhiteSpace size="sm"/>
             <Image
              style={{ width: 20, height: 20, }}
              tintColor="#7AD48A"
              source={require('../../images/ryzl.png')}
            />
               <WhiteSpace size="sm"/>
              <Text style={{fontSize:12}}>人员周历</Text>
         
            </TouchableOpacity>
            <WingBlank size="md"/>

            <TouchableOpacity style={[styles.flexStyle,{alignItems:"center",justifyContent:"center"}]}>
            <WhiteSpace size="sm" />
             <Image
              style={{ width: 20, height: 20, }}
              tintColor="#B289EB"
              source={require('../../images/yhpj.png')}
            />
               <WhiteSpace size="sm" />
              <Text style={{fontSize:12}}>用户评价</Text>
         
            </TouchableOpacity>
            <WingBlank size="md" />
           </View>

            <WhiteSpace size="lg" />
            {/* 统计分析 */}
            <View style={{flexDirection:"row",alignItems:"center"}}>
            <Image
                style={{ width: 21, height: 21, }}
           
                source={require('../../images/tjfx.png')}
                />
                  <WingBlank size="md"/>
            <Text style={{fontSize:15}}>统计分析</Text>
            </View>
            <WhiteSpace size="lg"/>
           <View style={{flexDirection:"row",flex:1,flexWrap:"wrap"}}>
        
            <TouchableOpacity style={[styles.flexStyle,{alignItems:"center",justifyContent:"center"}]}>
            <WhiteSpace />
             <Image
              style={{ width: 20, height: 20, }}
              tintColor="#F4B8F7"
              source={require('../../images/qyfx.png')}
            />
               <WhiteSpace size="sm"/>
              <Text style={{fontSize:12}}>企业分析</Text>
         
            </TouchableOpacity>
            <WingBlank size="md"/>
            <TouchableOpacity style={[styles.flexStyle,{alignItems:"center",justifyContent:"center"}]}>
            <WhiteSpace size="sm"/>
             <Image
              style={{ width: 20, height: 20, }}
              tintColor="#F9AE85"
              source={require('../../images/ryfx.png')}
            />
               <WhiteSpace size="sm"/>
              <Text style={{fontSize:12}}>人员分析</Text>
         
            </TouchableOpacity>
         
            <WingBlank size="md" />

            
            
            </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    MainView: {
      width: '96%',

      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 15,
      borderRadius: 6,
      alignSelf: 'center',
      marginTop: 6,
      marginBottom: 3,
      flex: 1,

    },
    flexStyle:
    {
 
         height:90,
         borderRadius: 6,
       width:"30%",      
        backgroundColor: "#FFFFFF",
        shadowOffset: { w: 0, h: 50 },
        shadowRadius: 3,
        shadowOpacity: 0.1,
        elevation: 1,
    }
  
  });