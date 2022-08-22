/*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Beever
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/

function jumlahTabungan(listHarga, history) {
  // Write your code here
  const tabungan = {};
  const uangSaku = 10000;
  const hari = [];
  let belanja = [];
  const data = history.split(".");

  function getharga(harga, barang) {
    const jajan = harga.filter((item) => {
      return item.nama === barang;
    })[0];
    return jajan.harga;
  }

  //membagi item belanja dan hari
  data.map((item) => {
    const split = item.split("-");
    hari.push(split[0]);
    belanja.push(split[1]);
    return [hari, belanja];
  });
  belanja = belanja.map((item) => {
    const split = item.split(",");
    return split;
  });

  //menghitung sisa uang saku
  const sisaUangSaku = belanja.map(
    (item) =>
      uangSaku -
      item
        .map((i) => {
          return getharga(listHarga, i);
        })
        .reduce((a, b) => {
          return a + b;
        })
  );

  //menghitung tabungan per hari
  hari.map((day, index) => {
    return (tabungan[day] = sisaUangSaku[index]);
  });

  //menghitung total tabungan
  tabungan.TotalTabungan = sisaUangSaku.reduce((a, b) => {
    return a + b;
  });

  return tabungan;
}

var hargaMakanan = [
  {
    nama: "ayam",
    harga: 5000,
  },
  {
    nama: "nasi",
    harga: 2000,
  },
  {
    nama: "cola",
    harga: 1000,
  },
  {
    nama: "chiki",
    harga: 1500,
  },
  {
    nama: "hotdog",
    harga: 3000,
  },
  {
    nama: "aqua",
    harga: 2000,
  },
];

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`;
console.log(jumlahTabungan(hargaMakanan, historyPembelian));
