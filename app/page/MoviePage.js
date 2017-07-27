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
  TouchableOpacity,
  View,
  Image,
  ScrollView
} from 'react-native';
import {postFetch, getFetch} from '../api/index'
import {Actions} from 'react-native-router-flux';

export default class MoviePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      newMovie: []
    }
    this.getNewMovie = this.getNewMovie.bind(this)
    this.getNewMovie()
  }

  getNewMovie(){
    getFetch({
      path: 'movie/in_theaters',
      callback: res => {
        console.log(res.subjects)
        this.setState({
          newMovie: res.subjects
        })
      }
    })
  }

  onPress (data) {
    Actions.MovieDetail({data: data})
    Actions.refresh({title: data.title})
  }

  render() {
    const {newMovie} = this.state
    return (
      <View style={styles.main}>
        <ScrollView horizontal contentContainerStyle={styles.wrapper}>
          {
            newMovie.map((item, index) => {
              return (
                <TouchableOpacity style={styles.row} key={index} onPress={()=> this.onPress(item)}>
                  <Image source={{uri: item.images.medium}} style={{width:120,height:150}} resizeMode="contain"/>
                  <Text style={styles.txt}>{item.title}</Text>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
       
    );
  }
}

const styles = StyleSheet.create({
  main:{
    backgroundColor: '#fff',
  },
  wrapper:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10
  },
  row:{
    flex:1
  },
  title:{
    fontSize: 16,
    color: '#333',
    padding: 10
  },
  txt: {
    fontSize: 12,
    color: '#333',
    paddingTop: 10,
    paddingLeft:10
  }
});
