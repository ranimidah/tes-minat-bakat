import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors, fonts} from '../../config/styling';

export default StyleSheet.create({
  mainWrapper: {
    marginBottom: moderateScale(15),
  },
  ctnInput: {
    height: moderateScale(50),
    backgroundColor: colors.white,
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(12),
    borderWidth: moderateScale(1),
    borderColor: colors.blue,
  },
  ctnMultiline: {
    minHeight: moderateScale(100),
    backgroundColor: colors.white,
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(7),
    borderWidth: moderateScale(1),
    borderColor: colors.blue,
    flexDirection: 'row',
  },
  IconInputCtn: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    flex: 1,
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
    fontSize: moderateScale(12),
  },
  inputMultiline: {
    flex: 1,
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
    fontSize: moderateScale(12),
    textAlignVertical: 'top',
  },
  txtLimit: {
    fontFamily: fonts.PoppinsRegular,
    color: colors.darkGray,
    paddingTop: moderateScale(8),
    fontSize: moderateScale(12),
  },
  txtRed: {
    fontFamily: fonts.PoppinsRegular,
    color: colors.red,
    paddingTop: moderateScale(8),
    fontSize: moderateScale(11),
  },
  txtLabel: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(12),
    color: colors.black,
    marginBottom: moderateScale(5),
  },

  ctnIcon: {
    width: moderateScale(25),
    height: moderateScale(25),
    resizeMode: 'contain',
  },
  colorDisable: {
    backgroundColor: colors.grayLight,
  },
  txtDisabled: {
    flex: 1,
    fontFamily: fonts.PoppinsRegular,
    color: colors.black,
    fontSize: moderateScale(12),
    paddingVertical: moderateScale(15),
  },
});
