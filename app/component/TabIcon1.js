import React, {
  PropTypes,
} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const TabIcon1 = (props) => {
  return (
    <View>
      <Image style={styles.image} source={props.focused ?require('../image/home_active.png'): require('../image/home.png')}/>
    </View>
  )
};
TabIcon1.propTypes = propTypes;

const styles = StyleSheet.create({
  image: {
    width:46,
    height:46
  }
});

export default TabIcon1

