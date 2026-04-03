import {Dimensions, StyleSheet} from 'react-native';
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
  ctnText: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(12),
    color: colors.black,
  },
  relativePosition: {
    position: 'relative',
  },
  imgStyle: {
    width: Dimensions.get('screen').width - 50,
    height: moderateScale(200),
    resizeMode: 'contain',
    marginVertical: moderateScale(20),
  },
  rowChoice: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(5),
  },
  textSTyle: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(12),
    color: colors.black,
  },
  absoluteStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  rowBtn: {
    marginHorizontal: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backBtn: {
    marginVertical: moderateScale(10),
    height: moderateScale(40),
    backgroundColor: colors.gray2,
    borderRadius: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
  },
  txtBack: {
    color: colors.black,
    fontSize: moderateScale(14),
    textAlign: 'center',
    fontFamily: fonts.PoppinsSemiBold,
  },
  nextBtn: {
    marginVertical: moderateScale(10),
    height: moderateScale(40),
    backgroundColor: colors.blue,
    borderRadius: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
  },
  txtNext: {
    color: colors.white,
    fontSize: moderateScale(14),
    textAlign: 'center',
    fontFamily: fonts.PoppinsSemiBold,
  },
  numberStyle: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(12),
    color: colors.blue,
  },
});
