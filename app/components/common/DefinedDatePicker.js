//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PickerView } from 'antd-mobile';
import {connect} from 'react-redux';

import {years,months,days31,days28,days30,days29,hours} from '../../config/globalconst';
import { createAction } from '../../utils/index';

// create a component
@connect(({datapreview})=>({searchType:datapreview.searchType,seasons:datapreview.seasons,value:datapreview.searchDateValue}))
class DefinedDatePicker extends Component {

    onChange = (value) => {
        let year = parseInt(value[0]); 
        let month = parseInt(value[1]);        
        switch(month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
            console.log('31天');
            this.props.seasons[2] = days31;
            // this.setState({
            //     seasons:this.state.seasons
            // });
            break;
            case 2:
            if((value[0]%100==0&&value%400==0)||(value%100!=0&&value[0]%4==0)){
                console.log('29天');
                this.props.seasons[2] = days29;
                // this.setState({
                //     seasons:this.state.seasons
                // });
            } else{
                console.log('28天');
                this.props.seasons[2] = days28;
                // this.setState({
                //     seasons:this.state.seasons
                // });
            }
            break;
            case 4:
            case 6:
            case 9:
            case 11:
            this.props.seasons[2] = days30;
            // this.setState({
            //     seasons:this.state.seasons
            // });
            console.log('30天');
            break;
        }
        this.props.value[0] = value[0];
        this.props.value[1] = value[1];
        this.props.value[2] = value[2];
        // if (this.props.searchType == 'xiaoshi'){
        if (this.props.mGetSearchType() == 'xiaoshi'){
            if (this.props.value.length==3){
                this.props.value.splice(3,0,value[3]);
            } else{
                this.props.value[3] = value[3];
            }
            
        // } else if (this.props.searchType == 'ri') {
        } else if (this.props.mGetSearchType() == 'ri') {
            this.props.value[3] = '00';
        }
        this.setState({
          value,
        });
      }

    constructor(props){
        super(props);
        
        // if(this.props.searchType=='ri'){
            let searchType = this.props.mGetSearchType();
        if(this.props.mGetSearchType()=='ri'){
            if (this.props.seasons.length == 0) {
                this.props.seasons.splice(0,0,years);
                this.props.seasons.splice(1,0,months);
                this.props.seasons.splice(2,0,days31);
                // this.props.dispatch(createAction('datapreview/setSeasons')(this.props.seasons));
            } else if (this.props.seasons.length == 4) {
                this.props.seasons.splice(3,1);
            }
            
            // this.state={
            //     seasons:[
            //         years,
            //         months,
            //         days31
            //     ],
            //     value:'', 
            // }
            
        } else {
            if (this.props.seasons.length == 0) {
                this.props.seasons.splice(0,0,years);
                this.props.seasons.splice(1,0,months);
                this.props.seasons.splice(2,0,days31);
                this.props.seasons.splice(3,0,hours);
                // this.props.dispatch(createAction('datapreview/setSeasons')(this.props.seasons));
            } else if (this.props.seasons.length == 3) {
                this.props.seasons.splice(3,0,hours);
            }
            // this.state={
            //     seasons:[
            //         years,
            //         months,
            //         days31,
            //         hours
            //     ],
            //     value:'', 
            // }
        }
        if (this.props.value.length == 0) {
            var myDate = new Date();
            this.props.value[0] = myDate.getFullYear();
            this.props.value[1] = myDate.getMonth()+1;
            this.props.value[2] = (myDate.getDate()<10?'0'+myDate.getDate():myDate.getDate())+'';
            this.props.value[3] = (myDate.getHours()<10?'0'+myDate.getHours():myDate.getHours())+'';
            
            this.state = {
                value:[myDate.getFullYear()+'',myDate.getMonth()+1+'',
                (myDate.getDate()<10?'0'+myDate.getDate():myDate.getDate())+'',
                (myDate.getHours()<10?'0'+myDate.getHours():myDate.getHours())+''],
            };
        } else{
            this.state = {
                value:[this.props.value[0]+'',this.props.value[1]+'',this.props.value[2]+'',this.props.value[3]+''],
            };
        }
        
        
        
    }
    render() {
        return (
            <PickerView
                onChange={this.onChange}
                onScrollChange={this.onScrollChange}
                value={this.state.value}
                data={this.props.seasons}
                cascade={false}
            />
        );
    }

    setPickerState(type){
        let seasons = this.state.seasons;
        if (type=='ri') {
            if (this.state.seasons.length == 4){
                seasons = this.state.seasons.splice(3,1);
                this.setState(seasons);
            }
        } else {
            if(this.state.seasons == 3) {
                seasons = this.state.seasons.splice(3,0,hours);
                this.setState(seasons);
            }
        }
    };
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default DefinedDatePicker;
