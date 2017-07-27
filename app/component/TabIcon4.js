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

const TabIcon4 = (props) => {
  return (
    <View>
      <Image style={styles.image} source={props.focused ?require('../image/music_active.png'): require('../image/music.png')}/>
    </View>
  )
};
TabIcon4.propTypes = propTypes;

const styles = StyleSheet.create({
  image: {
    width:46,
    height:46
  }
});

export default TabIcon4

