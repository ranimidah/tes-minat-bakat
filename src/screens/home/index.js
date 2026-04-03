import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import moment from 'moment';
import {getLogout, getProfil} from '../../services';
import {navigate, reset} from '../../config/navigationRef';
import LoadingIndicator from '../../components/loading-indicator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const logoUtName = require('../../assets/images/logo_ut_name.png');
const logoTia = require('../../assets/images/logo_tia.png');
const bgImage = require('../../assets/images/bg.jpg');
const imageIlustration = require('../../assets/images/image_school.png');

function Home() {
  const [values, setValues] = useState({
    isloading: false,
  });
  const [dataProfil, setDataProfil] = useState({
    isloading: false,
    data: {},
  });

  const handleLogout = async () => {
    try {
      setValues({...values, isloading: true});
      const res = await getLogout();
      if (res.status == 'success') {
        await AsyncStorage.removeItem('idUser');
        await AsyncStorage.removeItem('dataUjian');
        await AsyncStorage.removeItem('nim');
        await AsyncStorage.removeItem('idUjian');
        reset('login');
      } else {
        setValues({...values, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const handleProfil = async () => {
    try {
      setDataProfil({...dataProfil, isloading: true});
      const idUser = await AsyncStorage.getItem('idUser');
      const res = await getProfil(idUser);
      if (res.statusCode == 200) {
        setDataProfil({...dataProfil, data: res.data});
      } else {
        setDataProfil({...dataProfil, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  useEffect(() => {
    handleProfil();
  }, []);

  return (
    <View style={styles.ctnRoot}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={logoUtName} style={styles.logo} />
          <Image source={logoTia} style={styles.logo} />
        </View>
        <View style={styles.ctnBg}>
          <ImageBackground
            source={bgImage}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.text}>Welcome My Friend</Text>
            <Text style={styles.nameStyle}>{dataProfil?.data?.nama_siswa}</Text>
            <Text style={styles.dateStyle}>
              {moment().format('dddd')}, {moment().format('DD MMMM YYYY')}
            </Text>
            <View style={styles.positionRight}>
              <TouchableOpacity
                style={styles.btnLogout}
                onPress={() => {
                  handleLogout();
                }}>
                {values.isloading ? (
                  <LoadingIndicator color="#1B4196" />
                ) : (
                  <Text style={styles.txtBtn}>Logout</Text>
                )}
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.ctnTitle}>
          <Text style={styles.titlehead}>Talent and Interest Allocation</Text>
        </View>
        <View style={styles.ctnImage}>
          <Image source={imageIlustration} style={styles.imgStyle} />
          <TouchableOpacity
            style={styles.btnStart}
            onPress={() => {
              navigate('schedule');
            }}>
            <Text style={styles.txtStyle}>Start</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
