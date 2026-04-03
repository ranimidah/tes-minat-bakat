import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './styles';
import Header from '../../components/header';
import {goBack, navigate, reset} from '../../config/navigationRef';
import {getDetailJadwalUjian, getStartUjian} from '../../services';
import {useRoute} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';
import Button from '../../components/button';
import ModalNotif from '../../components/modal-notif';
import LoadingIndicator from '../../components/loading-indicator';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ScheduleDetail() {
  const route = useRoute();
  const id = route?.params?.id;

  const [detailJadwal, setDetailJadwal] = useState({
    isloading: false,
    data: [],
    hasilUjian: null,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [examp, setExamp] = useState({
    isloading: false,
    data: [],
  });
  const [notifMsg, setNotifMsg] = useState('');

  const handleDetail = async () => {
    try {
      setDetailJadwal({...detailJadwal, isloading: true});
      const idUser = await AsyncStorage.getItem('idUser');
      const res = await getDetailJadwalUjian(id, idUser);

      if (res.statusCode == 200) {
        setDetailJadwal({
          ...detailJadwal,
          data: res.data,
          hasilUjian: res.hasil_ujian,
        });
      } else {
        setDetailJadwal({...detailJadwal, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const handleMulaiUjian = async () => {
    try {
      setExamp({...examp, isloading: true});
      const idUser = await AsyncStorage.getItem('idUser');
      const res = await getStartUjian(id, idUser);
      if (res.statusCode == 200) {
        setExamp({...examp, data: res.data});
        if (detailJadwal?.hasilUjian == 0) {
          await AsyncStorage.setItem(
            'dataUjian' + id,
            JSON.stringify(res.data),
          );
          await AsyncStorage.setItem(
            'idUjian',
            JSON.stringify(res?.data[0]?.id_ujian),
          );
        }
        navigate('question', {id});
      } else {
        setExamp({...examp, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  useEffect(() => {
    handleDetail();
  }, []);

  function renderTitle(item) {
    if (item.kelompok_soal == 'Linguistik') {
      return <Text style={styles.title}>Detail Kategori Linguistik</Text>;
    } else if (item.kelompok_soal == 'Logis Matematis') {
      return <Text style={styles.title}>Detail Kategori Logis Matematis</Text>;
    } else if (item.kelompok_soal == 'Kinestetik') {
      return <Text style={styles.title}>Detail Kategori Kinestetik</Text>;
    } else if (item.kelompok_soal == 'Musikal') {
      return <Text style={styles.title}>Detail Kategori Musikal</Text>;
    } else if (item.kelompok_soal == 'Interpersonal') {
      return <Text style={styles.title}>Detail Kategori Interpersonal</Text>;
    } else {
      return <Text style={styles.title}>Detail Kategori Intrapersonal</Text>;
    }
  }

  function renderData(item, index) {
    return (
      <View style={styles.ctnBox}>
        <View style={styles.titleBg}>{renderTitle(item)}</View>
        <View style={[styles.ctnRow]}>
          <View style={styles.rowLeft}>
            <Text style={styles.textstyle}>Kelompok Soal</Text>
          </View>
          <View style={styles.rowCenter}>
            <Text style={styles.textstyle}>:</Text>
          </View>
          <View style={styles.rowRight}>
            <Text style={styles.textstyle}>{item.kelompok_soal}</Text>
          </View>
        </View>
        <View style={[styles.ctnRow, styles.bgGray]}>
          <View style={styles.rowLeft}>
            <Text style={styles.textstyle}>Jumlah Soal</Text>
          </View>
          <View style={styles.rowCenter}>
            <Text style={styles.textstyle}>:</Text>
          </View>
          <View style={styles.rowRight}>
            <Text style={styles.textstyle}>{item.jumlah_soal}</Text>
          </View>
        </View>
        <View style={[styles.ctnRow]}>
          <View style={styles.rowLeft}>
            <Text style={styles.textstyle}>Score Minimum</Text>
          </View>
          <View style={styles.rowCenter}>
            <Text style={styles.textstyle}>:</Text>
          </View>
          <View style={styles.rowRight}>
            <Text style={styles.textstyle}>{item.score_minimum}</Text>
          </View>
        </View>
      </View>
    );
  }

  function modalNotif() {
    return (
      <ModalNotif
        visible={modalVisible}
        onDismiss={() => {
          setModalVisible(false);
        }}
        type="info"
        message={notifMsg}
        onPress={() => {
          setModalVisible(false);
          handleMulaiUjian();
        }}
      />
    );
  }

  return detailJadwal.isloading ? (
    <LoadingIndicator fullscreen size="large" />
  ) : (
    <View style={styles.ctnRoot}>
      <Header
        label="Detail"
        onPress={() => {
          goBack();
        }}
      />
      <View style={styles.ctnMain}>
        <FlatList
          data={detailJadwal.data}
          renderItem={({item, index}) => renderData(item, index)}
          keyExtractor={item => item.id_detail_jadwal}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={{paddingBottom: moderateScale(180)}} />
          }
          ListEmptyComponent={
            <Text style={styles.noData}>Tidak ada data.</Text>
          }
        />

        {detailJadwal.data && (
          <View style={styles.absoluteStyle}>
            <Button
              label={
                detailJadwal?.hasilUjian == 0
                  ? 'Mulai Ujian'
                  : detailJadwal?.hasilUjian == 1
                  ? 'Lanjutkan Ujian'
                  : 'Lihat History'
              }
              onPress={() => {
                if (detailJadwal?.hasilUjian == 0) {
                  setNotifMsg('Yakin Memulai Ujian?');
                  setModalVisible(true);
                } else if (detailJadwal?.hasilUjian == 1) {
                  setNotifMsg(
                    'Anda sudah memulai ujian sebelumnya, lanjut menyelesaikan ujian?',
                  );
                  setModalVisible(true);
                } else {
                  reset('score');
                }
              }}
            />
          </View>
        )}
      </View>
      {modalNotif()}
    </View>
  );
}

export default ScheduleDetail;
