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
  imageStyle: {
    width: Dimensions.get('screen').width - 10,
    height: moderateScale(300),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: moderateScale(20),
  },
  textStyle: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(12),
    color: colors.black,
    textAlign: 'center',
    paddingVertical: moderateScale(10),
  },
  labelStyle: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(14),
    color: colors.blue,
    textAlign: 'center',
  },
  btnStyle: {
    marginBottom: 0,
  },
  margin: {
    marginBottom: moderateScale(50),
  },
});
