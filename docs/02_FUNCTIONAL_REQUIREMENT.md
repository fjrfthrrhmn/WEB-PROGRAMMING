# Functional Requirement — DesaBaca

> **Nama File:** `02_FUNCTIONAL-REQUIREMENT.md`  
> **Tujuan:** Mendefinisikan kebutuhan fungsional sistem DesaBaca berdasarkan kebutuhan proyek dan aktor yang terlibat, sebagai acuan utama dalam perancangan fitur, database, dan pengembangan sistem.  
> **Status:** DRAFT  
> **Versi:** 1.0.0

## Table Functional Requirement

| ID        | Nama Functional                | Aktor     | Domain     | Deskripsi Singkat                                                      |
| --------- | ------------------------------ | --------- | ---------- | ---------------------------------------------------------------------- |
| **FR-01** | Login                          | Warga     | Pengguna   | Warga dapat masuk ke sistem menggunakan akun yang telah terdaftar.     |
| **FR-02** | Logout                         | Warga     | Pengguna   | Warga dapat keluar dari akun yang sedang digunakan.                    |
| **FR-03** | Melihat Daftar Buku            | Warga     | Buku       | Warga dapat melihat daftar buku yang tersedia di DesaBaca.             |
| **FR-04** | Mencari Buku                   | Warga     | Buku       | Warga dapat mencari buku berdasarkan judul atau informasi buku.        |
| **FR-05** | Melihat Detail Buku            | Warga     | Buku       | Warga dapat melihat informasi dan ketersediaan sebuah buku.            |
| **FR-06** | Mengajukan Peminjaman          | Warga     | Peminjaman | Warga dapat mengajukan peminjaman buku yang tersedia.                  |
| **FR-07** | Melihat Daftar Peminjaman Saya | Warga     | Peminjaman | Warga dapat melihat daftar dan status peminjaman bukunya.              |
| **FR-08** | Mengajukan Pengembalian        | Warga     | Peminjaman | Warga dapat mengajukan pengembalian buku yang sedang dipinjam.         |
| **FR-09** | Login                          | Pengelola | Pengguna   | Pengelola dapat masuk ke sistem menggunakan akun yang telah terdaftar. |
| **FR-10** | Logout                         | Pengelola | Pengguna   | Pengelola dapat keluar dari akun yang sedang digunakan.                |
| **FR-11** | Melihat Daftar Buku            | Pengelola | Buku       | Pengelola dapat melihat seluruh buku yang dikelola.                    |
| **FR-12** | Menambahkan Buku               | Pengelola | Buku       | Pengelola dapat menambahkan data buku baru.                            |
| **FR-13** | Mengubah Buku                  | Pengelola | Buku       | Pengelola dapat mengubah informasi buku yang tersimpan.                |
| **FR-14** | Menghapus Buku                 | Pengelola | Buku       | Pengelola dapat menghapus data buku yang tidak diperlukan.             |
| **FR-15** | Melihat Daftar Peminjaman      | Pengelola | Peminjaman | Pengelola dapat melihat daftar pengajuan dan peminjaman buku.          |
| **FR-16** | Memproses Peminjaman           | Pengelola | Peminjaman | Pengelola dapat menerima atau menolak pengajuan peminjaman.            |
| **FR-17** | Memproses Pengembalian         | Pengelola | Peminjaman | Pengelola dapat mengonfirmasi pengembalian buku.                       |
| **FR-18** | Login                          | Admin     | Pengguna   | Admin dapat masuk ke sistem menggunakan akun yang telah terdaftar.     |
| **FR-19** | Logout                         | Admin     | Pengguna   | Admin dapat keluar dari akun yang sedang digunakan.                    |
| **FR-20** | Melihat Data Pengguna          | Admin     | Pengguna   | Admin dapat melihat data pengguna yang terdaftar dalam sistem.         |

> Sengaja tidak memasukkan Registrasi Akun. Untuk tugas kuliah, akun bisa dibuat melalui seed/database secara manual
