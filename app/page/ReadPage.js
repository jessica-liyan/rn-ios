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

export default class ReadPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      date:new Date(),
      timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
    }
    this.state.numberOfLines = 2
    this.state.expandText = '展开'
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
        expandText: '收起'
      })
    } else {
      this.setState({
        numberOfLines: 2,
        expandText: '展开'
      })
    }
    
  }

  render() {
    return (
      <View>
        <Text>ReadPage</Text>
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
        <Text numberOfLines={this.state.numberOfLines}>本文档为需要快速了解豆瓣API的用户提供一个概览本文档为需要快速了解豆瓣API的用户提供一个概览本文档为需要快速了解豆瓣API的用户提供一个概览本文档为需要快速了解豆瓣API的用户提供一个概览本文档为需要快速了解豆瓣API的用户提供一个概览本文档为需要快速了解豆瓣API的用户提供一个概览,更为完整的豆瓣API信息请参阅《豆瓣API参考手册》。如果你编写了一个有趣的API应用,欢迎发布到API小组让更多豆友</Text>
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
});
