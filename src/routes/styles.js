import {View, Text, Image, StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {colors, fonts} from '../config/styling';
import HomeIcon from '../assets/svg/icon_home.svg';
import HomeIconActive from '../assets/svg/icon_home_active.svg';
import ProfilIcon from '../assets/svg/icon_user.svg';
import ProfilIconActive from '../assets/svg/icon_user_active.svg';
import FaqIcon from '../assets/svg/icon_faq.svg';
import FaqIconActive from '../assets/svg/icon_faq_active.svg';
import ScheduleIcon from '../assets/svg/icon_schedule.svg';
import ScheduleIconActive from '../assets/svg/icon_schedule_active.svg';

const additionalStyles = {
  iconContainer: {
    alignItems: 'center',
    marginTop: moderateScale(5),
  },
  regularLabel: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(12),
    marginTop: moderateScale(5),
    color: colors.gray,
    marginBottom: moderateScale(5),
  },
  activeLabel: {
    color: colors.blue,
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(12),
  },
  ctnIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
    resizeMode: 'contain',
  },
};

export default StyleSheet.create({
  container: {
    height: verticalScale(50),
  },
  iconTab: (focused, routeName) => {
    if (routeName === 'home') {
      return (
        <View style={additionalStyles.iconContainer}>
          <View style={additionalStyles.iconContainer}>
            <View style={additionalStyles.ctnIcon}>
              {focused && <HomeIconActive width="100%" height="100%" />}
              {!focused && <HomeIcon width="100%" height="100%" />}
            </View>
          </View>
          <Text
            style={[
              additionalStyles.regularLabel,
              focused && additionalStyles.activeLabel,
            ]}>
            Home
          </Text>
        </View>
      );
    }
    if (routeName === 'schedule') {
      return (
        <View style={additionalStyles.iconContainer}>
          <View style={additionalStyles.iconContainer}>
            <View style={additionalStyles.ctnIcon}>
              {focused && <ScheduleIconActive width="100%" height="100%" />}
              {!focused && <ScheduleIcon width="100%" height="100%" />}
            </View>
          </View>
          <Text
            style={[
              additionalStyles.regularLabel,
              focused && additionalStyles.activeLabel,
            ]}>
            Jadwal
          </Text>
        </View>
      );
    }
    if (routeName === 'faq') {
      return (
        <View style={additionalStyles.iconContainer}>
          <View style={additionalStyles.iconContainer}>
            <View style={additionalStyles.ctnIcon}>
              {focused && <FaqIconActive width="100%" height="100%" />}
              {!focused && <FaqIcon width="100%" height="100%" />}
            </View>
          </View>
          <Text
            style={[
              additionalStyles.regularLabel,
              focused && additionalStyles.activeLabel,
            ]}>
            FAQ
          </Text>
        </View>
      );
    }
    if (routeName === 'profile') {
      return (
        <View style={additionalStyles.iconContainer}>
          <View style={additionalStyles.iconContainer}>
            <View style={additionalStyles.ctnIcon}>
              {focused && <ProfilIconActive width="100%" height="100%" />}
              {!focused && <ProfilIcon width="100%" height="100%" />}
            </View>
          </View>
          <Text
            style={[
              additionalStyles.regularLabel,
              focused && additionalStyles.activeLabel,
            ]}>
            Profil
          </Text>
        </View>
      );
    }
  },
});
