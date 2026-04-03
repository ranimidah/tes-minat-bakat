import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './styles';
import Header from '../../components/header';
import {goBack} from '../../config/navigationRef';
import {getFAQ} from '../../services';
import {moderateScale} from 'react-native-size-matters';
import LoadingIndicator from '../../components/loading-indicator';

function Faq() {
  const [faq, setFaq] = useState({
    isloading: false,
    data: [],
  });
  const [show, setShow] = useState(false);
  const [idActive, setIdActive] = useState(null);

  const handleDataFAQ = async () => {
    try {
      setFaq({...faq, isloading: true});
      const res = await getFAQ();
      if (res.statusCode == 200) {
        setFaq({...faq, data: res.data});
      } else {
        setFaq({...faq, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  useEffect(() => {
    handleDataFAQ();

    if (faq?.data?.length > 0) {
      setShow(true);
      setIdActive(faq?.data[0]?.id); // Index 1 pada array adalah elemen dengan index 0
    }
  }, []);

  function renderJawabanFaq(faqJawaban) {
    if (faqJawaban?.length > 1) {
      return faqJawaban?.map((data, index) => {
        return (
          <View style={styles.rowJawaban} key={index}>
            <Text style={styles.rowNumber}>{index + 1}. </Text>
            <Text style={styles.rowText}>{data.keterangan}</Text>
          </View>
        );
      });
    }

    return <Text style={styles.ctnContent}>{faqJawaban[0].keterangan}</Text>;
  }

  function renderData(item, index) {
    return (
      <View style={styles.ctnBox}>
        <View style={styles.bgBoxHeader}>
          <TouchableWithoutFeedback
            onPress={() => {
              setShow(true);
              setIdActive(item.id);
            }}>
            <View style={styles.row}>
              <View style={styles.flexLeft}>
                <Text style={styles.ctnTitle}>{item?.faq}</Text>
              </View>
              <View style={styles.flexRight}>
                <View style={styles.bgIcon}>
                  {show && idActive == item.id ? (
                    <Text style={styles.iconRight}>-</Text>
                  ) : (
                    <Text style={styles.iconRight}>+</Text>
                  )}
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        {show && idActive == item.id && (
          <View style={styles.boxContent}>
            {renderJawabanFaq(item?.jawaban)}
          </View>
        )}
      </View>
    );
  }

  return faq?.isloading ? (
    <LoadingIndicator fullscreen size="large" />
  ) : (
    <View style={styles.ctnRoot}>
      <Header
        label="FAQ"
        onPress={() => {
          goBack();
        }}
      />
      <View style={styles.ctnMain}>
        <FlatList
          data={faq.data}
          renderItem={({item, index}) => renderData(item, index)}
          keyExtractor={item => item.idjadwal}
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

export default Faq;
