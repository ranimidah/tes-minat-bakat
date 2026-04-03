import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import { colors, fonts } from '../../config/styling';

export default StyleSheet.create({
  ctnRoot: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ctnMain: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
  },
  header: {
    fontFamily: fonts.PoppinsBold,
    fontSize: moderateScale(20),
    color: colors.blue,
  },
  boxHeader: {
    paddingVertical: moderateScale(20),
    alignItems: 'center',
  },
  rowBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
    borderColor: colors.gray2,
    borderWidth: moderateScale(1),
    backgroundColor: colors.white,
    marginBottom: moderateScale(15),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
  },
  flexLeft: {
    paddingHorizontal: moderateScale(15),
    // flex: 0.1,
    backgroundColor: colors.yellow,
    borderTopLeftRadius: moderateScale(10),
    borderBottomLeftRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctnIcon: {
    width: moderateScale(40),
    height: moderateScale(40),
  },
  flexRight: {
    flex: 1,
    paddingHorizontal: moderateScale(5),
    paddingVertical: moderateScale(10),
  },
  title: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(16),
    color: colors.blue,
    paddingBottom: moderateScale(5),
  },
  rowChild: {
    flex: 1,
    flexDirection: 'row',
  },
  childLeft: {
    flex: 1,
  },
  childRight: {
    flex: 1,
  },
  labelChild: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(9),
    color: colors.black,
  },
  textChild: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(12),
    color: colors.black,
  },
  btnDetail: {
    backgroundColor: colors.blue,
    borderRadius: moderateScale(5),
    paddingVertical: moderateScale(4),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(10),
  },
  btnText: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(12),
    color: colors.white,
  },
  noData: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(12),
    color: colors.black,
  },
});
