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
  boxStyle: {
    borderRadius: 10,
    borderColor: colors.blue,
    borderWidth: 1,
  },
  label: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(12),
    color: colors.black,
    marginBottom: moderateScale(5),
  },
  mainWrapper: {
    marginBottom: moderateScale(15),
  },
  labelStyle: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(18),
    color: colors.white,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(40),
    marginBottom: moderateScale(20),
  },
  txtRed: {
    fontFamily: fonts.PoppinsRegular,
    color: colors.red,
    paddingTop: moderateScale(8),
    fontSize: moderateScale(11),
  },
});
