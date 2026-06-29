import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import Header from '../../components/header';
import {goBack, reset} from '../../config/navigationRef';
import Input from '../../components/input';
import Button from '../../components/button';
import {postResetPassword} from '../../services';
import ModalNotif from '../../components/modal-notif';

const imgReset = require('../../assets/images/lupa_password.png');

function ResetPassword() {
  const [modalVisible, setModalVisible] = useState(false);
  const [dataMessage, setDataMessage] = useState('');
  const [values, setValues] = useState({
    isloading: false,
    nim: '',
    email: '',
  });
  const [errors, setErrors] = useState({
    nim: '',
    email: '',
  });

  const handleReset = async () => {
    try {

      /** Validate input */
      /** validasi format email */
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmailInvalid = values.email && !emailRegex.test(values.email);

      const newErrors = {
        nim: !values.nim ? 'NIM wajib diisi' : '',
        email: !values.email ? 'Email wajib diisi' : isEmailInvalid ? 'Format email tidak valid' : '',
      };

      setErrors(prev => ({...prev, ...newErrors}));

      const hasError = Object.values(newErrors).some(e => e !== '');
      if (hasError) {
        return;
      }

      setValues({...values, isloading: true});

      const res = await postResetPassword(values.nim, values.email);
      if (res.statusCode == 200) {
        setDataMessage(res['0']);
        setModalVisible(true);
        setValues({...values, isloading: false});
      } else {
        setModalVisible(true);
        setDataMessage('Terjadi Kesalahan, silakan coba lagi. Periksa kembali NIM dan email yang Anda masukkan.');
        setValues({...values, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  function ModalSuccess() {
    return (
      <ModalNotif
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        type="info"
        message={dataMessage}
        onPress={() => {
          reset('login');
        }}
      />
    );
  }

  return (
    <View style={styles.ctnRoot}>
      <Header
        label="Reset Password"
        onPress={() => {
          goBack();
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ctnImage}>
          <Image source={imgReset} style={styles.imgKey} />
        </View>
        <View style={styles.ctnMain}>
          <Input
            label="NIM"
            placeholder="Masukkan NIM"
            keyboardType="numeric"
            value={values.nim}
            onChangeText={nim => setValues({...values, nim})}
            error={errors.nim}
          />
          <Input
            label="Email"
            placeholder="Masukkan email"
            keyboardType="email-address"
            value={values.email}
            onChangeText={email => setValues({...values, email})}
            error={errors.email}
          />
          <Button
            label="Reset"
            isLoading={values.isloading}
            onPress={() => {
              handleReset();
            }}
          />
        </View>
      </ScrollView>
      {ModalSuccess()}
    </View>
  );
}

export default ResetPassword;
