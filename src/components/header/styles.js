import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors, fonts} from '../../config/styling';

export default StyleSheet.create({
  ctnRoot: {
    flexDirection: 'row',
    paddingVertical: moderateScale(10),
    alignItems: 'center',
  },
  ctnRootCenter: {
    alignItems: 'center',
    paddingVertical: moderateScale(20),
    marginBottom: moderateScale(15),
  },
  flexLeft: {
    flex: 0.5,
  },
  flexRight: {
    position: 'relative',
  },
  styleHead: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(14),
    textAlign: 'center',
    color: colors.blue,
  },
  ctnIcon: {
    width: moderateScale(45),
    height: moderateScale(45),
    paddingLeft: moderateScale(20),
  },
});
