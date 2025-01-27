# RegexToolkit

> RegexToolkit alat sederhana untuk mempermudah penggunaan _regular expressions_ (regex) di JavaScript

_Alat ini dirancang agar fleksibel dan ramah pengguna, memungkinkan pencocokan teks literal (escape otomatis) atau menggunakan regex mentah sesuai kebutuhan._

## Fitur Utama

### Escape Otomatis

- Semua pola default di-_escape_ untuk mencocokkan teks literal, sehingga pengguna tidak perlu memahami karakter khusus regex.

### Dukungan Regex Mentah

- Dengan opsi `useRawPattern`, pengguna dapat menggunakan pola regex mentah.

### Dukungan Semua Tipe Data

- Semua tipe data akan dikonversi ke string sebelum diproses.

### API Sederhana

- Mendukung operasi seperti `test`, `match`, `replace`, `split`, dan `extractGroups`.

## Instalasi

```bash
npm install regex-toolkit
```

### Penggunaan

#### 1. Import Library

##### ESM

```js
import { RegexToolkit } from 'regex-toolkit'
```

##### CommonJS

```js
const { RegexToolkit } = require('regex-toolkit')
```

#### 2. Membuat Instance Baru

Buat instance baru dengan pola regex dan flag opsional.

```js
const regex = new RegexToolkit('Halo', 'g') // Default escape
```

#### 2. Menggunakan Pola Regex

Pola default di-_escape_ untuk mencocokkan teks literal.

```js
console.log(regex.test('Halo Halo!')) // true
console.log(regex.match('Halo Halo!')) // ['Halo', 'Halo']
```

#### 3. Menggunakan Regex Mentah

Jika ingin menggunakan pola regex mentah.

```js
regex.updatePattern('Halo\\.', 'g', true) // Gunakan pola mentah
console.log(regex.match('Halo. Halo.')) // ['Halo.', 'Halo.']
```

#### 4. Ganti Teks Menggunakan Pola

Mengganti teks yang cocok dengan regex.

```js
regex.updatePattern('Halo') // Escape otomatis
console.log(regex.replace('Halo, Apa kabar?', 'Hi')) // Hi, Apa kabar?
```

#### 5. Pisahkan String

Pisahkan string berdasarkan pola regex.

```js
regex.updatePattern(',') // Escape otomatis
console.log(regex.split('1,2,3,4')) // ['1', '2', '3', '4']
```

#### 6. Ekstrak Grup dari Hasil

Ekstrak grup yang cocok dari pola regex.

```js
regex.updatePattern('(Halo) (Dunia)', '', true) // Regex mentah
console.log(regex.extractGroups('Halo Dunia')) // ['Halo', 'Dunia']
```

#### 7. Cek Detail Pola

Cek detail pola regex saat ini.

```js
console.log(regex.getDetails())
/* Output:
{
  pattern: 'Halo',
  flags: 'g',
  useRawPattern: false
}
*/
```

## API

### constructor

#### `constructor((pattern = ''), (flags = ''), (useRawPattern = false))`

- `pattern` _(string)_: Pola regex awal. Default adalah string kosong.
- `flags` _(string)_: Flag regex opsional seperti `g`, `i`, dll.
- `useRawPattern` _(boolean)_: Jika `true`, menggunakan regex mentah; jika `false`, pola akan di-_escape_.

### method

#### `updatePattern(pattern, flags = '', useRawPattern = false)`

Mengubah pola regex dengan opsi untuk menggunakan regex mentah.

- `pattern` _(string)_: Pola regex baru.
- `flags` _(string)_: Flag regex baru.
- `useRawPattern` _(boolean)_: Gunakan regex mentah jika `true`.

#### `test(input)`

Menguji apakah input cocok dengan pola regex.

- `input` _(any)_: Teks atau data yang akan diuji.

- Return:

  - _(boolean)_ Hasil pengujian.

#### `match(input)`

Mencocokkan semua hasil sesuai dengan pola regex.

- `input` _(any)_: Teks atau data yang akan dicocokkan.

- Return:

  - _(array|null)_ Array hasil pencocokan.

#### `replace(input, replacement)`

Mengganti teks yang cocok dengan pola regex.

- `input` _(any)_: Teks yang akan diubah.
- `replacement` _(string)_: Pengganti teks.

- Return:

  - _(string)_ Hasil penggantian.

#### `split(input)`

Memisahkan string berdasarkan pola regex.

- `input` _(any)_: Teks yang akan dipisahkan.

- Return:

  - _(array)_ Array hasil pemisahan.

#### `extractGroups(input)`

Mengekstrak grup dari hasil pencocokan.

- `input` _(any)_: Teks yang akan diproses.

- Return:

  - _(array)_ Array grup yang cocok.

#### `getDetails()`

Mendapatkan detail pola regex saat ini.

- Return:

  - _(object)_ Objek dengan properti:
  - `pattern` _(string)_: Pola regex.
  - `flags` _(string)_: Flag regex.
  - `useRawPattern` _(boolean)_: Apakah menggunakan regex mentah.

#### `escape(text)`

Metode statis untuk melindungi teks literal (escape karakter regex).

- `text` _(string)_: Teks yang akan di-_escape_.

- Return:

  - _(string)_ Teks yang sudah di-_escape_.
