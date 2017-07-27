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

const TabIcon3 = (props) => {
  return (
    <View>
      <Image style={styles.image} source={props.focused ?require('../image/movie_active.png'): require('../image/movie.png')}/>
    </View>
  )
};
TabIcon3.propTypes = propTypes;

const styles = StyleSheet.create({
  image: {
    width:46,
    height:46
  }
});

export default TabIcon3

