import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import { colors, fonts } from '../../config/styling';

export default StyleSheet.create({
  ctnRoot: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ctnMain: {
    paddingHorizontal: moderateScale(20),
  },
  noData: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(12),
    color: colors.black,
  },
  ctnBox: {
    marginBottom: moderateScale(20),
  },
  bgBoxHeader: {
    backgroundColor: colors.blue,
    paddingVertical: moderateScale(8),
  },
  ctnTitle: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(12),
    color: colors.white,
    paddingHorizontal: moderateScale(10),
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexLeft: {
    flex: 1,
  },
  flexRight: {
    flex: 0.1,
    marginHorizontal: moderateScale(5),
  },
  iconRight: {
    fontFamily: fonts.PoppinsBold,
    fontSize: moderateScale(16),
    color: colors.blue,
    textAlign: 'center',
  },
  bgIcon: {
    backgroundColor: colors.yellow,
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctnContent: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(12),
    color: colors.black,
    textAlign: 'justify',
  },
  boxContent: {
    backgroundColor: colors.grayLight,
    borderBottomLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(10),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
  },
  rowJawaban: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: moderateScale(5),
  },
  rowNumber: {
    flex: 0.1,
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(12),
    color: colors.black,
  },
  rowText: {
    flex: 1,
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(12),
    color: colors.black,
    textAlign: 'justify',
  },
});
