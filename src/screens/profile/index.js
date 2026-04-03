import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getProfil, updatePhoto} from '../../services';
import IconPencil from '../../assets/svg/icon_pencil.svg';
import {URL_PHOTO} from '../../config/static';
import {navigate} from '../../config/navigationRef';
import DocumentPicker from 'react-native-document-picker';

const avatar = require('../../assets/images/avatar.jpg');

function Profile() {
  const [dataProfil, setDataProfil] = useState({
    isloading: false,
    data: {},
  });
  const [images, setImages] = useState({});
  const [isloading, setLoading] = useState(false);

  const handleProfil = async () => {
    try {
      setDataProfil({...dataProfil, isloading: true});
      const idUser = await AsyncStorage.getItem('idUser');
      setDataProfil({...dataProfil, idUser: idUser});

      const res = await getProfil(idUser);
      if (res.statusCode == 200) {
        setDataProfil({...dataProfil, data: res.data, isloading: false});
      } else {
        setDataProfil({...dataProfil, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const handleDocumentPicker = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      const contentUri = result[0];
      let source = {
        name: contentUri.name,
        uri: contentUri.uri,
        type: contentUri.type,
        size: contentUri.size,
      };
      setImages(source);
      // console.log(source);
      handleUpdate(source);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const handleUpdate = async source => {
    try {
      setLoading(true);
      let payload = new FormData();
      payload.append('User[input_photo]', source);

      const idUser = await AsyncStorage.getItem('idUser');
      const res = await updatePhoto(payload, idUser);

      if (res.statusCode == 200) {
        handleProfil();
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  useEffect(() => {
    handleProfil();
  }, []);

  function imageProfil() {
    if (dataProfil?.data?.foto) {
      if (dataProfil?.data?.foto == URL_PHOTO) {
        return <Image source={avatar} style={styles.avatarStyle} />;
      }
      return (
        <Image
          source={{uri: dataProfil?.data?.foto}}
          style={styles.avatarStyle}
        />
      );
    }
    return <Image source={avatar} style={styles.avatarStyle} />;
  }

  return (
    <View style={styles.ctnRoot}>
      <ScrollView styles={styles.ctnMain} showsVerticalScrollIndicator={false}>
        <View style={styles.mainRoot}>
          <View style={styles.boxAvatar}>
            {imageProfil()}
            <TouchableOpacity
              style={styles.absBtn}
              onPress={() => {
                handleDocumentPicker();
              }}>
              <View style={styles.ctnIcon}>
                <IconPencil width="100%" height="100%" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rowHeader}>
            <Text style={styles.title}>Profil</Text>
            <TouchableOpacity
              style={styles.btnEdit}
              onPress={() => {
                navigate('updateDataDiri', {dataProfil});
              }}>
              <Text style={styles.txtEdit}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>NIM</Text>
            <Text style={styles.ctnText}>{dataProfil?.data?.nim}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Nama Lengkap</Text>
            <Text style={styles.ctnText}>{dataProfil?.data?.nama_siswa}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Jenis Kelamin</Text>
            <Text style={styles.ctnText}>
              {dataProfil?.data?.jenis_kelamin}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Fakultas</Text>
            <Text style={styles.ctnText}>{dataProfil?.data?.fakultas}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Program Studi</Text>
            <Text style={styles.ctnText}>
              {dataProfil?.data?.program_studi}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Semester</Text>
            <Text style={styles.ctnText}>{dataProfil?.data?.semester}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Provinsi</Text>
            <Text style={styles.ctnText}>{dataProfil?.data?.provisi}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Kota/Kabupaten</Text>
            <Text style={styles.ctnText}>
              {dataProfil?.data?.kota_domisili}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Kecamatan</Text>
            <Text style={styles.ctnText}>{dataProfil?.data?.kec_domisili}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Kelurahan</Text>
            <Text style={styles.ctnText}>{dataProfil?.data?.kel_domisili}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Alamat</Text>
            <Text style={styles.ctnText}>
              {dataProfil?.data?.alamat_sekarang}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Profile;
