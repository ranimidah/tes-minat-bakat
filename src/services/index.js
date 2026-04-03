import Wrap from './axiosWrapper';

export const postLogin = data =>
  Wrap({
    url: '../service-login996/login',
    method: 'POST',
    data,
  });

export const postRegister = data =>
  Wrap({
    url: '../service-login996/registrasi',
    method: 'POST',
    data,
  });

export const getProvinsi = () =>
  Wrap({
    url: '/get-provinsi',
    method: 'GET',
  });

export const getKotaKab = id =>
  Wrap({
    url: `/get-kota?idprov=${id}`,
    method: 'GET',
  });

export const getKecamatan = id =>
  Wrap({
    url: `/get-kec?idkota=${id}`,
    method: 'GET',
  });

export const getKelurahan = id =>
  Wrap({
    url: `/get-kel?idkel=${id}`,
    method: 'GET',
  });

export const getFakultas = () =>
  Wrap({
    url: '/get-fakultas',
    method: 'GET',
  });

export const getProdi = id =>
  Wrap({
    url: `/get-prodi?idfakultas=${id}`,
    method: 'GET',
  });

export const getJenisLayanan = () =>
  Wrap({
    url: '/get-jenis-layanan',
    method: 'GET',
  });

export const postBiodata = (id, data) =>
  Wrap({
    url: `/input-data-diri?iduser=${id}`,
    method: 'POST',
    data,
  });

export const getLogout = () =>
  Wrap({
    url: '../service-login996/logout',
    method: 'GET',
  });

export const getCekLogin = () =>
  Wrap({
    url: '../service-login996/cek-masuk1',
    method: 'POST',
  });

export const getProfil = id =>
  Wrap({
    url: `/get-data-siswa?iduser=${id}`,
    method: 'GET',
  });

export const getJadwal = () =>
  Wrap({
    url: '/get-jadwal',
    method: 'GET',
  });

export const getDetailJadwalUjian = (id, idUser) =>
  Wrap({
    url: `/get-detail-jadwal?idjadwal=${id}&iduser=${idUser}`,
    method: 'POST',
  });

export const getStartUjian = (id, idUser) =>
  Wrap({
    url: `/start-ujian?idujian=${id}&iduser=${idUser}`,
    method: 'GET',
  });

export const getSoalUjian = (id, noUrut) =>
  Wrap({
    url: `/get-soal-ujian?id=${id}&nourut=${noUrut}`,
    method: 'GET',
  });

export const postJawaban = (data, id, noUrut) =>
  Wrap({
    url: `/simpan-jawaban?id=${id}&nourut=${noUrut}`,
    method: 'POST',
    data,
  });

export const getHistory = nim =>
  Wrap({
    url: `/get-history?nim=${nim}`,
    method: 'GET',
  });

export const getFAQ = () =>
  Wrap({
    url: '/get-faq',
    method: 'GET',
  });

export const updateBiodata = (data, idUser) =>
  Wrap({
    url: `/update-data-diri?iduser=${idUser}`,
    method: 'POST',
    data,
  });

export const updatePhoto = (data, idUser) =>
  Wrap({
    url: `/foto-mahasiswa?iduser=${idUser}`,
    method: 'POST',
    data,
  });

export const postResetPassword = (nim, email) =>
  Wrap({
    url: `/reset-password-user?nim=${nim}&email=${email}`,
    method: 'POST',
  });

export const getJawaban = idUjian =>
  Wrap({
    url: `/data-jawaban-soal?idujian=${idUjian}`,
    method: 'POST',
  });

export const getGenerasi = () =>
  Wrap({
    url: '/get-generasi-usia',
    method: 'GET',
  });
