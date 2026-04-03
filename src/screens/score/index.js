import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './styles';
import {getCekLogin, getHistory} from '../../services';
import Header from '../../components/header';
import {reset} from '../../config/navigationRef';
import {moderateScale} from 'react-native-size-matters';
import moment from 'moment';

function Score() {
  const [values, setValues] = useState({
    isloading: false,
    data: [],
  });

  const handleHistory = async () => {
    try {
      setValues({...values, isloading: true});

      const resLogin = await getCekLogin();
      const res = await getHistory(resLogin.username);
      if (res.statusCode == 200) {
        setValues({...values, data: res.data});
      } else {
        setValues({...values, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  useEffect(() => {
    handleHistory();
  }, []);

  function renderPersentase(item, index) {
    return (
      <View style={styles.box}>
        <Text style={styles.textRow}>{item.kategori_soal}</Text>
        <Text style={styles.persentaseStyle}>{item.persentase}</Text>
      </View>
    );
  }

  function renderData(item, index) {
    return (
      <>
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <Text style={styles.textRow}>Judul</Text>
          </View>
          <View style={styles.rowCenter}>
            <Text style={styles.textRow}>:</Text>
          </View>
          <View style={styles.rowRight}>
            <Text style={styles.textRow}>{item.judul_jadwal}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <Text style={styles.textRow}>Tanggal Mulai</Text>
          </View>
          <View style={styles.rowCenter}>
            <Text style={styles.textRow}>:</Text>
          </View>
          <View style={styles.rowRight}>
            <Text style={styles.textRow}>
              {moment(item.tanggal_mulai).format('DD MMMM YYYY')}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <Text style={styles.textRow}>Tanggal Selesai</Text>
          </View>
          <View style={styles.rowCenter}>
            <Text style={styles.textRow}>:</Text>
          </View>
          <View style={styles.rowRight}>
            <Text style={styles.textRow}>
              {moment(item.tanggal_akhir).format('DD MMMM YYYY')}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <Text style={styles.textRow}>Tanggal Ujian</Text>
          </View>
          <View style={styles.rowCenter}>
            <Text style={styles.textRow}>:</Text>
          </View>
          <View style={styles.rowRight}>
            <Text style={styles.textRow}>
              {moment(item.tanggal_ujian_siswa).format('DD MMMM YYYY')}
            </Text>
          </View>
        </View>

        <Text style={styles.labelPersentase}>Persentase Jawaban</Text>
        <FlatList
          data={item?.persentase_hasil_jawaban}
          renderItem={({item, index}) => renderPersentase(item, index)}
          keyExtractor={item => item.kategori_soal}
          numColumns={2}
        />

        <Text style={styles.labelPersentase}>Dominan</Text>
        <View style={styles.boxDominan}>
          {item?.dominan?.length > 0 ? (
            item?.dominan?.map((data, index) => {
              return (
                <Text style={styles.txtDominan} key={index}>
                  {data}
                </Text>
              );
            })
          ) : (
            <Text style={styles.txtDominan}>Tidak ada yang dominan</Text>
          )}
        </View>
      </>
    );
  }

  return (
    <View style={styles.ctnRoot}>
      <Header
        label={'History'}
        onPress={() => {
          reset('bottomTabs', {screen: 'schedule'});
        }}
      />
      <View style={styles.ctnMain}>
        <FlatList
          data={values.data}
          renderItem={({item, index}) => renderData(item, index)}
          keyExtractor={item => item.judul_jadwal}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={{paddingBottom: moderateScale(80)}} />
          }
          ListEmptyComponent={
            <Text style={styles.noData}>Tidak ada data.</Text>
          }
        />
      </View>
    </View>
  );
}

export default Score;
