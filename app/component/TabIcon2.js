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

const TabIcon2 = (props) => {
  return (
    <View>
      <Image style={styles.image} source={props.focused ?require('../image/reading_active.png'): require('../image/reading.png')}/>
    </View>
  )
};
TabIcon2.propTypes = propTypes;

const styles = StyleSheet.create({
  image: {
    width:46,
    height:46
  }
});

export default TabIcon2

