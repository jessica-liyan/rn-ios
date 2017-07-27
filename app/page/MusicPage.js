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
  SectionList,
  TouchableHighlight
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Collapsible from 'react-native-collapsible';
import * as Animatable from 'react-native-animatable';

const sections = [
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Third',
    content: 'Lorem ipsum...',
  }
];

export default class MusicPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeSection: false,
      collapsed: true,
    };

  }
  
  _renderHeader(section) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  } 

   _renderHeader1(section, i, isActive) {
    return (
      <Animatable.View duration={400} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  }

  _renderContent1(section, i, isActive) {
    return (
      <Animatable.View duration={400}  style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>{section.content}</Animatable.Text>
      </Animatable.View>
    );
  }

  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    return (
      <View>
        <Accordion 
          style={styles.container}
          sections={sections}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
        />

        <Accordion 
          style={styles.container}
          sections={sections}
          renderHeader={this._renderHeader1}
          renderContent={this._renderContent1}
        />

        <TouchableHighlight onPress={this._toggleExpanded}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Single Collapsible</Text>
          </View>
        </TouchableHighlight>
        <Collapsible collapsed={this.state.collapsed} align="center">
          <View style={styles.content}>
            <Text>Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs</Text>
          </View>
        </Collapsible>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'left',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#fff',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ededed',
    borderStyle: 'solid'
  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
  },
  content: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
    active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
});
