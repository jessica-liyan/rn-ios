import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar
} from 'react-native';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
} from 'react-native-router-flux';
import Home from './page/Home'
import ReadPage from './page/ReadPage'
import MoviePage from './page/MoviePage'
import MusicPage from './page/MusicPage'
import MovieDetail from './component/MovieDetail'
import SearchItem from './component/SearchItem'
import TabIcon1 from './component/TabIcon1'
import TabIcon2 from './component/TabIcon2'
import TabIcon3 from './component/TabIcon3'
import TabIcon4 from './component/TabIcon4'
import Test from './component/Test'
import Icon from 'react-native-vector-icons/Ionicons'

// 下面ICON组件 ，改变选中/未选中的图标颜色
class TabIcon extends Component {
  render () {
    var color = this.props.selected ? '#3e92cf' : '#6577cc'
    var icon = this.props.selected ? this.props.active : this.props.default
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center'}}>
        <Icon style={{color: color}} name={icon} size={30} />
        <Text style={{color: color}}>{this.props.title}</Text>
      </View>
     )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <View style={{flex:1,backgroundColor:'#fff'}}>
        <StatusBar
          animated={true}
          hidden={false}
          barStyle="light-content"
          translucent={true}
        />
        <Router>
          <Scene key="root">
            <Scene key="tab" 
              title="tab" 
              tabs 
              hideNavBar 
              navigationBarStyle={{backgroundColor: '#5CACEE'}} 
              titleStyle={{color:'#fff'}} 
              showLabel={false}>
              <Scene 
                key="home" 
                title="首页" 
                component={Home} 
                tabBarLabel="首页" 
                icon={TabIcon1}
                default="ios-home-outline"
                active="ios-home"
                hideNavBar   
              />
              <Scene 
                key="readPage" 
                component={ReadPage} 
                title="阅读"  
                tabBarLabel="阅读" 
                icon={TabIcon2} 
                default="ios-home-outline"
                active="ios-home" 
                onRight={() => Actions.search({type: 'read'})} 
                rightButtonImage={require('./image/search.png')}  rightButtonIconStyle={styles.searchButton} 
                back 
                backButtonImage={require('./image/back.png')} 
                tabBarStyle={{backgroundColor:'#f5f5f5'}} inactiveTintColor='#999' 
                activeTintColor='red'  
                duration={0}
              />
              <Scene 
                key="moviePage" 
                component={MoviePage} 
                title="电影" 
                tabBarLabel="电影" 
                icon={TabIcon3} 
                default="ios-home-outline"
                active="ios-home" 
                onRight={() => Actions.search({type: 'movie'})} 
                rightButtonImage={require('./image/search.png')}  rightButtonIconStyle={styles.searchButton} 
              />
              <Scene 
                key="musicPage" 
                component={MusicPage} 
                title="音乐" 
                tabBarLabel="音乐" 
                icon={TabIcon4}
                default="ios-home-outline"
                active="ios-home" 
                onRight={() => Actions.search({type: 'music'})} 
                rightButtonImage={require('./image/search.png')}  rightButtonIconStyle={styles.searchButton} 
              />
            </Scene>
            <Scene key="search" component={SearchItem} title="search" hideNavBar>
            </Scene>
            <Scene 
              key="MovieDetail" 
              component={MovieDetail} 
              backTitle=""
            >
            </Scene>
          </Scene>
        </Router>
      </View>
    )
  }
};

   /* 
      同层级的Scene试图是互相覆盖的关系
      左侧按钮是back onBack  backTitle  backButtonImage  backButtonTextStyle
      右侧按钮       onRight  rightTitle  返回没有文字？

       leftButton leftButtonImage  onLeft  leftButtonIconStyle   
       leftTitle  leftButtonTextStyle  leftButtonTintColor
      titleStyle  navigationBarStyle

      navigationBarTitleImage  navigationBarTitleImageStyle

      tabs  hideNavBar(顶部导航)  hideTabBar(标签页)
      tabBarLabel  tabBarIcon  tabBarStyle
   */ 


const styles = StyleSheet.create({
  searchButton:{
    right: 0,
    width:20,
    height:20
  } 
});