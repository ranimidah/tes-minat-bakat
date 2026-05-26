import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import {postLogin} from '../../services';
import {navigate, reset} from '../../config/navigationRef';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalNotif from '../../components/modal-notif';

const imgLogin = require('../../assets/images/image_login.png');
const logo = require('../../assets/images/logo_ut.png');
const logoTia = require('../../assets/images/logo_tia.png');

function Login() {
  const [values, setValues] = useState({
    isloading: false,
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = async () => {
    try {
      setValues({...values, isloading: true});

      /** Validasi Input */
      const isUsernameEmpty = !values.username;
      const isPasswordEmpty = !values.password;
      const isPasswordShort = values.password.length < 8;

      setErrorUsername(isUsernameEmpty);
      setErrorPassword(isPasswordEmpty || isPasswordShort);

      if (isUsernameEmpty || isPasswordEmpty || isPasswordShort) {
        setErrors({
          username: isUsernameEmpty ? 'Username tidak boleh kosong' : '',
          password: isPasswordEmpty
            ? 'Password tidak boleh kosong'
            : isPasswordShort
            ? 'Password minimal 8 karakter'
            : '',
        });
        setValues(prev => ({...prev, isloading: false}));
        return;
      }


      let payload = new FormData();
      payload.append('LoginApi[username]', values.username);
      payload.append('LoginApi[password]', values.password);

      const res = await postLogin(payload);
      if (res.statusCode == 200) {
        await AsyncStorage.setItem('idUser', JSON.stringify(res.data.id));
        await AsyncStorage.setItem('nim', JSON.stringify(res.data.username));
        if (res.data.cek_biodata == 1) {
          reset('bottomTabs');
        } else {
          reset('inputDataDiri');
        }
        setValues({...values, isloading: false});
      } else if (res.status === 'error' && res.message == 'Sudah login') {
        if (res.data.cek_biodata == 1) {
          reset('bottomTabs');
        } else {
          reset('inputDataDiri');
        }
      } else {
        setModalVisible(true);
        setValues({...values, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  function modalNotif() {
      return (
        <ModalNotif
          visible={modalVisible}
          onDismis={() => {
            setModalVisible(false);
          }}
          message="Username atau password salah, silahkan coba lagi!"
          onPress={() => {
            setModalVisible(false);
          }}
          type="info"
        />
      );
    }

  return (
    <View style={styles.ctnRoot}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ctnImage}>
          <Image source={imgLogin} style={styles.imgKey} />
          <View style={styles.rowImage}>
            <Image source={logo} style={styles.imageStyle} />
            <Image source={logoTia} style={styles.imageStyle} />
          </View>
        </View>
        <Text style={styles.title}>L O G I N</Text>
        <View style={styles.ctnMain}>
          <Input
            label="Username"
            placeholder="Masukkan username"
            keyboardType="numeric"
            value={values.username}
            onChangeText={username => {
              setValues({...values, username});
            }}
            error={errorUsername && errors.username}
          />
          <Input
            label="Password"
            placeholder="Masukkan password"
            keyboardType="numeric"
            secureTextEntry
            value={values.password}
            onChangeText={password => {
              setValues({...values, password});
            }}
            error={errorPassword && errors.password}
          />
          <TouchableOpacity
            style={styles.forgotStyle}
            onPress={() => {
              navigate('resetpassword');
            }}>
            <Text style={styles.ctnBtn}>Reset Password</Text>
          </TouchableOpacity>
          <Button
            label="Login"
            isLoading={values.isloading}
            onPress={() => {
              handleLogin();
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.ctntext}>
            Belum punya akun? Silahkan register{' '}
          </Text>
          <TouchableOpacity onPress={() => navigate('register')}>
            <Text style={styles.ctnBtn}>disini</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.privasi}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://tia-application.com/site/privacy')
            }>
            <Text style={styles.ctnPrivasi}>Kebijakan privasi</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
      {modalNotif()}
    </View>
  );
}

export default Login;
