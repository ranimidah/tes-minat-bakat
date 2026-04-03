import React, {useState} from 'react';
import {View, TextInput, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import {colors} from '../../config/styling';

export default function Input(props) {
  const {
    ctnRootStyle,
    txtLimitStyle,
    ctnInputStyle,
    showLimit,
    label,
    toggleShowPassword,
    icon,
    hp,
    multiline = false,
    ctnValue,
    disabled = false,
  } = props;
  const [isFocus, setFocus] = useState(false);
  return (
    <View style={[styles.mainWrapper, ctnRootStyle]}>
      {label && <Text style={styles.txtLabel}>{label}</Text>}
      <View
        style={[
          multiline ? styles.ctnMultiline : styles.ctnInput,
          ctnInputStyle,
          icon && styles.IconInputCtn,
          disabled && styles.colorDisable,
        ]}>
        {disabled ? (
          <Text style={styles.txtDisabled}>{ctnValue}</Text>
        ) : (
          <TextInput
            onFocus={() => {
              setFocus(true);
            }}
            onBlur={() => {
              setFocus(false);
            }}
            style={multiline ? styles.inputMultiline : styles.inputStyle}
            placeholderTextColor={colors.gray}
            {...props}
          />
        )}
        {icon && (
          <TouchableWithoutFeedback onPress={toggleShowPassword}>
            <View style={styles.ctnIcon}>{icon}</View>
          </TouchableWithoutFeedback>
        )}
      </View>
      {props.error && <Text style={styles.txtRed}>*{props.error}</Text>}
      {showLimit && (
        <Text style={[styles.txtLimit, txtLimitStyle]}>{`${
          props.value?.length || '0'
        }/${props.maxLength}`}</Text>
      )}
    </View>
  );
}
