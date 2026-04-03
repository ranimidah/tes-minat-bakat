import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import { colors, fonts } from '../../config/styling';

export default StyleSheet.create({
  ctnRoot: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: moderateScale(20),
  },
  ctnMain: {
    flex: 1,
  },
  mainRoot: {
    paddingBottom: moderateScale(50),
  },
  avatarStyle: {
    width: moderateScale(200),
    height: moderateScale(200),
    resizeMode: 'contain',
    borderRadius: moderateScale(100),
    borderColor: colors.yellow,
    borderWidth: 1,
  },
  boxAvatar: {
    alignItems: 'center',
    paddingVertical: moderateScale(20),
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.yellow,
    borderBottomWidth: 1,
    paddingBottom: moderateScale(10),
    marginTop: moderateScale(20),
  },
  label: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(12),
    color: colors.blue,
    flex: 1,
    // flexShrink: 1, // Menyesuaikan agar teks mengecil jika area terbatas
  },
  ctnText: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(12),
    color: colors.blue,
    flexWrap: 'wrap', // Membungkus teks dalam beberapa baris jika terlalu panjang
    flex: 0.9,
    textAlign: 'right',
  },
  ctnIcon: {
    width: moderateScale(25),
    height: moderateScale(25),
    // resizeMode: 'contain',
    // paddingLeft: moderateScale(20),
  },
  absBtn: {
    position: 'absolute',
    bottom: 30,
    right: 80,
    backgroundColor: colors.yellow,
    borderRadius: moderateScale(70),
    padding: 10,
  },
  rowHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: moderateScale(20),
  },
  title: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(20),
    color: colors.blue,
  },
  btnEdit: {
    backgroundColor: colors.blue,
    paddingHorizontal: moderateScale(20),
    justifyContent: 'center',
    borderRadius: moderateScale(5),
  },
  txtEdit: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(14),
    color: colors.white,
  },
});
