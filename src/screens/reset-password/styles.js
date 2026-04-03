import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors, fonts} from '../../config/styling';

export default StyleSheet.create({
  ctnRoot: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ctnMain: {
    paddingHorizontal: moderateScale(20),
  },
  imgKey: {
    width: moderateScale(360),
    height: moderateScale(360),
    resizeMode: 'contain',
  },
  ctnImage: {
    alignItems: 'center',
    paddingTop: moderateScale(10),
  },
});
