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
  title: {
    fontFamily: fonts.PoppinsBold,
    fontSize: moderateScale(22),
    color: colors.blue,
    textAlign: 'center',
    marginBottom: moderateScale(20),
    paddingBottom: moderateScale(25),
  },
  imgKey: {
    width: moderateScale(240),
    height: moderateScale(240),
    resizeMode: 'contain',
  },
  ctnImage: {
    alignItems: 'center',
    paddingTop: moderateScale(10),
  },
  row: {
    flexDirection: 'row',
    // paddingBottom: moderateScale(20),
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
});
