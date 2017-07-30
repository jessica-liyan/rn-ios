import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LoadingManage from './LoadingManage'

export default class MovieTopDetail extends Component {
  constructor (props) {
    super(props)
  }

  getName (arr) {
    let str = ''
    for(let item of arr){
      str += item.name + '/'
    }
    return str.substring(0, str.length - 1)
  }

  getStar(item){
    let rate = item.rating.average
    let yellow = 0
    let starList = []
    let starImg = [require(`../image/star.png`),require(`../image/star-half.png`),require(`../image/star-no.png`)]
    if(rate/2 <= 5 && rate/2 > 4.5){
      yellow = 5
      starList = [starImg[0],starImg[0],starImg[0],starImg[0],starImg[0]]
    }else if(rate/2 > 4 && rate/2 <= 4.5){
      yellow = 4.5
      starList = [starImg[0],starImg[0],starImg[0],starImg[0],starImg[1]]
    }else if(rate/2 > 3.5 && rate/2 <= 4){
      yellow = 4
      starList = [starImg[0],starImg[0],starImg[0],starImg[0],starImg[2]]
    }else if(rate/2 > 3 && rate/2 <= 3.5){
      yellow = 3.5
      starList = [starImg[0],starImg[0],starImg[0],starImg[1],starImg[2]]
    }else if(rate/2 > 2.5 && rate/2 <= 3){
      yellow = 3
      starList = [starImg[0],starImg[0],starImg[0],starImg[2],starImg[2]]
    }else if(rate/2 > 2 && rate/2 <= 2.5){
      yellow = 2.5
      starList = [starImg[0],starImg[0],starImg[1],starImg[2],starImg[2]]
    }else if(rate/2 > 1.5 && rate/2 <= 2){
      yellow = 2
      starList = [starImg[0],starImg[0],starImg[2],starImg[2],starImg[2]]
    }else if(rate/2 > 1 && rate/2 <= 1.5){
      yellow = 1.5
      starList = [starImg[0],starImg[1],starImg[2],starImg[2],starImg[2]]
    }else if(rate/2 > 0.5 && rate/2 <= 1){
      yellow = 1
      starList = [starImg[0],starImg[2],starImg[2],starImg[2],starImg[2]]
    }else if(rate/2 > 0 && rate/2 <= 0.5){
      yellow = 0.5
      starList = [starImg[1],starImg[2],starImg[2],starImg[2],starImg[2]]
    }else{
      yellow = 0
      starList = [starImg[2],starImg[2],starImg[2],starImg[2],starImg[2]]
    }
    return (
      <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingBottom:5}}>
        {
          starList.map((item)=>{
            return (
              <Image source={item} style={{width:15,height:15}}/>
            )
          })
        }
        <Text style={styles.tips}>{item.rating.average}</Text>
      </View>
    )
  }

  render () {
    const {data, loadingStatus, idx} =  this.props
    if(loadingStatus === 'success'){
      return (
        <FlatList
          data={data}
          style={{padding:10}}
          extraData={this.state}
          renderItem={({item, index}) => (
            <View>
              <View style={styles.indexWrap}><Text style={styles.indexText}>{idx * 50 + index + 1}</Text></View>
              <TouchableOpacity key={index} style={styles.row} onPress={() => Actions.MovieDetail({id:item.id})}>
                <View style={{flex:0.25}}><Image source={{uri: item.images.large}} style={{width:80,height:100}} resizeMode="cover"/></View>
                <View style={[styles.txtWrap,{flex:0.75}]}>
                  <Text style={styles.title}>{item.title}</Text>
                  {this.getStar(item)}
                  <Text style={styles.tips}>导演：{this.getName(item.directors)}</Text>
                  <Text style={styles.tips}>主演：{this.getName(item.casts)}</Text>
                  <Text style={styles.tips}>{item.collect_count}人看过</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      )
    } else {
      return <LoadingManage status={loadingStatus}/>
    }
  }
}
const width = Dimensions.get('window').width;
const left = width/2 - 40;
const styles = StyleSheet.create({
  row: {
    padding: 10,
    backgroundColor:'#fff',
    borderBottomWidth: 1,
    borderColor: '#ededed',
    borderStyle: 'solid',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    shadowOffset:{  
      width: 0,  
      height: 2,  
    },  
    shadowColor: '#ccc',  
    shadowOpacity: 0.5, 
  },
  txtWrap:{
    padding: 10
  },
  indexWrap:{
    borderBottomWidth:1,
    borderColor:'#ddd',
    position:'relative',
    height: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  indexText:{
    width: 80,
    textAlign: 'center',
    fontSize: 16,
    color:'#999',
    lineHeight: 40,
    position: 'absolute',
    left: left,
    top: 0
  },
  title:{
    fontSize: 16,
    color: '#333',
    paddingBottom: 5
  },
  tips:{
    fontSize: 12,
    color: '#999',
  },
  gray:{
    color:'#999'
  },
  orange:{
    color:'orange'
  }
});
