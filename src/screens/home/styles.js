import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import { colors, fonts } from '../../config/styling';

export default StyleSheet.create({
  ctnRoot: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: moderateScale(20),
  },
  // paddingHorizontal: {
  //   paddingHorizontal: moderateScale(20),
  // },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(20),
  },
  logo: {
    width: moderateScale(60),
    height: moderateScale(60),
    resizeMode: 'contain',
  },
  title: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(16),
    color: colors.blue,
    textAlign: 'center',
  },
  titlehead: {
    fontFamily: fonts.PoppinsBold,
    fontSize: moderateScale(22),
    color: colors.blue,
    textAlign: 'center',
  },
  ctnTitle: {
    paddingVertical: moderateScale(25),
  },
  txtStyle: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(18),
    color: colors.blue,
    textAlign: 'center',
  },
  ctnBg: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    // flex: 1,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(30),
  },
  text: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(14),
    color: colors.white,
  },
  nameStyle: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(20),
    color: colors.white,
  },
  dateStyle: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(12),
    color: colors.white,
    paddingTop: moderateScale(20),
  },
  txtBtn: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(14),
    color: colors.blue,
    textAlign: 'center',
  },
  btnLogout: {
    width: moderateScale(100),
    backgroundColor: colors.white,
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(10),
    borderColor: colors.blue,
    borderWidth: 1,
  },
  positionRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: moderateScale(10),
  },
  imgStyle: {
    width: moderateScale(180),
    height: moderateScale(180),
    resizeMode: 'contain',
  },
  ctnImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStart: {
    width: moderateScale(150),
    backgroundColor: colors.white,
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(10),
    borderColor: colors.blue,
    borderWidth: 1,
  },
});
