export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogArticle {
  slug: string;
  category: string;
  title: string;
  description: string;
  intro: string;
  sections: BlogSection[];
  href: string;
  cta: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "cara-membuat-kata-sandi-kuat",
    category: "Keamanan Digital",
    title: "Cara Membuat Kata Sandi yang Kuat dan Aman",
    description:
      "Pelajari cara membuat kata sandi yang panjang, unik, dan lebih sulit ditebak serta cara mengelolanya dengan aman.",
    intro:
      "Kata sandi masih menjadi salah satu lapisan perlindungan yang banyak digunakan untuk mengamankan akun digital. Kata sandi yang mudah ditebak atau digunakan berulang kali pada berbagai layanan dapat meningkatkan risiko ketika salah satu akun mengalami kebocoran.",
    sections: [
      {
        heading: "Apa yang Membuat Kata Sandi Lebih Kuat?",
        paragraphs: [
          "Panjang dan keunikan merupakan dua hal penting ketika membuat kata sandi. Hindari informasi yang mudah ditebak, seperti nama, tanggal lahir, nama anggota keluarga, atau pola angka sederhana.",
          "Kata sandi yang lebih panjang umumnya menyediakan lebih banyak kemungkinan kombinasi. Kombinasi karakter yang beragam juga dapat membantu, tetapi menambahkan simbol saja tidak otomatis membuat kata sandi aman apabila polanya mudah ditebak.",
        ],
      },
      {
        heading: "Cara Membuat dan Mengelola Kata Sandi",
        paragraphs: [
          "Gunakan kata sandi yang berbeda untuk setiap akun penting. Dengan begitu, jika satu layanan mengalami kebocoran, kata sandi yang sama tidak langsung membuka akun lain.",
          "Pengelola kata sandi dapat membantu membuat dan menyimpan kata sandi unik. Aktifkan juga autentikasi multifaktor apabila tersedia, terutama pada akun email, perbankan, dan layanan penting lainnya.",
        ],
      },
      {
        heading: "Kesalahan yang Perlu Dihindari",
        paragraphs: [
          "Jangan membagikan kata sandi kepada orang lain atau menyimpannya di tempat yang dapat diakses publik. Berhati-hatilah terhadap pesan yang meminta informasi login dan selalu periksa alamat situs sebelum memasukkan kata sandi.",
          "Password Generator dapat membantu menghasilkan kombinasi acak. Sebelum menggunakannya untuk akun penting, pastikan Anda memahami bagaimana alat tersebut bekerja dan bagaimana kata sandi dihasilkan serta ditangani.",
        ],
      },
    ],
    href: "/tools/password-generator",
    cta: "Coba Password Generator",
  },
  {
    slug: "mengenal-json-dan-cara-membacanya",
    category: "Pengembangan Web",
    title: "Apa Itu JSON dan Bagaimana Cara Membacanya?",
    description:
      "Kenali struktur JSON, objek, array, aturan sintaks, dan perbedaan antara memformat serta memvalidasi data.",
    intro:
      "JSON (JavaScript Object Notation) adalah format pertukaran data berbasis teks yang banyak digunakan dalam aplikasi web, konfigurasi, dan komunikasi API. Format ini relatif mudah dibaca manusia sekaligus mudah diproses oleh program.",
    sections: [
      {
        heading: "Mengenal Objek dan Array",
        paragraphs: [
          "Objek JSON ditulis menggunakan kurung kurawal dan menyimpan pasangan nama properti serta nilai. Nama properti berupa string yang diapit tanda kutip ganda, sedangkan nilainya dapat berupa string, angka, boolean, null, objek, atau array.",
          "Array ditulis menggunakan kurung siku dan berisi urutan nilai. Objek dan array dapat digabungkan untuk merepresentasikan data yang lebih kompleks, misalnya daftar produk atau profil pengguna.",
        ],
      },
      {
        heading: "Contoh JSON yang Valid",
        paragraphs: [
          'Contoh objek sederhana adalah {"nama":"SmartTools","aktif":true,"jumlahTools":15}. Setiap properti dipisahkan dengan koma, dan string menggunakan tanda kutip ganda.',
          "JSON tidak mendukung komentar seperti yang biasa ditemukan dalam beberapa bahasa pemrograman. Koma tambahan setelah elemen terakhir juga dapat menyebabkan JSON tidak valid.",
        ],
      },
      {
        heading: "Formatting Berbeda dari Validasi",
        paragraphs: [
          "JSON Formatter merapikan struktur dengan indentasi dan baris baru agar lebih mudah dibaca. Sebaliknya, JSON Validator memeriksa apakah teks mengikuti aturan sintaks JSON.",
          "JSON yang valid secara sintaksis belum tentu benar secara logika atau sesuai dengan kebutuhan aplikasi. Periksa pula nama properti, tipe data, dan nilai yang diharapkan oleh sistem tujuan.",
        ],
      },
    ],
    href: "/tools/json-formatter",
    cta: "Coba JSON Formatter",
  },
  {
    slug: "cara-menghitung-kata-dan-karakter",
    category: "Produktivitas",
    title: "Cara Menghitung Kata dan Karakter dengan Praktis",
    description:
      "Pelajari penggunaan penghitung kata untuk tugas akademik, artikel, formulir, dan kebutuhan penulisan digital.",
    intro:
      "Batas jumlah kata dan karakter sering ditemukan dalam tugas kuliah, artikel, formulir online, deskripsi produk, dan media sosial. Menghitung teks panjang secara manual dapat memakan waktu dan meningkatkan risiko kesalahan.",
    sections: [
      {
        heading: "Perbedaan Kata dan Karakter",
        paragraphs: [
          "Jumlah kata menunjukkan banyaknya kata dalam sebuah teks, sedangkan jumlah karakter menghitung karakter yang terdapat di dalamnya. Karakter dapat mencakup huruf, angka, tanda baca, simbol, dan spasi, bergantung pada metode penghitungannya.",
          "Beberapa alat juga menampilkan jumlah karakter tanpa spasi, paragraf, atau perkiraan waktu membaca. Informasi ini berguna ketika menyesuaikan tulisan dengan batas tertentu.",
        ],
      },
      {
        heading: "Kapan Word Counter Dibutuhkan?",
        paragraphs: [
          "Mahasiswa dapat menggunakannya untuk memeriksa panjang abstrak atau tugas. Penulis artikel dapat memastikan panjang tulisan sesuai arahan editor, sementara pemilik usaha dapat memeriksa batas karakter pada deskripsi produk dan materi promosi.",
          "Jika sebuah platform menetapkan batas karakter tertentu, gunakan alat penghitung sebagai pemeriksaan awal dan pastikan kembali hasilnya pada platform tujuan.",
        ],
      },
      {
        heading: "Periksa Kembali Hasil Penghitungan",
        paragraphs: [
          "Aturan penghitungan kata dapat berbeda dalam kasus khusus, misalnya kata yang menggunakan tanda hubung, URL, atau karakter dari beberapa sistem tulisan. Karena itu, hasil dari dua alat yang berbeda belum tentu selalu sama.",
          "Jumlah kata hanyalah salah satu aspek tulisan. Setelah memenuhi batas panjang, periksa kembali ejaan, struktur paragraf, kejelasan gagasan, dan kesesuaian isi dengan tujuan penulisan.",
        ],
      },
    ],
    href: "/tools/word-counter",
    cta: "Coba Word Counter",
  },
  {
    slug: "mengenal-base64-dan-kegunaannya",
    category: "Pengembangan Web",
    title: "Mengenal Base64 dan Kegunaannya",
    description:
      "Pahami encoding Base64, contoh penggunaannya, serta alasan Base64 tidak boleh dianggap sebagai enkripsi.",
    intro:
      "Base64 adalah metode untuk merepresentasikan data biner sebagai rangkaian karakter teks. Teknik ini umum digunakan ketika data perlu disertakan dalam format yang dirancang untuk membawa teks.",
    sections: [
      {
        heading: "Bagaimana Base64 Bekerja?",
        paragraphs: [
          "Base64 mengubah data masukan menjadi representasi teks menggunakan kumpulan karakter tertentu. Hasilnya dapat digunakan pada sejumlah format dan protokol yang memerlukan representasi data dalam bentuk teks.",
          "Karena menggunakan representasi yang berbeda, hasil Base64 umumnya lebih panjang daripada data biner asalnya. Encoding ini mengubah cara data direpresentasikan, bukan tujuan atau makna datanya.",
        ],
      },
      {
        heading: "Contoh Penggunaan Base64",
        paragraphs: [
          "Base64 dapat ditemukan pada representasi data tertentu, penyematan data dalam format teks, serta sejumlah kebutuhan pertukaran data pada aplikasi web. Kegunaannya bergantung pada format dan sistem yang menggunakannya.",
          "Encoder mengubah masukan menjadi representasi Base64, sedangkan decoder mencoba mengembalikannya ke data asal. Hasil decoding perlu diperiksa karena tidak semua teks merupakan input Base64 yang valid atau sesuai kebutuhan.",
        ],
      },
      {
        heading: "Base64 Bukan Enkripsi",
        paragraphs: [
          "Encoding Base64 tidak memberikan kerahasiaan. Siapa pun yang memiliki teks Base64 yang valid dapat mendekodenya tanpa membutuhkan kunci rahasia.",
          "Jangan gunakan Base64 sebagai pengganti enkripsi untuk melindungi kata sandi, token rahasia, atau informasi sensitif. Jika data harus dirahasiakan, gunakan mekanisme keamanan yang sesuai dengan kebutuhan sistem.",
        ],
      },
    ],
    href: "/tools/base64-encoder",
    cta: "Coba Base64 Encoder",
  },
  {
    slug: "mengenal-hash-sha-256",
    category: "Keamanan Data",
    title: "Mengenal Hash SHA-256 dan Fungsinya",
    description:
      "Pelajari fungsi hash SHA-256, pemeriksaan integritas data, dan perbedaannya dengan enkripsi.",
    intro:
      "SHA-256 merupakan fungsi hash kriptografis yang menghasilkan nilai hash 256 bit. Hasilnya sering ditampilkan sebagai 64 karakter heksadesimal dan dapat digunakan untuk membantu memeriksa integritas data.",
    sections: [
      {
        heading: "Apa Itu Nilai Hash?",
        paragraphs: [
          "Fungsi hash mengambil masukan dengan panjang yang bervariasi dan menghasilkan keluaran dengan panjang tetap. Pada SHA-256, keluaran tersebut berukuran 256 bit.",
          "Perubahan kecil pada masukan biasanya menghasilkan nilai hash yang sangat berbeda. Karena itu, hash dapat membantu membandingkan apakah dua masukan menghasilkan nilai yang sama.",
        ],
      },
      {
        heading: "Penggunaan SHA-256 untuk Integritas Data",
        paragraphs: [
          "Hash sering digunakan untuk membantu memeriksa integritas file atau data. Misalnya, nilai hash hasil unduhan dapat dibandingkan dengan nilai tepercaya yang diterbitkan oleh sumber distribusi.",
          "Namun, nilai hash saja tidak membuktikan identitas pembuat file atau menjamin bahwa file tersebut aman. Untuk memercayai hasil perbandingan, nilai pembanding perlu diperoleh dari sumber yang dapat dipercaya.",
        ],
      },
      {
        heading: "Hash Bukan Enkripsi",
        paragraphs: [
          "Enkripsi dirancang agar data dapat dipulihkan dengan kunci yang sesuai. SHA-256 adalah fungsi satu arah dan tidak menyediakan proses dekripsi untuk mengembalikan data asal.",
          "SHA-256 biasa juga bukan pilihan yang tepat untuk menyimpan kata sandi pengguna secara langsung. Sistem penyimpanan kata sandi sebaiknya menggunakan algoritma khusus seperti Argon2id, scrypt, atau bcrypt dengan konfigurasi yang sesuai.",
        ],
      },
    ],
    href: "/tools/hash-generator",
    cta: "Coba SHA-256 Hash Generator",
  },
  {
    slug: "cara-kerja-qr-code",
    category: "Teknologi Digital",
    title: "Bagaimana QR Code Menyimpan Informasi?",
    description:
      "Pahami fungsi QR Code, jenis informasi yang dapat disimpan, serta cara menggunakannya dengan lebih aman.",
    intro:
      "QR Code adalah kode dua dimensi yang menyimpan informasi dalam pola kotak-kotak. Kode tersebut dapat dipindai oleh perangkat yang mendukung pembacaan QR dan banyak digunakan untuk mempermudah akses ke informasi digital.",
    sections: [
      {
        heading: "Informasi Apa yang Bisa Disimpan?",
        paragraphs: [
          "QR Code dapat menyimpan informasi seperti teks, alamat website, dan data lain yang didukung oleh standar serta pembaca yang digunakan. Ketika dipindai, perangkat akan mencoba mengenali isi kode tersebut.",
          "Penggunaannya mencakup akses ke halaman web, pembagian kontak, informasi produk, dan kebutuhan lain yang memerlukan transfer informasi secara praktis.",
        ],
      },
      {
        heading: "Membuat QR Code yang Mudah Digunakan",
        paragraphs: [
          "Sebelum membagikan QR Code, periksa kembali teks atau alamat tujuan yang dimasukkan. Pastikan hasilnya dapat dipindai oleh perangkat yang umum digunakan dan sesuai dengan tujuan penggunaannya.",
          "Pertimbangkan ukuran tampilan, kontras dengan latar belakang, serta kualitas hasil cetak. Uji kode pada beberapa perangkat sebelum mencetak dalam jumlah besar atau menggunakannya pada materi penting.",
        ],
      },
      {
        heading: "Perhatikan Keamanan Saat Memindai",
        paragraphs: [
          "QR Code tidak menjamin bahwa alamat atau informasi di dalamnya aman. Kode dapat saja mengarahkan pengguna ke situs yang menipu atau meminta informasi sensitif.",
          "Periksa alamat tujuan sebelum membukanya, terutama jika QR Code berasal dari sumber yang tidak dikenal. Hindari memasukkan kata sandi atau informasi pembayaran apabila situs tujuan tidak dapat dipercaya.",
        ],
      },
    ],
    href: "/tools/qr-code-generator",
    cta: "Coba QR Code Generator",
  },
];