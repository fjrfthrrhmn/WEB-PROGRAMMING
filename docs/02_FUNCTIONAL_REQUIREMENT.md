# Functional Requirement — DesaBaca

> **Nama File:** `02_FUNCTIONAL_REQUIREMENT.md`  
> **Tujuan:** Mendefinisikan kebutuhan fungsional sistem DesaBaca berdasarkan kebutuhan proyek dan aktor yang terlibat, sebagai acuan utama dalam perancangan fitur, database, dan pengembangan sistem.  
> **Status:** DRAFT  
> **Versi:** 1.1.0

## Table Functional Requirement

| ID        | Nama Functional                                           | Aktor     | Domain       | Deskripsi Singkat                                                                                                   |
| --------- | --------------------------------------------------------- | --------- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| **FR-01** | Login                                                     | Warga     | Pengguna     | Warga dapat masuk ke sistem menggunakan akun yang telah terdaftar.                                                  |
| **FR-02** | Logout                                                    | Warga     | Pengguna     | Warga dapat keluar dari akun yang sedang digunakan.                                                                 |
| **FR-03** | Melihat Daftar Buku                                       | Warga     | Buku         | Warga dapat melihat daftar buku yang tersedia di DesaBaca.                                                          |
| **FR-04** | Mencari Buku                                              | Warga     | Buku         | Warga dapat mencari buku berdasarkan judul atau informasi buku.                                                     |
| **FR-05** | Melihat Detail Buku                                       | Warga     | Buku         | Warga dapat melihat informasi dan ketersediaan sebuah buku.                                                         |
| **FR-06** | Membaca Buku Digital Secara Online                        | Warga     | Buku Digital | Warga dapat membaca buku digital secara online jika file buku tersedia.                                             |
| **FR-07** | Mengunduh Buku Digital                                    | Warga     | Buku Digital | Warga dapat mengunduh buku digital jika file buku tersedia.                                                         |
| **FR-08** | Mengajukan Peminjaman Buku Fisik                          | Warga     | Peminjaman   | Warga dapat mengajukan permohonan peminjaman buku fisik yang tersedia melalui website sebagai wadah transaksi.      |
| **FR-09** | Melihat Daftar Pengajuan Peminjaman Saya                  | Warga     | Peminjaman   | Warga dapat melihat daftar pengajuan peminjaman buku fisik beserta statusnya.                                       |
| **FR-10** | Mengajukan Pengembalian                                   | Warga     | Peminjaman   | Warga dapat mengajukan pengembalian buku fisik yang sedang dipinjam.                                                |
| **FR-11** | Login                                                     | Pengelola | Pengguna     | Pengelola dapat masuk ke sistem menggunakan akun yang telah terdaftar.                                              |
| **FR-12** | Logout                                                    | Pengelola | Pengguna     | Pengelola dapat keluar dari akun yang sedang digunakan.                                                             |
| **FR-13** | Melihat Daftar Buku                                       | Pengelola | Buku         | Pengelola dapat melihat seluruh buku yang dikelola.                                                                 |
| **FR-14** | Menambahkan Buku                                          | Pengelola | Buku         | Pengelola dapat menambahkan data buku baru (termasuk data buku digital/fisik).                                      |
| **FR-15** | Mengubah Buku                                             | Pengelola | Buku         | Pengelola dapat mengubah informasi buku yang tersimpan.                                                             |
| **FR-16** | Menghapus Buku                                            | Pengelola | Buku         | Pengelola dapat menghapus data buku yang tidak diperlukan.                                                          |
| **FR-17** | Melihat Daftar Pengajuan Peminjaman Buku Fisik            | Pengelola | Peminjaman   | Pengelola dapat melihat daftar pengajuan peminjaman buku fisik.                                                     |
| **FR-18** | Memproses Pengajuan Peminjaman Buku Fisik (Setujui/Tolak) | Pengelola | Peminjaman   | Pengelola dapat menyetujui atau menolak pengajuan peminjaman buku fisik. Serah-terima dilakukan langsung di lokasi. |
| **FR-19** | Memproses Pengembalian Buku Fisik                         | Pengelola | Peminjaman   | Pengelola dapat mengonfirmasi pengembalian buku fisik saat pengembalian dilakukan di Balai/Perpustakaan Desa.       |
| **FR-20** | Login                                                     | Admin     | Pengguna     | Admin dapat masuk ke sistem menggunakan akun yang telah terdaftar.                                                  |
| **FR-21** | Logout                                                    | Admin     | Pengguna     | Admin dapat keluar dari akun yang sedang digunakan.                                                                 |
| **FR-22** | Melihat Data Daftar Pengguna                              | Admin     | Pengguna     | Admin dapat melihat data pengguna yang terdaftar dalam sistem.                                                      |
| **FR-23** | Menambah Pengguna Baru                                    | Admin     | Pengguna     | Admin dapat menambahkan pengguna baru ke dalam sistem.                                                              |
| **FR-24** | Mengubah Data Pengguna                                    | Admin     | Pengguna     | Admin dapat mengubah data pengguna yang terdaftar dalam sistem.                                                     |
| **FR-25** | Menonaktifkan Pengguna                                    | Admin     | Pengguna     | Admin dapat menonaktifkan pengguna agar tidak dapat mengakses sistem.                                               |

> Akun bisa dibuat melalui seed/database secara manual
