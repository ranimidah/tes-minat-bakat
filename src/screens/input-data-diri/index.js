import React, {useEffect, useState} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import Input from '../../components/input';
import {SelectList} from 'react-native-dropdown-select-list';
import {fonts} from '../../config/styling';
import Button from '../../components/button';
import {
  getCekLogin,
  getFakultas,
  getGenerasi,
  getJenisLayanan,
  getKecamatan,
  getKelurahan,
  getKotaKab,
  getProdi,
  getProvinsi,
  postBiodata,
} from '../../services';
import {reset} from '../../config/navigationRef';
import ModalNotif from '../../components/modal-notif';

const jk = [
  {key: '1', value: 'Laki-laki'},
  {key: '2', value: 'Perempuan'},
];

const generasi = [
  {key: '1', value: '13 - 22 tahun (Generasi Z)'},
  {key: '2', value: '23 - 38 tahun (Generasi Y)'},
  {key: '3', value: '39 - 54 tahun (Generasi X)'},
  {key: '4', value: '55 - 70 tahun (Generasi Baby Boomers)'},
];

const bgImage = require('../../assets/images/bg.jpg');

function InputDataDiri() {
  const [selected, setSelected] = useState('');
  const [selectedProv, setSelectedProv] = useState('');
  const [selectedKota, setSelectedKota] = useState('');
  const [selectedKec, setSelectedKec] = useState('');
  const [selectedKel, setSelectedKel] = useState('');
  const [selectedFakultas, setSelectedFakultas] = useState('');
  const [selectedProdi, setSelectedProdi] = useState('');
  const [selectedLayanan, setSelectedLayanan] = useState('');
  const [selectedGen, setSelectedGen] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [values, setValues] = useState({
    isloading: false,
    semester: '',
    alamat: '',
    nama: '',
    nim: '',
    idUser: '',
  });
  const [dataProvinsi, setDataProvinsi] = useState({
    isloading: false,
    data: [],
  });
  const [dataKota, setDataKota] = useState({
    isloading: false,
    data: [],
  });
  const [dataKecamatan, setDataKecamatan] = useState({
    isloading: false,
    data: [],
  });
  const [dataKelurahan, setDataKelurahan] = useState({
    isloading: false,
    data: [],
  });
  const [dataFakultas, setDataFakultas] = useState({
    isloading: false,
    data: [],
  });
  const [dataProdi, setDataProdi] = useState({
    isloading: false,
    data: [],
  });
  const [dataLayanan, setDataLayanan] = useState({
    isloading: false,
    data: [],
  });
  const [dataGen, setDataGen] = useState({
    isloading: false,
    data: [],
  });
  const [errors, setErrors] = useState({
    semester: '',
    alamat: '',
    nama: '',
    nim: '',
    idUser: '',
    jk: '',
    provinsi: '',
    kota: '',
    kecamatan: '',
    kelurahan: '',
    fakultas: '',
    prodi: '',
    layanan: '',
    generasi: '',
  });

  const handleDataProvinsi = async () => {
    try {
      setDataProvinsi({...dataProvinsi, isloading: true});
      const res = await getProvinsi();
      if (res.statusCode == 200) {
        let newArray = res.data.map(item => {
          return {key: item.idprov, value: item.prov_name};
        });
        setDataProvinsi({...dataProvinsi, data: newArray});
      } else {
        setDataProvinsi({...dataProvinsi, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const handleDataKota = async id => {
    try {
      setDataKota({...dataKota, isloading: true});
      const res = await getKotaKab(id);
      if (res.statusCode == 200) {
        let kotaArray = res.data.map(item => {
          return {key: item.idcity, value: item.namecity};
        });
        setDataKota({...dataKota, data: kotaArray});
      } else {
        setDataKota({...dataKota, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const handleDataKec = async id => {
    try {
      setDataKecamatan({...dataKecamatan, isloading: true});
      const res = await getKecamatan(id);
      if (res.statusCode == 200) {
        let kelArray = res.data.map(item => {
          return {key: item.iddistrik, value: item.namedistrik};
        });
        setDataKecamatan({...dataKecamatan, data: kelArray});
      } else {
        setDataKecamatan({...dataKecamatan, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const handleDataKel = async id => {
    try {
      setDataKelurahan({...dataKelurahan, isloading: true});
      const res = await getKelurahan(id);
      if (res.statusCode == 200) {
        let kecArray = res.data.map(item => {
          return {key: item.idsubdis, value: item.namesubdis};
        });
        setDataKelurahan({...dataKelurahan, data: kecArray});
      } else {
        setDataKelurahan({...dataKelurahan, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const handleDataFakultas = async () => {
    try {
      setDataFakultas({...dataFakultas, isloading: true});
      const res = await getFakultas();
      if (res.statusCode == 200) {
        let FakultasArray = res.data.map(item => {
          return {key: item.id, value: item.nama_fakultas};
        });
        setDataFakultas({...dataFakultas, data: FakultasArray});
      } else {
        setDataFakultas({...dataFakultas, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const handleDataProdi = async id => {
    try {
      setDataProdi({...dataProdi, isloading: true});
      const res = await getProdi(id);
      if (res.statusCode == 200) {
        let prodiArray = res.data.map(item => {
          return {key: item.id, value: item.nama_jurusan};
        });
        setDataProdi({...dataProdi, data: prodiArray});
      } else {
        setDataProdi({...dataProdi, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const handleDataLayanan = async () => {
    try {
      setDataLayanan({...dataLayanan, isloading: true});
      const res = await getJenisLayanan();
      if (res.statusCode == 200) {
        let layananArray = res.data.map(item => {
          return {key: item.id, value: item.keterangan};
        });
        setDataLayanan({...dataLayanan, data: layananArray});
      } else {
        setDataLayanan({...dataLayanan, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const handleCekLogin = async () => {
    try {
      const res = await getCekLogin();
      if (res.status == 'success') {
        setValues({
          ...values,
          nim: res.username,
          idUser: res.id,
          nama: res.name,
        });
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const handleSubmit = async () => {
    const newErrors = {
      jk: !selected ? 'Jenis kelamin wajib dipilih' : '',
      provinsi: !selectedProv ? 'Provinsi wajib dipilih' : '',
      kota: !selectedKota ? 'Kota/Kabupaten wajib dipilih' : '',
      kecamatan: !selectedKec ? 'Kecamatan wajib dipilih' : '',
      kelurahan: !selectedKel ? 'Kelurahan wajib dipilih' : '',
      fakultas: !selectedFakultas ? 'Fakultas wajib dipilih' : '',
      prodi: !selectedProdi ? 'Program studi wajib dipilih' : '',
      semester: !values.semester ? 'Semester wajib diisi' : '',
      alamat: !values.alamat ? 'Alamat wajib diisi' : '',
      layanan: !selectedLayanan ? 'Jenis layanan wajib dipilih' : '',
      generasi: !selectedGen ? 'Generasi usia wajib dipilih' : '',
    };

    setErrors(prev => ({...prev, ...newErrors}));

    const hasError = Object.values(newErrors).some(e => e !== '');
    if (hasError) {
      return;
    }

    if (
      selected &&
      selectedProv &&
      selectedKota &&
      selectedKec &&
      selectedKel &&
      selectedFakultas &&
      selectedProdi &&
      values.semester &&
      values.alamat &&
      selectedLayanan &&
      selectedGen
    ) {
      try {
        setValues({...values, isloading: true});
        let payload = new FormData();
        payload.append('DataSiswa[jenis_kelamin]', selected);
        payload.append('DataSiswa[provinsi]', selectedProv);
        payload.append('DataSiswa[kota_domisili]', selectedKota);
        payload.append('DataSiswa[kec_domisili]', selectedKec);
        payload.append('DataSiswa[kel_domisili]', selectedKel);
        payload.append('DataSiswa[alamat_sekarang]', values.alamat);
        payload.append('DataSiswa[fakultas]', selectedFakultas);
        payload.append('DataSiswa[program_studi]', selectedProdi);
        payload.append('DataSiswa[semester]', values.semester);
        payload.append('DataSiswa[id_jenis_layanan]', selectedLayanan);
        payload.append('DataSiswa[generasi_usia]', selectedGen);

        const res = await postBiodata(values.idUser, payload);
        if (res.statusCode == 200) {
          reset('bottomTabs');
        } else {
          setValues({...values, isloading: false});
        }
      } catch (err) {
        console.log('Error: ', err);
      }
    } else {
      setModalVisible(true);
    }
  };

  const handleDataGenerasi = async () => {
    try {
      setDataGen({...dataGen, isloading: true});
      const res = await getGenerasi();
      if (res.statusCode == 200) {
        let layananArray = res.data.map(item => {
          return {key: item.id, value: item.keterangan};
        });
        setDataGen({...dataGen, data: layananArray});
      } else {
        setDataGen({...dataGen, isloading: false});
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  useEffect(() => {
    handleDataProvinsi();
    handleDataFakultas();
    handleDataLayanan();
    handleCekLogin();
    handleDataGenerasi();
  }, []);

  function modalNotif() {
    return (
      <ModalNotif
        visible={modalVisible}
        onDismis={() => {
          setModalVisible(false);
        }}
        message="Masih ada data yang belum dilengkai. Harap lengkapi semua data Anda!"
        onPress={() => {
          setModalVisible(false);
        }}
      />
    );
  }

  return (
    <View style={styles.ctnRoot}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={styles.header}>
          <Text style={styles.labelStyle}>INPUT DATA DIRI</Text>
        </ImageBackground>

        <View style={styles.ctnMain}>
          <Input label="Nim" ctnValue={values.nim} disabled />
          <Input label="Nama Siswa" ctnValue={values.nama} disabled />

          <View style={styles.mainWrapper}>
            <Text style={styles.label}>Jenis kelamin</Text>
            <SelectList
              setSelected={val => setSelected(val)}
              save="value"
              fontFamily={fonts.PoppinsRegular}
              data={jk}
              search={false}
              boxStyles={styles.boxStyle} //override default styles
              placeholder={'-- Pilih --'}
            />
            {errors.jk && <Text style={styles.txtRed}>*{errors.jk}</Text>}
          </View>

          <View style={styles.mainWrapper}>
            <Text style={styles.label}>Provinsi</Text>
            <SelectList
              setSelected={prov => {
                setSelectedProv(prov);
                handleDataKota(prov);
              }}
              fontFamily={fonts.PoppinsRegular}
              data={dataProvinsi.data}
              search={true}
              boxStyles={styles.boxStyle} //override default styles
              placeholder={'-- Pilih --'}
            />
            {errors.provinsi && <Text style={styles.txtRed}>*{errors.provinsi}</Text>}
          </View>
          <View style={styles.mainWrapper}>
            <Text style={styles.label}>Kota/Kabupaten</Text>
            <SelectList
              setSelected={kota => {
                setSelectedKota(kota);
                handleDataKec(kota);
              }}
              fontFamily={fonts.PoppinsRegular}
              data={dataKota.data}
              search={true}
              boxStyles={styles.boxStyle} //override default styles
              placeholder={'-- Pilih --'}
            />
            {errors.kota && <Text style={styles.txtRed}>*{errors.kota}</Text>}
          </View>
          <View style={styles.mainWrapper}>
            <Text style={styles.label}>Kecamatan</Text>
            <SelectList
              setSelected={kec => {
                setSelectedKec(kec);
                handleDataKel(kec);
              }}
              fontFamily={fonts.PoppinsRegular}
              data={dataKecamatan.data}
              search={true}
              boxStyles={styles.boxStyle} //override default styles
              placeholder={'-- Pilih --'}
            />
            {errors.kecamatan && <Text style={styles.txtRed}>*{errors.kecamatan}</Text>}
          </View>
          <View style={styles.mainWrapper}>
            <Text style={styles.label}>Kelurahan</Text>
            <SelectList
              setSelected={kel => {
                setSelectedKel(kel);
              }}
              fontFamily={fonts.PoppinsRegular}
              data={dataKelurahan.data}
              search={true}
              boxStyles={styles.boxStyle} //override default styles
              placeholder={'-- Pilih --'}
            />
            {errors.kelurahan && <Text style={styles.txtRed}>*{errors.kelurahan}</Text>}
          </View>
          <View style={styles.mainWrapper}>
            <Text style={styles.label}>Fakultas</Text>
            <SelectList
              setSelected={fak => {
                setSelectedFakultas(fak);
                handleDataProdi(fak);
              }}
              fontFamily={fonts.PoppinsRegular}
              data={dataFakultas.data}
              search={true}
              boxStyles={styles.boxStyle} //override default styles
              placeholder={'-- Pilih --'}
            />
            {errors.fakultas && <Text style={styles.txtRed}>*{errors.fakultas}</Text>}
          </View>
          <View style={styles.mainWrapper}>
            <Text style={styles.label}>Program Studi</Text>
            <SelectList
              setSelected={prodi => {
                setSelectedProdi(prodi);
              }}
              fontFamily={fonts.PoppinsRegular}
              data={dataProdi.data}
              search={true}
              boxStyles={styles.boxStyle} //override default styles
              placeholder={'-- Pilih --'}
            />
            {errors.prodi && <Text style={styles.txtRed}>*{errors.prodi}</Text>}
          </View>
          <Input
            label="Semester"
            placeholder="Masukkan semester"
            keyboardType="numeric"
            value={values.semester}
            onChangeText={semester => {
              setValues({...values, semester});
            }}
            error={errors.semester}
          />
          <Input
            label="Alamat Sekarang"
            placeholder="Masukkan alamat sekarang"
            multiline
            value={values.alamat}
            onChangeText={alamat => {
              setValues({...values, alamat});
            }}
            error={errors.alamat}
          />
          <View style={styles.mainWrapper}>
            <Text style={styles.label}>Jenis Layanan</Text>
            <SelectList
              setSelected={lay => {
                setSelectedLayanan(lay);
              }}
              fontFamily={fonts.PoppinsRegular}
              data={dataLayanan.data}
              search={true}
              boxStyles={styles.boxStyle} //override default styles
              placeholder={'-- Pilih --'}
            />
            {errors.layanan && <Text style={styles.txtRed}>*{errors.layanan}</Text>}
          </View>
          <View style={styles.mainWrapper}>
            <Text style={styles.label}>Generasi Usia</Text>
            <SelectList
              setSelected={val => {
                setSelectedGen(val);
              }}
              save="value"
              fontFamily={fonts.PoppinsRegular}
              data={dataGen.data}
              search={true}
              boxStyles={styles.boxStyle} //override default styles
              placeholder={'-- Pilih --'}
            />
            {errors.generasi && <Text style={styles.txtRed}>*{errors.generasi}</Text>}
          </View>
          <Button
            label={'Simpan Data'}
            isLoading={values.isloading}
            onPress={() => {
              handleSubmit();
            }}
          />
        </View>
      </ScrollView>
      {modalNotif()}
    </View>
  );
}

export default InputDataDiri;
