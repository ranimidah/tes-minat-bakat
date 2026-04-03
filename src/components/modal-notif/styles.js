import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors, fonts} from '../../config/styling';

export default StyleSheet.create({
  containerModalStyle: {
    flex: 1,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: moderateScale(10),
    marginHorizontal: moderateScale(40),
    padding: moderateScale(20),
  },
  txtHeader: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(12),
    color: colors.black,
    textAlign: 'center',
  },
  footerButton: {
    alignItems: 'flex-end',
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(20),
  },
  footerButtonText: {
    color: colors.blue,
    fontSize: moderateScale(12),
    fontFamily: fonts.PoppinsMedium,
  },

  modalPopup: {
    backgroundColor: '#fff',
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(30),
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnCancel: {
    paddingVertical: moderateScale(15),
    alignItems: 'center',
    width: '50%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: moderateScale(10),
    borderColor: colors.blue,
    borderWidth: moderateScale(1),
  },
  rowButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btnOke: {
    paddingVertical: moderateScale(15),
    alignItems: 'center',
    width: '50%',
    backgroundColor: colors.blue,
    borderBottomRightRadius: moderateScale(10),
  },
  txtCancel: {
    color: colors.black,
    fontSize: moderateScale(12),
    fontFamily: fonts.PoppinsMedium,
    textAlign: 'center',
  },
  txtOke: {
    color: colors.white,
    fontSize: moderateScale(12),
    fontFamily: fonts.PoppinsMedium,
    textAlign: 'center',
  },
  whiteBgColor: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    marginHorizontal: moderateScale(40),
  },
  titleStyle: {
    color: colors.blue,
    fontSize: moderateScale(14),
    fontFamily: fonts.PoppinsSemiBold,
    textAlign: 'center',
  },
  relative: {
    position: 'relative',
  },
});
