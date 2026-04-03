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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowLeft: {
    flex: 0.6,
  },
  rowCenter: {
    flex: 0.1,
  },
  rowRight: {
    flex: 1,
  },
  textRow: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(12),
    color: colors.black,
  },
  labelPersentase: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(14),
    color: colors.blue,
    paddingVertical: moderateScale(20),
  },
  box: {
    flex: 1,
    backgroundColor: colors.greenLight,
    borderRadius: moderateScale(5),
    width: Dimensions.get('screen').width / 2,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(3),
    marginBottom: moderateScale(5),
  },
  persentaseStyle: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(14),
    color: colors.blue,
    paddingTop: moderateScale(10),
  },
  boxDominan: {
    backgroundColor: colors.yellow,
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(20),
  },
  txtDominan: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(12),
    color: colors.blue,
  },
});
