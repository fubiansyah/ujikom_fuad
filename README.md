

## Prasyarat

Sebelum memulai, pastikan Anda telah memasang alat-alat berikut pada sistem Anda:

### Tools Pengembangan

1. **Editor Source Code**
   - Gunakan editor teks seperti [Visual Studio Code](https://code.visualstudio.com/) atau [Sublime Text](https://www.sublimetext.com/) untuk mengedit kode sumber.
   
2. **Node Version Manager (NVM)**
   - Untuk mengelola versi Node.js yang berbeda, Anda perlu memasang NVM. Kunjungi [NVM GitHub Page](https://github.com/nvm-sh/nvm) untuk panduan pemasangan dan dokumentasi.

3. **Yarn atau Grunt**
   - Untuk manajemen paket dan otomatisasi, Anda bisa menggunakan Yarn atau Grunt.
     - [Yarn](https://yarnpkg.com/getting-started/install): Panduan pemasangan dan dokumentasi.
     - [Grunt](https://gruntjs.com/getting-started): Panduan pemasangan dan dokumentasi.

## Teknologi yang Digunakan

Dalam pengembangan:
- HTML: [Pug](https://pugjs.org/api/getting-started.html)
- CSS: [SASS](https://sass-lang.com/guide)
- JavaScript: Vanilla JavaScript

## Proses Pengembangan

1. **Instalasi Modul**
   - Jalankan `yarn install` atau `npm install` untuk mengunduh semua modul yang dibutuhkan.

2. **Pengembangan**
   - Gunakan `yarn dev` atau `npm run dev` untuk mode pengembangan. Ini akan 'watch' file Anda, yang berarti perubahan pada kode sumber akan otomatis terdeteksi dan aplikasi akan di-recompile.

3. **Build**
   - Jalankan `yarn build` atau `npm run build` untuk membuild aplikasi untuk produksi. Hasil build akan disimpan di dalam folder `public`.

## Struktur Folder

- **/resource**: Folder untuk menyimpan semua sumber kode selama proses pengembangan.
- **/public**: Folder ini akan menyimpan semua file hasil build yang siap untuk produksi.


