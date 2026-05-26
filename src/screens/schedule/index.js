import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import DateIcon from '../../assets/svg/icon_date.svg';
import styles from './styles';
import {getJadwal} from '../../services';
import {moderateScale} from 'react-native-size-matters';
import moment from 'moment';
import {navigate} from '../../config/navigationRef';
import LoadingIndicator from '../../components/loading-indicator';

function Schedule() {
  const [dataJadwal, setDataJadwal] = useState({
    isloading: false,
    data: [],
  });

  const handleJadwal = async () => {
    try {
      setDataJadwal({...dataJadwal, isloading: true});
      const res = await getJadwal();
      if (res.statusCode == 200) {
        setDataJadwal({...dataJadwal, data: res.data});
      } else {
        setDataJadwal({...dataJadwal, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  useEffect(() => {
    handleJadwal();
  }, []);

  function renderHeader() {
    return (
      <View style={styles.boxHeader}>
        <Text style={styles.header}>Daftar Ujian</Text>
      </View>
    );
  }

  function renderData(item, index) {
    return (
      <View style={styles.rowBox}>
        <View style={styles.flexLeft}>
          <View style={styles.ctnIcon}>
            <DateIcon width="100%" height="100%" />
          </View>
        </View>
        <View style={styles.flexRight}>
          <Text style={styles.title}>{item.judul}</Text>
          <View style={styles.rowChild}>
            <View style={styles.childLeft}>
              <Text style={styles.labelChild}>Tanggal Mulai</Text>
              <Text style={styles.textChild}>
                {moment(item.tanggal_start).format('DD MMM YYYY')}
              </Text>
            </View>
            <View style={styles.childRight}>
              <Text style={styles.labelChild}>Tanggal Selesai</Text>
              <Text style={styles.textChild}>
                {moment(item.tanggal_end).format('DD MMM YYYY')}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.btnDetail}
            onPress={() => {
              navigate('scheduleDetail', {id: item.idjadwal});
            }}>
            <Text style={styles.btnText}>Detail</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return dataJadwal.isloading ? <LoadingIndicator color="blue" fullscreen /> : (
    <View style={styles.ctnRoot}>
      <View style={styles.ctnMain}>
        <FlatList
          data={dataJadwal.data}
          renderItem={({item, index}) => renderData(item, index)}
          keyExtractor={item => item.idjadwal}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={renderHeader()}
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

export default Schedule;
