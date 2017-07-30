/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Alert,
  DatePickerIOS,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

export default class ReadPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      date:new Date(),
      timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
    }
    this.state.numberOfLines = 2
    this.state.expandText = '展开'
    this.state.expanded = false
    this.onDateChange = this.onDateChange.bind(this)
  }

  onDateChange (date) {
    this.setState({
      date: date
    })
    console.log(this.state.date)
  }

  onChange () {
    if(this.state.expandText == '展开'){
      this.setState({
        numberOfLines: null,
        expandText: '收起',
        expanded: true
      })
    } else {
      this.setState({
        numberOfLines: 2,
        expandText: '展开',
        expanded: false
      })
    }
  }

  test(){
    if(true){
      return <Text>成功</Text>
    }else{
      return <Text>失败</Text>
    }``
  }

  onLayout(event){
    if (this.state.expanded) {
      this.maxHeight = event.nativeEvent.layout.height; 
    }else{
      this.minHeight = event.nativeEvent.layout.height; 
    }
    if(this.maxHeight == this.minHeight){
      this.setState({
        expandText: ''
      })
    }
  }

  render() {
    return (
      <View>
        <View>{this.test()}</View>
        <Button title='button' color='red' onPress={()=>Alert.alert('button has been clicked')}/>
        <Text onPress={() => Actions.Test()}>click me</Text>
        {/*<TextInput
          onChange={this.onChange}
          style={styles.textinput}
          value={this.state.date}
        />*/}
        <DatePickerIOS
          date={this.state.date}
          mode="date"
          onDateChange={this.onDateChange}
        />
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            Sign in with Facebook
          </Text>
        </LinearGradient>

        <Text numberOfLines={this.state.numberOfLines} onLayout={this.onLayout.bind(this)}>如果你编写了一个有趣的API应用,欢迎发布到API小组让更多豆友</Text>
        <Text onPress={this.onChange.bind(this)}>{this.state.expandText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textinput: {
    height: 26,
    width: 200,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    padding: 4,
    fontSize: 13,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
