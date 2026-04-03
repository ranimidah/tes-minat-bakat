import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import Header from '../../components/header';
import Button from '../../components/button';
import {getCekLogin, getHistory} from '../../services';
import {reset} from '../../config/navigationRef';

const imgDef = require('../../assets/images/rb_2925.png');

function SelesaiUjian() {
  const [dataHistory, setDataHistory] = useState({
    isloading: false,
    data: [],
  });

  const handleHistory = async () => {
    try {
      setDataHistory({...dataHistory, isloading: true});
      const res = await getCekLogin();
      const resHistory = await getHistory(res.username);

      if (resHistory.statusCode == 200) {
        setDataHistory({...dataHistory, data: resHistory.data[0].dominan});
      } else {
        setDataHistory({...dataHistory, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  useEffect(() => {
    handleHistory();
  }, []);

  return (
    <View style={styles.ctnRoot}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={imgDef} style={styles.imageStyle} />
        <View style={styles.ctnMain}>
          <Text style={styles.textStyle}>
            Hasil Tes Menunjukkan{'\n'}Anda Lebih Dominan ke
          </Text>
          <View style={dataHistory?.data?.length < 5 && styles.margin}>
            {dataHistory?.data?.length > 0 ? (
              dataHistory?.data?.map((item, index) => {
                return (
                  <Text style={styles.labelStyle} key={index}>
                    {item}
                  </Text>
                );
              })
            ) : (
              <Text style={styles.labelStyle}>Tidak ada yang dominan</Text>
            )}
          </View>
          <Button
            btnStyle={styles.btnStyle}
            label={'Lihat History'}
            onPress={() => {
              reset('score');
            }}
          />
          <Button
            type="gray"
            label={'Kembali'}
            onPress={() => {
              reset('bottomTabs');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default SelesaiUjian;
