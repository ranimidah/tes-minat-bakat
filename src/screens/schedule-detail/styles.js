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
  ctnBox: {
    position: 'relative',
  },
  titleBg: {
    backgroundColor: colors.yellow,
    paddingVertical: moderateScale(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(12),
    color: colors.blue,
  },
  ctnRow: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: moderateScale(5),
  },
  rowLeft: {
    flex: 0.8,
    marginLeft: moderateScale(15),
  },
  textstyle: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(12),
    color: colors.black,
  },
  rowCenter: {
    flex: 0.1,
  },
  rowRight: {
    flex: 1,
  },
  bgGray: {
    backgroundColor: colors.grayLight,
  },
  absoluteStyle: {
    flex: 1,
    position: 'absolute',
    bottom: moderateScale(50),
    alignSelf: 'center',
    width: '100%',
    backgroundColor: colors.white,
  },
  btn: {
    marginVertical: moderateScale(20),
    height: moderateScale(50),
    backgroundColor: colors.blue,
    borderRadius: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
