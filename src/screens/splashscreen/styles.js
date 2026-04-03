import {StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {colors, fonts} from '../../config/styling';

export default StyleSheet.create({
  flexCenter: {
    flex: scale(1),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: moderateScale(150),
    height: moderateScale(150),
    resizeMode: 'contain',
  },
  rowStyle: {
    // flex: 1,
    flexDirection: 'row',
    paddingBottom: moderateScale(30),
  },
  textStyle: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(18),
    color: colors.blue,
    textAlign: 'center',
  },
  ctnRoot: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
