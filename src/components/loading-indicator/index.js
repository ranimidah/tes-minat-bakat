import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

const LoadingIndicator = ({
  size = 'small',
  color = '#22539C',
  fullscreen,
  stylesRoot,
  center,
}) => {
  return (
    <View
      style={[
        stylesRoot,
        center ? styles.centerStyle : fullscreen ? styles.fullscreen : {},
      ]}>
      <ActivityIndicator animating size={size} color={color} />
    </View>
  );
};

export default LoadingIndicator;
