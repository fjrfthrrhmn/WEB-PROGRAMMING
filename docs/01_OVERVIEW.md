# Project Overview — DesaBaca

> **Nama File:** `01_OVERVIEW.md`  
> **Tujuan:** Menjelaskan gambaran umum proyek DesaBaca sebagai dasar pengembangan fitur dan Functional Requirement.  
> **Status:** DRAFT  
> **Versi:** 1.0.0

---

> **Nama Project:** DesaBaca
> **Aspek:** Pendidikan
> **Kategori:** Perpustakaan dan Literasi Masyarakat
> **Status:** Final

---

## 1. Overview Project

**DesaBaca** adalah platform perpustakaan desa berbasis web yang dirancang untuk membantu warga dalam mengakses, mencari, dan meminjam buku secara lebih mudah.

Platform ini menggunakan konsep **hybrid**, yaitu menyediakan dua metode akses terhadap buku:

1. **Online** — warga dapat membaca atau mengunduh buku digital yang tersedia.
2. **Perpustakaan Desa** — warga dapat melakukan peminjaman buku fisik yang tersedia di perpustakaan desa.

DesaBaca menyediakan informasi buku secara terpusat sehingga warga dapat mengetahui koleksi yang tersedia sebelum membaca secara online atau datang langsung ke perpustakaan desa.

Sistem juga membantu pengelola perpustakaan dalam mengelola data buku, pengguna, peminjaman, dan ketersediaan koleksi.

---

## 2. Latar Belakang

Akses terhadap bahan bacaan merupakan salah satu bagian penting dalam mendukung pendidikan dan meningkatkan minat baca masyarakat.

Namun, pengelolaan perpustakaan desa yang masih dilakukan secara manual dapat membuat proses pencatatan buku, peminjaman, pengembalian, serta pencarian informasi koleksi menjadi kurang efektif.

Warga juga perlu mengetahui ketersediaan buku sebelum datang ke perpustakaan. Selain itu, tidak semua warga dapat selalu datang langsung ke perpustakaan untuk membaca atau memperoleh bahan bacaan.

**DesaBaca** dikembangkan sebagai solusi berbasis web untuk membantu menyediakan akses informasi buku secara lebih mudah melalui satu platform.

Dengan pendekatan hybrid, warga dapat memilih cara yang sesuai dengan kebutuhannya, baik dengan **mengakses buku secara online melalui unduhan** maupun **meminjam buku fisik di perpustakaan desa**.

---

## 3. Apa Masalahnnya?

Beberapa permasalahan yang ingin diselesaikan melalui DesaBaca adalah:

* Informasi mengenai koleksi buku belum tersedia secara terpusat.
* Warga kesulitan mengetahui ketersediaan buku sebelum datang ke perpustakaan.
* Proses pencatatan peminjaman dan pengembalian buku masih dapat dilakukan secara manual.
* Pengelola perpustakaan membutuhkan cara yang lebih mudah untuk mengelola data koleksi dan peminjaman.
* Akses terhadap bahan bacaan masih bergantung pada kunjungan langsung ke perpustakaan.
* Buku digital belum memiliki media akses yang terintegrasi dengan informasi koleksi perpustakaan.
* Belum tersedia sistem yang menggabungkan akses **buku digital** dan **peminjaman buku fisik** dalam satu platform.

---

## 4. Tujuan Project

DesaBaca dikembangkan dengan tujuan:

* Menyediakan informasi koleksi buku secara terpusat.
* Memudahkan warga dalam mencari dan melihat detail buku.
* Memudahkan warga mengetahui ketersediaan buku.
* Menyediakan akses terhadap buku digital melalui unduhan.
* Memfasilitasi peminjaman dan pengembalian buku fisik di perpustakaan desa.
* Membantu pengelola dalam mengelola data buku dan transaksi peminjaman.
* Membantu meningkatkan akses masyarakat terhadap bahan bacaan.
* Mendukung peningkatan minat baca dan literasi masyarakat desa.
* Menerapkan teknologi web untuk membantu pengelolaan perpustakaan desa.

---

## 5. Target User

### Warga

Warga merupakan pengguna utama DesaBaca yang dapat:

* Melihat koleksi buku.
* Mencari buku.
* Melihat detail buku.
* Melihat ketersediaan buku.
* Mengunduh buku digital yang tersedia.
* Melakukan peminjaman buku fisik.
* Melihat riwayat peminjaman.

### Pengelola Perpustakaan

Pengelola bertanggung jawab dalam mengelola operasional perpustakaan, seperti:

* Mengelola data buku.
* Menambahkan dan memperbarui informasi buku.
* Mengelola ketersediaan buku.
* Mengelola peminjaman dan pengembalian.
* Melihat data transaksi perpustakaan.

### Admin

Admin bertanggung jawab terhadap pengelolaan sistem, seperti:

* Mengelola data pengguna.
* Mengelola data perpustakaan.
* Mengelola data buku dan kategori.
* Mengelola informasi sistem.

---

## 6. Core Features

Fitur utama yang direncanakan dalam DesaBaca meliputi:

| Fitur                   | Deskripsi                                                     |
| ----------------------- | ------------------------------------------------------------- |
| **Katalog Buku**        | Menampilkan daftar koleksi buku yang tersedia.                |
| **Pencarian Buku**      | Membantu warga menemukan buku berdasarkan informasi tertentu. |
| **Detail Buku**         | Menampilkan informasi lengkap mengenai sebuah buku.           |
| **Buku Digital**        | Menyediakan buku digital yang dapat diakses atau diunduh.     |
| **Peminjaman Buku**     | Memungkinkan warga melakukan peminjaman buku fisik.           |
| **Pengembalian Buku**   | Mencatat proses pengembalian buku yang telah dipinjam.        |
| **Riwayat Peminjaman**  | Menampilkan riwayat transaksi peminjaman warga.               |
| **Manajemen Buku**      | Membantu pengelola mengelola koleksi buku.                    |
| **Manajemen Pengguna**  | Mengelola data pengguna sistem.                               |
| **Manajemen Transaksi** | Mengelola data peminjaman dan pengembalian buku.              |

---

## 7. Konsep Hybrid

DesaBaca menerapkan konsep **hybrid library** dengan menggabungkan dua bentuk layanan:

### A. Online

Warga dapat mengakses koleksi digital melalui website tanpa harus datang ke perpustakaan.

Contohnya:

> **Cari buku → Lihat detail → Download buku digital → Baca**

### B. Perpustakaan Desa

Untuk buku fisik, warga dapat melihat ketersediaan buku melalui website kemudian melakukan proses peminjaman melalui perpustakaan desa.

Contohnya:

> **Cari buku → Lihat ketersediaan → Ajukan/Proses peminjaman → Ambil buku di perpustakaan → Kembalikan buku**

Dengan demikian, website tidak menggantikan perpustakaan desa, tetapi menjadi **media digital yang membantu memperluas akses dan mempermudah pengelolaannya**.
