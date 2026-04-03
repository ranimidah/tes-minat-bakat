import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Modal} from 'react-native-paper';
import LoadingIndicator from '../loading-indicator';
import styles from './styles';

export default function ModalNotif(props) {
  const {
    type,
    message,
    onDismiss,
    onPress,
    visible,
    onPressTutup,
    btnTutup,
    title,
    txtBtnLeft,
    txtBtnRight,
    isloading = false,
  } = props;

  function getModalStyle() {
    switch (type) {
      case 'info':
        return renderNotif();
      case 'popup':
        return renderPopup();
      default:
        return {};
    }
  }

  function renderButton() {
    if (btnTutup) {
      return (
        <View style={styles.rowButton}>
          <TouchableOpacity style={styles.footerButton} onPress={onPressTutup}>
            <Text style={styles.footerButtonText}>Tutup</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={onPress}>
            {isloading ? (
              <LoadingIndicator color="white" />
            ) : (
              <Text style={styles.footerButtonText}>Oke</Text>
            )}
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <TouchableOpacity style={styles.footerButton} onPress={onPress}>
        <Text style={styles.footerButtonText}>Oke</Text>
      </TouchableOpacity>
    );
  }

  function renderNotif() {
    return (
      <View style={[styles.modalContent]}>
        <View style={styles.relative}>
          <Text style={[styles.txtHeader]}>{message}</Text>
          {renderButton()}
        </View>
      </View>
    );
  }

  function renderPopup() {
    return (
      <View style={[styles.relative, styles.whiteBgColor]}>
        <View style={[styles.modalPopup]}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={[styles.txtHeader]}>{message}</Text>
        </View>
        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.btnCancel} onPress={onPressTutup}>
            <Text style={styles.txtCancel}>{txtBtnLeft}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOke} onPress={onPress}>
            <Text style={styles.txtOke}>{txtBtnRight}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <Modal
      visible={visible}
      onDismiss={onDismiss}
      contentContainerStyle={styles.containerModalStyle}>
      {getModalStyle()}
    </Modal>
  );
}
