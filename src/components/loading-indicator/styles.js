import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../config/styling';

export default StyleSheet.create({
  fullscreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  centerStyle: {
    height: Dimensions.get('window').height / 2 - 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
