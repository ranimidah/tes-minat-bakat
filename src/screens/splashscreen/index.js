import React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import styles from './styles';

const logo = require('../../assets/images/logo_ut.png');
const logoTia = require('../../assets/images/logo_tia.png');

function SplashScreen() {
  return (
    <View style={styles.flexCenter}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <View style={styles.ctnRoot}>
        <View style={styles.rowStyle}>
          <Image source={logo} style={styles.imageStyle} />
          <Image source={logoTia} style={styles.imageStyle} />
        </View>
        <Text style={styles.textStyle}>Tallent and Interest Allocation</Text>
      </View>
    </View>
  );
}

export default SplashScreen;
