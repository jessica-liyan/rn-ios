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

export default class MovieDetail extends Component {
  constructor(props){
    super(props)
    console.log(this.props.data)
    this.state = {
      data: this.props.data
    }
  }

  render() {
    return (
      <View>
        <Text>detail</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
