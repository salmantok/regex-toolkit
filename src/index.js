export class RegexToolkit {
  constructor(pattern = '', flags = '', useRawPattern = false) {
    this.useRawPattern = useRawPattern // Menentukan apakah menggunakan pola mentah
    this.regex = pattern
      ? this._createRegex(pattern, flags, useRawPattern)
      : null // Buat regex berdasarkan opsi
  }

  // Ubah pola regex dengan opsi untuk menggunakan pola mentah
  updatePattern(pattern, flags = '', useRawPattern = this.useRawPattern) {
    this.useRawPattern = useRawPattern // Simpan opsi
    this.regex = this._createRegex(pattern, flags, useRawPattern)
  }

  // Uji apakah input cocok dengan regex
  test(input) {
    input = this._convertToString(input) // Konversi ke string
    if (!this.regex) throw new Error('No regex pattern defined.')
    return this.regex.test(input)
  }

  // Cocokkan semua hasil dengan regex
  match(input) {
    input = this._convertToString(input) // Konversi ke string
    if (!this.regex) throw new Error('No regex pattern defined.')
    return input.match(this.regex)
  }

  // Ganti teks sesuai dengan regex
  replace(input, replacement) {
    input = this._convertToString(input) // Konversi ke string
    if (!this.regex) throw new Error('No regex pattern defined.')
    return input.replace(this.regex, replacement)
  }

  // Pisahkan string menggunakan regex
  split(input) {
    input = this._convertToString(input) // Konversi ke string
    if (!this.regex) throw new Error('No regex pattern defined.')
    return input.split(this.regex)
  }

  // Ekstrak grup dari hasil regex
  extractGroups(input) {
    input = this._convertToString(input) // Konversi ke string
    if (!this.regex) throw new Error('No regex pattern defined.')
    const match = this.regex.exec(input)
    return match ? match.slice(1) : []
  }

  // Cek detail pola dan flag
  getDetails() {
    if (!this.regex) throw new Error('No regex pattern defined.')
    return {
      pattern: this.regex.source,
      flags: this.regex.flags,
      useRawPattern: this.useRawPattern,
    }
  }

  // Escape teks agar bisa digunakan sebagai regex literal
  static escape(text) {
    return String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // Escape karakter regex
  }

  // Konversi semua tipe data menjadi string
  _convertToString(input) {
    if (input === null) return 'null'
    if (input === undefined) return 'undefined'
    if (typeof input === 'object' && !Array.isArray(input)) {
      return JSON.stringify(input) // Untuk objek, ubah ke JSON string
    }
    return String(input) // Konversi tipe lain ke string
  }

  // Buat regex dengan opsi untuk escape atau mentah
  _createRegex(pattern, flags, useRawPattern) {
    const finalPattern = useRawPattern ? pattern : RegexToolkit.escape(pattern) // Escape jika tidak mentah
    return new RegExp(finalPattern, flags) // Buat regex baru
  }
}
