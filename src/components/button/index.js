/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles';
import {colors} from '../../config/styling';

export default function Button({
  label,
  onPress = () => {},
  type,
  isLoading,
  btnStyle,
  isDisable,
}) {
  function getBgColor() {
    switch (type) {
      case 'blue':
        return {backgroundColor: colors.blue};
      case 'yellow':
        return {backgroundColor: colors.yellow};
      case 'gray':
        return {backgroundColor: colors.gray};
      default:
        if (isDisable) {
          return {backgroundColor: colors.gray};
        }
        return {};
    }
  }

  function getTextColor() {
    switch (type) {
      case 'blue':
        return {color: colors.white};
      case 'yellow':
        return {color: colors.white};
      case 'gray':
        return {color: colors.black};
      default:
        if (isDisable) {
          return {color: colors.black};
        }
        return {};
    }
  }

  return (
    <TouchableOpacity
      disabled={isLoading || isDisable}
      onPress={onPress}
      style={[styles.ctnRoot, btnStyle, getBgColor()]}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={[styles.txtButton, getTextColor()]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}
