import React, {useEffect, useState} from 'react';
import {BackHandler, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/header';
import {
  getCekLogin,
  getHistory,
  getJawaban,
  getSoalUjian,
  postJawaban,
} from '../../services';
import {RadioButton} from 'react-native-paper';
import {colors} from '../../config/styling';
import ModalNotif from '../../components/modal-notif';
import {reset} from '../../config/navigationRef';
import LoadingIndicator from '../../components/loading-indicator';

const avatar = require('../../assets/images/avatar.jpg');

function Question() {
  const route = useRoute();
  const id = route?.params?.id;

  const [dataUjian, setDataUjian] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track current question index
  const [soal, setSoal] = useState({
    isloading: false,
    data: {},
  });
  const [values, setValues] = useState({
    isloading: false,
    jawaban: {},
  });
  // const [modalVisible, setModalVisible] = useState(false);
  const [modalBack, setModalBack] = useState(false);
  const [notifMsg, setNotifMsg] = useState('');
  const [listJawaban, setListJawaban] = useState({
    isloading: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleData = async () => {
    const data = await AsyncStorage.getItem('dataUjian' + id);
    setDataUjian(JSON.parse(data));
  };

  const handleSoalUjian = async (id, noUrut) => {
    try {
      setSoal({...soal, isloading: true});
      const res = await getSoalUjian(id, noUrut);
      if (res.statusCode == 200) {
        setSoal({...soal, data: res.data});
      } else {
        setSoal({...soal, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const handleJawaban = async (id, noUrut) => {
    try {
      setValues(prevState => ({...prevState, isloading: true}));
      let jawaban;
      if (values.jawaban[currentIndex] == undefined) {
        jawaban = null;
      } else {
        jawaban = values.jawaban[currentIndex] ?? null;
      }

      let payload = new FormData();
      payload.append('SoalUjian[jawaban]', jawaban);

      const res = await postJawaban(payload, id, noUrut);
      if (res.statusCode == 200) {
        if (currentIndex === dataUjian.length - 1) {
          reset('selesaiUjian');
          setValues(prevState => ({...prevState, isloading: false}));
        }
      } else {
        setValues(prevState => ({...prevState, isloading: false}));
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const handleDetailJawaban = async () => {
    try {
      setListJawaban({...listJawaban, isloading: true});
      const idUjian = await AsyncStorage.getItem('idUjian');
      const res = await getJawaban(idUjian);

      if (res.statusCode == 200) {
        const mappedJawaban = res.data.reduce((acc, item) => {
          acc[item.no_urut - 1] = item.jawaban.toString(); // Gunakan indeks array (no_urut - 1)
          return acc;
        }, {});

        setValues(prevState => ({
          ...prevState,
          jawaban: mappedJawaban, // Set jawaban awal
        }));
      } else {
        setListJawaban({...listJawaban, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const backAction = () => {
    setNotifMsg('Anda yakin ingin keluar dari ujian dan mengulangnya nanti?');
    setModalBack(true);
    return true; // Mengindikasikan bahwa event telah ditangani
  };

  useEffect(() => {
    handleData();
    handleDetailJawaban();

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    if (dataUjian.length > 0) {
      const {id, no_urut} = dataUjian[currentIndex];
      handleSoalUjian(id, no_urut); // Memanggil soal pertama berdasarkan data
    }
  }, [dataUjian, currentIndex]);

  const jumlahData = dataUjian.length;
  const dataPertama = jumlahData > 0 ? dataUjian[0] : null;
  const dataTerakhir = jumlahData > 0 ? dataUjian[jumlahData - 1] : null;

  // function renderNotif() {
  //   return (
  //     <ModalNotif
  //       type="info"
  //       visible={modalVisible}
  //       onDismiss={() => {
  //         setModalVisible(false);
  //       }}
  //       message={notifMsg}
  //       onPress={() => reset('score')}
  //     />
  //   );
  // }

  function modalBackNotif() {
    return (
      <ModalNotif
        visible={modalBack}
        onDismiss={() => {
          setModalBack(false);
        }}
        type="popup"
        message={notifMsg}
        txtBtnRight="Ya"
        onPress={() => {
          reset('bottomTabs', {screen: 'schedule'});
        }}
        txtBtnLeft="Tidak"
        onPressTutup={() => {
          setModalBack(false);
        }}
      />
    );
  }

  function imageRender(gambar) {
    if (gambar) {
      return <Image source={{uri: gambar}} style={styles.imgStyle} />;
    }
    return false;
  }

  function renderCurrentQuestion() {
    const currentQuestion = dataUjian[currentIndex];

    return currentQuestion ? (
      <View style={styles.relativePosition}>
        <Text style={styles.numberStyle}>Nomor {soal?.data?.no_urut}</Text>
        <Text style={styles.ctnText}>{soal?.data?.soal_ujian}</Text>
        {imageRender(soal?.data?.foto)}
        <RadioButton.Group
          onValueChange={jawaban => {
            setValues(prevState => ({
              ...prevState,
              jawaban: {...prevState.jawaban, [currentIndex]: jawaban},
            }));
          }}
          value={values.jawaban[currentIndex] || ''}>
          <View style={styles.rowChoice}>
            <RadioButton color={colors.blue} value="0" />
            <Text style={styles.textSTyle}>Tidak Pernah</Text>
          </View>
          <View style={styles.rowChoice}>
            <RadioButton color={colors.blue} value="1" />
            <Text style={styles.textSTyle}>Sangat Jarang</Text>
          </View>
          <View style={styles.rowChoice}>
            <RadioButton color={colors.blue} value="2" />
            <Text style={styles.textSTyle}>Kadang-kadang</Text>
          </View>
          <View style={styles.rowChoice}>
            <RadioButton color={colors.blue} value="3" />
            <Text style={styles.textSTyle}>Sering</Text>
          </View>
          <View style={styles.rowChoice}>
            <RadioButton color={colors.blue} value="4" />
            <Text style={styles.textSTyle}>Selalu</Text>
          </View>
        </RadioButton.Group>
      </View>
    ) : (
      <Text style={styles.noData}>Tidak ada data.</Text>
    );
  }

  return (
    <View style={styles.ctnRoot}>
      <Header
        label="Soal Ujian"
        onPress={() => {
          setNotifMsg(
            'Anda yakin ingin keluar dari ujian dan mengulangnya nanti?',
          );
          setModalBack(true);
        }}
      />
      <View style={styles.ctnMain}>{renderCurrentQuestion()}</View>
      <View style={styles.absoluteStyle}>
        <View style={styles.rowBtn}>
          {currentIndex === 0 ? (
            <View />
          ) : (
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => {
                setCurrentIndex(prev => Math.max(prev - 1, 0));
              }}
              disabled={currentIndex === 0} // Disable if at first question
            >
              <Text style={styles.txtBack}>Back</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.nextBtn}
            onPress={async () => {
              const currentQuestion = dataUjian[currentIndex];

              if (currentQuestion && currentIndex < dataUjian.length - 1) {
                /** Kirim jawaban ke backend */
                if (values.jawaban[currentIndex]) {
                  await handleJawaban(
                    currentQuestion.id,
                    currentQuestion.no_urut,
                  );
                }

                /** Lanjut ke soal berikutnya */
                setCurrentIndex(prev =>
                  Math.min(prev + 1, dataUjian.length - 1),
                );
              } else {
                /** soal terakhir */
                setIsSubmitting(true);
                try {
                  await AsyncStorage.removeItem('idUjian');
                  await handleJawaban(
                    currentQuestion.id,
                    currentQuestion.no_urut,
                  );
                } catch (error) {
                  console.error(error);
                } finally {
                  setIsSubmitting(false);
                }
              }
            }}>
            {currentIndex === dataUjian.length - 1 && isSubmitting ? (
              <LoadingIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.txtNext}>
                {currentIndex === dataUjian.length - 1
                  ? 'Simpan dan Selesai'
                  : 'Next'}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
      {/* {renderNotif()} */}
      {modalBackNotif()}
    </View>
  );
}

export default Question;
