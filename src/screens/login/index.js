import React, {useState} from 'react';
import {
  Image,
  Linking,
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

const imgLogin = require('../../assets/images/image_login.png');
const logo = require('../../assets/images/logo_ut.png');
const logoTia = require('../../assets/images/logo_tia.png');

function Login() {
  const [values, setValues] = useState({
    isloading: false,
    username: '',
    password: '',
  });

  const handleLogin = async () => {
    try {
      setValues({...values, isloading: true});
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
      } else {
        setValues({...values, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

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
    </View>
  );
}

export default Login;
