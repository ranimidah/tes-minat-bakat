import React, {useState} from 'react';
import {
  Alert,
  Image,
  Linking,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import {postRegister} from '../../services';
import ModalNotif from '../../components/modal-notif';
import {reset} from '../../config/navigationRef';

const imgLogin = require('../../assets/images/img_register.png');

function Register() {
  const [values, setValues] = useState({
    isloading: false,
    nim: '',
    nama: '',
    email: '',
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalNotif, setModalNotif] = useState(false);
  const [dataMessage, setDataMessage] = useState('');

  const handleSubmit = async () => {
    try {
      setValues({...values, isloading: true});
      let payload = new FormData();
      payload.append('SignupForm[username]', values.nama);
      payload.append('SignupForm[name]', values.nim);
      payload.append('SignupForm[email]', values.email);

      const res = await postRegister(payload);
      if (res.status == 'success') {
        setDataMessage(res.message);
        setModalVisible(true);
        setValues({...values, isloading: false});
      } else {
        // setDataMessage(
        //   'Silahkan Periksa Kembali Data Anda. Pastika NIM, Nama, dan Email Anda Benar!',
        // );
        setDataMessage(res.message);
        setModalNotif(true);
        setValues({...values, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
      setDataMessage(err);
      setValues({...values, isloading: false});
    }
  };

  function ModalNotifInfo() {
    return (
      <ModalNotif
        visible={modalNotif}
        onDismiss={() => setModalNotif(false)}
        type="info"
        message={dataMessage}
        onPress={() => {
          setModalNotif(false);
        }}
      />
    );
  }

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
      <ScrollView style={styles.ctnMain} showsHorizontalScrollIndicator={false}>
        <View style={styles.ctnImage}>
          <Image source={imgLogin} style={styles.imgKey} />
        </View>
        <Text style={styles.title}>R E G I S T E R</Text>
        <View>
          <Input
            label="NIM"
            placeholder="Masukkan NIM"
            keyboardType="numeric"
            value={values.nim}
            onChangeText={nim => setValues({...values, nim})}
          />
          <Input
            label="Nama Lengkap"
            placeholder="Masukkan nama lengkap"
            value={values.nama}
            onChangeText={nama => setValues({...values, nama})}
          />
          <Input
            label="Email"
            placeholder="Masukkan email"
            keyboardType="email-address"
            value={values.email}
            onChangeText={email => setValues({...values, email})}
          />
          <Button
            label="Register"
            isLoading={values.isloading}
            onPress={() => {
              handleSubmit();
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.ctntext}>Sudah punya akun? Login </Text>
          <TouchableOpacity onPress={() => reset('login')}>
            <Text style={styles.ctnBtn}>disini</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {ModalSuccess()}
      {ModalNotifInfo()}
    </View>
  );
}

export default Register;
