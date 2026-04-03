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

  const handleReset = async () => {
    try {
      setValues({...values, isloading: true});

      const res = await postResetPassword(values.nim, values.email);
      if (res.statusCode == 200) {
        setDataMessage(res['0']);
        setModalVisible(true);
        setValues({...values, isloading: false});
      } else {
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
          />
          <Input
            label="Email"
            placeholder="Masukkan email"
            keyboardType="email-address"
            value={values.email}
            onChangeText={email => setValues({...values, email})}
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
