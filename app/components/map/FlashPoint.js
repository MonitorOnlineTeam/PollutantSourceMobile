//import liraries
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';

// create a component
let timer,
  animatieContinue = true;
class FlashPoint extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      borderWidth: new Animated.Value(0),
      animatieContinue: true,
    };

    // 每1000毫秒对Image状态做一次取反操作
    // timer = setInterval(() => {
    //     if (this) {
    //         this.setState(previousState => {
    //             console.log('setInterval');
    //             if (previousState.borderWidth<6) {
    //             return { borderWidth: previousState.borderWidth+1 };
    //             } else {
    //             return { borderWidth: 0 };
    //             }

    //         });
    //     } else {
    //         clearInterval(timer);
    //     }
    // }, 80);
  }

  componentDidMount() {
    animatieContinue = true;
    this._startAnimation();
  }
  componentWillUnmount() {
    animatieContinue = false;
  }

  _startAnimation = () => {
    this.state.borderWidth.setValue(0);
    Animated.timing(
      // 随时间变化而执行的动画类型
      this.state.borderWidth, // 动画中的变量值
      {
        velocity: 10,
        toValue: 4, // 透明度最终变为1，即完全不透明
      }
    ).start(() => {
      if (animatieContinue) {
        this._startAnimation();
      }
    });
  }

  render() {
    return (
      <Animated.View // 可动画化的视图组件
        style={{
          ...this.props.style,
          borderWidth: this.state.borderWidth, // 将透明度指定为动画变量值
          borderColor: 'red',
          borderRadius: 10,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {this.props.children}
        {/*<Image 
                style={[{height:16,width:16,borderRadius:8,}]}
            source={require('../../images/gisover.png')} />*/}
      </Animated.View>
    );
  }
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
export default FlashPoint;
