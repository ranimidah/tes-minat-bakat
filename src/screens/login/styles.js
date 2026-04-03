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
    width: moderateScale(245),
    height: moderateScale(245),
    resizeMode: 'contain',
  },
  ctnImage: {
    alignItems: 'center',
    paddingTop: moderateScale(20),
  },
  title: {
    fontFamily: fonts.PoppinsBold,
    fontSize: moderateScale(22),
    color: colors.blue,
    textAlign: 'center',
    marginBottom: moderateScale(20),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctntext: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(12),
    color: colors.black,
  },
  ctnBtn: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(12),
    color: colors.blue,
  },
  forgotStyle: {
    flex: 1,
    alignSelf: 'flex-end',
  },
  rowImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: moderateScale(10),
  },
  imageStyle: {
    width: moderateScale(65),
    height: moderateScale(65),
    resizeMode: 'contain',
  },
  // ctnPrivasi: {
  //   fontFamily: fonts.PoppinsMedium,
  //   fontSize: moderateScale(12),
  //   color: colors.blue,
  //   textAlign: 'center',
  // },
  // privasi: {
  //   paddingBottom: moderateScale(20),
  // },
});
