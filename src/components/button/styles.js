import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors, fonts} from '../../config/styling';

export default StyleSheet.create({
  ctnRoot: {
    marginVertical: moderateScale(20),
    height: moderateScale(50),
    backgroundColor: colors.blue,
    borderRadius: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtButton: {
    color: colors.white,
    fontSize: moderateScale(14),
    textAlign: 'center',
    fontFamily: fonts.PoppinsSemiBold,
  },
});
