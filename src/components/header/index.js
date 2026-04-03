import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import ArrowBack from '../../assets/svg/icon_arrow_left.svg';
import styles from './styles';

const Header = props => {
  const {label, onPress, noIconBack, stylesNoicon} = props;

  function headerFunc() {
    if (noIconBack) {
      return (
        <View style={[styles.ctnRootCenter, stylesNoicon]}>
          <Text style={styles.styleHead}>{label}</Text>
        </View>
      );
    }

    return (
      <View style={styles.ctnRoot}>
        <View style={styles.flexLeft}>
          <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.ctnIcon}>
              <ArrowBack width="100%" height="100%" />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.flexRight}>
          <Text style={styles.styleHead}>{label}</Text>
        </View>
      </View>
    );
  }

  return headerFunc();
};

export default Header;
