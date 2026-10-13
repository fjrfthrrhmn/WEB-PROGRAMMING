```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login - Perpustakaan Buku Desa</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <link
      href="https://fonts.googleapis.com/css2?family=Geist:ital,wght@0,100..900;1,100..900&family=Geist+Mono:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="/styles/login.css">
    <link rel="stylesheet" href="/styles/global.css">

    
  </head>

  <body>
    <main class="container">
      <section class="login-wrapper">
        <div class="login-card">
          <h1 class="login-heading">Perpustakaan Buku Desa</h1>

          <p class="login-description">
            Silakan masuk untuk mengakses perpustakaan.
          </p>

          <form>
            <div class="form-group">
              <label class="form-label" for="username"> Username </label>

              <input
                class="form-input"
                type="text"
                id="username"
                name="username"
                placeholder="Masukkan username"
              />
            </div>

            <div class="form-group">
              <label class="form-label" for="password"> Password </label>

              <input
                class="form-input"
                type="password"
                id="password"
                name="password"
                placeholder="Masukkan password"
              />
            </div>

            <div class="captcha">
              <input type="checkbox" id="not-robot" name="not-robot" />

              <label for="not-robot"> Saya bukan robot </label>
            </div>

            <button class="submit-button" type="submit">Send</button>
          </form>

          <p class="form-footer">
            © 2026 Perpustakaan Buku Desa. Semua hak dilindungi.
          </p>
        </div>
      </section>
    </main>
  </body>
</html>

<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Register - Perpustakaan Buku Desa</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <link
        href="https://fonts.googleapis.com/css2?family=Geist:ital,wght@0,100..900;1,100..900&family=Geist+Mono:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
    />

    <link rel="stylesheet" href="/styles/regist.css"/>
    <link rel="stylesheet" href="/styles/global.css"/>

    
</head>

<body>

    <main class="container">
        <section class="register-wrapper">

            <div class="register-card">

                <h1 class="register-heading">
                    Daftar Akun
                </h1>

                <p class="register-description">
                    Buat akun untuk mengakses perpustakaan.
                </p>

                <form>

                    <div class="form-group">
                        <label class="form-label" for="username">
                            Username
                        </label>

                        <input
                            class="form-input"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Masukkan username"
                        />
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="password">
                            Password
                        </label>

                        <input
                            class="form-input"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Masukkan password"
                        />
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="confirm-password">
                            Konfirmasi Password
                        </label>

                        <input
                            class="form-input"
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="Masukkan kembali password"
                        />
                    </div>

                    <div class="captcha">
                        <input
                            type="checkbox"
                            id="not-robot"
                            name="not-robot"
                        />

                        <label for="not-robot">
                            Saya bukan robot
                        </label>
                    </div>

                    <button class="submit-button" type="submit">
                        Register
                    </button>

                </form>

                <p class="form-footer">
                    © 2026 Perpustakaan Buku Desa. Semua hak dilindungi.
                </p>

            </div>

        </section>
    </main>

</body>

</html>

<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta
      name="description"
      content="Perpustakaan Desa, ruang baca dan belajar bersama milik warga."
    />
    <title>Beranda | Perpustakaan Desa</title>
    <link rel="stylesheet" href="/styles/global.css" />
    <link rel="stylesheet" href="/styles/beranda.css" />
    <style></style>
  </head>
  <body>
    <aside class="side-menu" id="side-menu" aria-label="Navigasi cepat">
      <nav class="side-menu__links">
        <a
          class="side-menu__link active"
          href="beranda.html"
          aria-label="Beranda"
          ><span class="side-menu__icon">⌂</span
          ><span class="side-menu__label">Beranda</span></a
        >
        <a
          class="side-menu__link"
          aria-disabled="true"
          href="produk.html"
          aria-label="Katalog buku"
          ><span class="side-menu__icon">▤</span
          ><span class="side-menu__label">Katalog Buku</span></a
        >
        <a
          class="side-menu__link"
          aria-disabled="true"
          href="auth-login.html"
          aria-label="Katalog buku"
          ><span class="side-menu__icon">▤</span
          ><span class="side-menu__label">Katalog Buku</span></a
        >
        <a
          class="side-menu__link"
          aria-disabled="true"
          href="auth-regist.html"
          aria-label="Katalog buku"
          ><span class="side-menu__icon">▤</span
          ><span class="side-menu__label">Katalog Buku</span></a
        >
        <a
          class="side-menu__link"
          aria-disabled="true"
          href="form_peminjaman.html"
          aria-label="Katalog buku"
          ><span class="side-menu__icon">▤</span
          ><span class="side-menu__label">Katalog Buku</span></a
        >
        <a class="side-menu__link" href="#unggulan" aria-label="Buku pilihan"
          ><span class="side-menu__icon">◴</span
          ><span class="side-menu__label">Buku Pilihan</span></a
        >
        <a
          class="side-menu__link"
          href="#tentang"
          aria-label="Tentang perpustakaan"
          ><span class="side-menu__icon">♧</span
          ><span class="side-menu__label">Tentang Kami</span></a
        >
        <a class="side-menu__link" href="#kontak" aria-label="Kontak"
          ><span class="side-menu__icon">⚙</span
          ><span class="side-menu__label">Kontak &amp; Informasi</span></a
        >
      </nav>
      <button
        class="side-menu__toggle"
        id="side-menu-toggle"
        type="button"
        aria-label="Buka sidebar"
        aria-expanded="false"
      >
        <span class="side-menu__icon">≡</span
        ><span class="side-menu__label">Tutup menu</span>
      </button>
    </aside>
    <div class="topbar">
      <div class="container">
        <p>🚚 Perpustakaan untuk seluruh warga desa</p>
        <div class="utility">
          <span>✦ Ruang baca, cerita, dan inspirasi</span
          ><span>☎ (022) 123-4567</span>
        </div>
      </div>
    </div>
    <header class="site-header">
      <div class="container">
        <a class="logo" href="beranda.html"
          ><span class="logo-mark">♧</span
          ><span>PERPUSTAKAAN<small>DESA SUKAMAJU</small></span></a
        >
        <nav class="main-nav" aria-label="Navigasi utama">
          <a class="active" href="beranda.html">BERANDA</a>
          <a href="produk.html">KATALOG BUKU</a>
          <a href="auth-login.html">LOGIN</a>
          <a href="auth-regist.html">REGIST</a>
          <a href="form_peminjaman.html">MINJAM</a>
        </nav>
        <div class="header-actions">
          <form class="search-box" role="search">
            <input
              type="search"
              aria-label="Cari buku"
              placeholder="Cari buku..."
            /><button type="button" aria-label="Cari" disabled>⌕</button>
          </form>
          <a href="#kontak" aria-label="Hubungi kami">♙</a>
        </div>
        <button class="nav-toggle" type="button" aria-label="Buka navigasi">
          ☰
        </button>
      </div>
    </header>
    <main>
      <section class="hero">
        <div class="container">
          <div class="hero-copy">
            <p class="eyebrow">TEMUKAN. BACA. BERTUMBUH.</p>
            <h1>Ruang baca untuk <em>setiap mimpi.</em></h1>
            <p>
              Perpustakaan Desa adalah ruang baca dan belajar bersama milik
              warga. Gratis untuk anak-anak hingga lansia.
            </p>
            <div class="button-row">
              <a class="button button-primary" aria-disabled="true"
                >JELAJAHI KATALOG&nbsp; →</a
              ><a class="button button-outline" href="#tentang">TENTANG KAMI</a>
            </div>
            <div class="reader-note">
              <div class="avatars">
                <span class="avatar">A</span><span class="avatar">R</span
                ><span class="avatar">D</span><span class="avatar">S</span>
              </div>
              <span><strong>★★★★★</strong>Disukai oleh warga desa</span>
            </div>
          </div>
          <div class="hero-art" aria-label="Ilustrasi komunitas pembaca">
            <div class="hero-badge">Cerita<br />baru untuk<br />semua</div>
            <div class="book-stack" aria-hidden="true">
              <span>CERITA NUSANTARA</span><span>ILMU PENGETAHUAN</span
              ><span>JEJAK LANGKAH</span><span>MASA DEPAN</span>
            </div>
          </div>
        </div>
      </section>
      <section class="benefits" aria-label="Keunggulan perpustakaan">
        <div class="benefit">
          <span class="benefit-icon">▣</span
          ><span
            ><strong>GRATIS UNTUK WARGA</strong
            ><small>Terbuka setiap hari kerja</small></span
          >
        </div>
        <div class="benefit">
          <span class="benefit-icon">↺</span
          ><span
            ><strong>MUDAH DIPINJAM</strong
            ><small>Pendaftaran anggota sederhana</small></span
          >
        </div>
        <div class="benefit">
          <span class="benefit-icon">♢</span
          ><span
            ><strong>KOLEKSI TERPILIH</strong
            ><small>Buku untuk semua usia</small></span
          >
        </div>
        <div class="benefit">
          <span class="benefit-icon">♡</span
          ><span
            ><strong>RUANG YANG NYAMAN</strong
            ><small>Belajar dan bertemu bersama</small></span
          >
        </div>
      </section>
      <div class="container content">
        <section id="kategori">
          <div class="section-title">
            <div>
              <p class="eyebrow">PILIH SESUAI MINATMU</p>
              <h2>Temukan Bacaan Berikutnya</h2>
            </div>
            <a class="view-all" href="katalog.html"
              >LIHAT SEMUA KATEGORI&nbsp; →</a
            >
          </div>
          <div class="category-grid">
            <a class="category" href="katalog.html"
              ><i class="round-icon">▤</i
              ><span>FIKSI<small>Cerita yang menghibur</small></span></a
            ><a class="category" href="katalog.html"
              ><i class="round-icon">◉</i
              ><span>NON-FIKSI<small>Wawasan baru setiap hari</small></span></a
            ><a class="category" href="katalog.html"
              ><i class="round-icon">✦</i
              ><span>PENDIDIKAN<small>Belajar lebih mudah</small></span></a
            ><a class="category" href="katalog.html"
              ><i class="round-icon">♡</i
              ><span>ANAK-ANAK<small>Teman tumbuh si kecil</small></span></a
            ><a class="category" href="katalog.html"
              ><i class="round-icon">☼</i
              ><span>KETERAMPILAN<small>Kreasi dan inspirasi</small></span></a
            ><a class="category" href="katalog.html"
              ><i class="round-icon">⌂</i
              ><span>SEJARAH<small>Merawat cerita bangsa</small></span></a
            >
          </div>
        </section>
        <section class="books-section" id="unggulan">
          <div class="section-title">
            <div>
              <p class="eyebrow">BUKU PILIHAN BULAN INI</p>
              <h2>Favorit Pembaca</h2>
            </div>
            <a class="view-all" aria-disabled="true">LIHAT KATALOG&nbsp; →</a>
          </div>
          <div class="book-grid">
            <article class="book-card">
              <a href="detail_produk.html" class="book-cover">
                <img
                  src="https://static-sc.cloudapp.web.id/content/image/coverteks/coverkurikulum21/Informatika_BS_KLS_XII_Cover.png"
                  alt="Sampul Informatika untuk SMA Kelas XII"
                />
              </a>
              <div class="book-meta">
                <h3>Informatika Untuk SMA Kelas XII</h3>
                <p>Pri Ario Damar, Naning Widayati</p>
                <span class="stars">★★★★★</span>
                <div class="book-bottom">
                  <strong>Rp45.000</strong
                  ><a class="detail-link" aria-disabled="true"
                    >LIHAT DETAIL →</a
                  >
                </div>
              </div>
            </article>
            <article class="book-card">
              <div class="book-cover">
                <img
                  src="https://static-sc.cloudapp.web.id/content/image/coverteks/coverkurikulum21/Informatika_BS_KLS_XII_Cover.png"
                  alt="Sampul Informatika untuk SMA Kelas XII"
                />
              </div>
              <div class="book-meta">
                <h3>Informatika Untuk SMA Kelas XII</h3>
                <p>Pri Ario Damar, Naning Widayati</p>
                <span class="stars">★★★★★</span>
                <div class="book-bottom">
                  <strong>Rp45.000</strong
                  ><a class="detail-link" aria-disabled="true"
                    >LIHAT DETAIL →</a
                  >
                </div>
              </div>
            </article>
            <article class="book-card">
              <div class="book-cover">
                <img
                  src="https://static-sc.cloudapp.web.id/content/image/coverteks/coverkurikulum21/Informatika_BS_KLS_XII_Cover.png"
                  alt="Sampul Informatika untuk SMA Kelas XII"
                />
              </div>
              <div class="book-meta">
                <h3>Informatika Untuk SMA Kelas XII</h3>
                <p>Pri Ario Damar, Naning Widayati</p>
                <span class="stars">★★★★★</span>
                <div class="book-bottom">
                  <strong>Rp45.000</strong
                  ><a class="detail-link" aria-disabled="true"
                    >LIHAT DETAIL →</a
                  >
                </div>
              </div>
            </article>
            <article class="book-card">
              <div class="book-cover">
                <img
                  src="https://static-sc.cloudapp.web.id/content/image/coverteks/coverkurikulum21/Informatika_BS_KLS_XII_Cover.png"
                  alt="Sampul Informatika untuk SMA Kelas XII"
                />
              </div>
              <div class="book-meta">
                <h3>Informatika Untuk SMA Kelas XII</h3>
                <p>Pri Ario Damar, Naning Widayati</p>
                <span class="stars">★★★★★</span>
                <div class="book-bottom">
                  <strong>Rp45.000</strong
                  ><a class="detail-link" aria-disabled="true"
                    >LIHAT DETAIL →</a
                  >
                </div>
              </div>
            </article>
          </div>
        </section>
        <section class="community-banner">
          <div class="community-copy">
            <p class="eyebrow">BAGIAN DARI KOMUNITAS BACA</p>
            <h2>Dapatkan kabar dan agenda literasi desa.</h2>
            <p>
              Daftarkan email untuk mengetahui koleksi baru dan kegiatan
              berikutnya.
            </p>
            <div class="subscribe">
              <button
                type="button"
                aria-label="Form daftar segera hadir"
                disabled
              >
                →
              </button>
            </div>
          </div>
        </section>
        <section id="tentang" class="trust-row">
          <div class="trust">
            <b>♧</b
            ><span
              ><strong>Koleksi untuk semua</strong
              ><small>Fiksi, pendidikan, dan keterampilan</small></span
            >
          </div>
          <div class="trust">
            <b>♙</b
            ><span
              ><strong>Ruang belajar bersama</strong
              ><small>Nyaman untuk membaca dan berdiskusi</small></span
            >
          </div>
          <div class="trust">
            <b>◷</b
            ><span
              ><strong>Jam operasional</strong
              ><small>Senin–Jumat, 08.00–16.00</small></span
            >
          </div>
          <div class="trust">
            <b>⌖</b
            ><span
              ><strong>Lokasi mudah dijangkau</strong
              ><small>Balai Desa Sukamaju, Kab. Bandung</small></span
            >
          </div>
        </section>
        <section class="about-panel" aria-label="Tentang Perpustakaan Desa">
          <img src="/assets/Books to read.jpg" alt="Suasana ruang Perpustakaan Desa" />
          <div>
            <p class="eyebrow">TENTANG KAMI</p>
            <h2>Tentang Perpustakaan Desa</h2>
            <p>
              Perpustakaan Desa adalah ruang belajar bersama milik warga. Semua
              koleksi buku dan kegiatan literasi kami terbuka gratis untuk siapa
              saja yang tinggal di desa, tanpa biaya keanggotaan.
            </p>
            <div class="about-facts">
              <span
                ><b>JAM OPERASIONAL</b
                ><span
                  >Senin: 08.00–16.00<br />Selasa: 08.00–16.00<br />Rabu:
                  08.00–16.00<br />Kamis: 08.00–16.00<br />Jumat: 08.00–16.00<br />Sabtu:
                  09.00–13.00<br />Minggu: Tutup</span
                ></span
              ><span
                ><b>LOKASI</b
                ><span>Balai Desa Sukamaju,<br />Kab. Bandung</span></span
              ><span
                ><b>KONTAK</b
                ><span class="contact-detail"
                  ><img src="assets/contact.png" alt="" />(022) 123-4567</span
                ></span
              >
            </div>
          </div>
        </section>
      </div>
    </main>
    <footer id="kontak">
      <div class="container footer-main">
        <div class="footer-brand">
          <a class="logo" href="beranda.html"
            ><span class="logo-mark">♧</span
            ><span>PERPUSTAKAAN<small>DESA SUKAMAJU</small></span></a
          >
          <p>
            Ruang belajar bersama milik warga. Mari menumbuhkan pengetahuan,
            satu halaman setiap hari.
          </p>
          <div class="socials">
            <a href="#kontak">f</a><a href="#kontak">ig</a
            ><a href="#kontak">▶</a>
          </div>
        </div>
        <div class="footer-links">
          <div>
            <h3>JELAJAHI</h3>
            <a href="beranda.html">Beranda</a
            ><a aria-disabled="true">Katalog Buku</a
            ><a href="#kategori">Kategori</a>
          </div>
          <div>
            <h3>INFORMASI</h3>
            <a href="#tentang">Tentang Kami</a><a href="#tentang">Jam Buka</a
            ><a href="#kontak">Kontak</a>
          </div>
          <div>
            <h3>ALAMAT</h3>
            <a href="#tentang">Balai Desa Sukamaju</a
            ><a href="#tentang">Kab. Bandung</a
            ><a href="tel:+62221234567">(022) 123-4567</a>
          </div>
        </div>
        <div class="footer-news">
          <h3>BERITA LITERASI</h3>
          <p>Dapatkan informasi kegiatan terbaru kami.</p>
          <div class="subscribe">
            <button
              type="button"
              aria-label="Form daftar segera hadir"
              disabled
            >
              →
            </button>
          </div>
        </div>
      </div>
      <div class="copyright">
        © 2026 Perpustakaan Desa Sukamaju. Seluruh hak cipta dilindungi.
      </div>
      x
    </footer>
  </body>
</html>

<!doctype html>

<html lang="id">
    <head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
            content="Detail dan Peminjaman Buku Informatika Untuk SMA Kelas XII - Perpustakaan Desa Sukamaju"
            name="description"
        />
        <title>
            Informatika Untuk SMA Kelas XII - Detail Buku | Perpustakaan Desa
            Sukamaju
        </title>
        <!--<link href="/styles/global.css" rel="stylesheet" />-->
        <link href="../styles/detail_produk.css" rel="stylesheet" />
    </head>
    <body>
        <!-- Topbar -->
        <div class="topbar">
            <div class="container">
                <p>
                    🚚 Layanan peminjaman buku perpustakaan untuk seluruh warga
                    desa
                </p>
                <div class="utility">
                    <span>✦ Ruang baca, digital &amp; buku fisik</span>
                    <span>☎ (022) 123-4567</span>
                </div>
            </div>
        </div>
        <!-- Header Navigation -->
        <header class="site-header">
            <div class="container">
                <a class="logo" href="beranda.html">
                    <span class="logo-mark">♧</span>
                    <span>PERPUSTAKAAN<small>DESA SUKAMAJU</small></span>
                </a>
                <nav aria-label="Navigasi utama" class="main-nav">
                    <a href="beranda.html">BERANDA</a>
                    <a class="active" href="produk.html">KATALOG BUKU</a>
                    <a href="auth-login.html">LOGIN</a>
                    <a href="auth-regist.html">REGIST</a>
                    <a href="form_peminjaman.html">PINJAM BUKU</a>
                </nav>
                <div class="header-actions">
                    <form class="search-box" role="search">
                        <input
                            type="search"
                            aria-label="Cari buku"
                            placeholder="Cari buku..."
                        /><button type="button" aria-label="Cari" disabled>
                            ⌕
                        </button>
                    </form>
                    <a href="#kontak" aria-label="Hubungi kami">♙</a>
                </div>
            </div>
        </header>
        <main class="container">
            <!-- Breadcrumb & Back Action -->
            <div class="detail-nav-bar">
                <a
                    aria-label="Kembali ke halaman katalog"
                    class="btn-back"
                    href="produk.html"
                    id="backToCatalogBtn"
                >
                    <span>←</span> Kembali ke Koleksi
                </a>
                <nav aria-label="Breadcrumb" class="detail-breadcrumb">
                    <a href="beranda.html">Beranda</a>
                    <span>/</span>
                    <a href="produk.html">Katalog Buku</a>
                    <span>/</span>
                    <span style="color: var(--ink); font-weight: 600"
                        >Informatika Untuk SMA Kelas XII</span
                    >
                </nav>
            </div>
            <!-- Main Showcase Card -->
            <article class="product-showcase">
                <!-- Left Column: Cover, Badges, Digital Reading -->
                <div class="book-media-col">
                    <div class="book-cover-frame">
                        <img
                            alt="Sampul buku resmi Informatika Untuk SMA Kelas XII Kementerian Pendidikan"
                            id="bookDetailCover"
                            src="https://static-sc.cloudapp.web.id/content/image/coverteks/coverkurikulum21/Informatika_BS_KLS_XII_Cover.png"
                        />
                    </div>
                    <div class="media-badges-row">
                        <span class="badge-type">📚 FISIK &amp; DIGITAL</span>
                        <span class="badge-library-code">🔖 Rak: ED-012</span>
                        <span class="badge-library-code"
                            >🏷️ Kurikulum Merdeka</span
                        >
                    </div>
                    <!-- Digital Access Box -->
                    <div class="digital-actions-card">
                        <span class="digital-card-title"
                            >📱 Akses Versi Digital Langsung</span
                        >
                        <div class="digital-btn-row">
                            <a
                                class="btn-read-online"
                                href="https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Informatika_BS_KLS_XII.pdf"
                                rel="noopener"
                                target="_blank"
                            >
                                <span>📖</span> Baca Online
                            </a>
                            <a
                                class="btn-download-pdf"
                                download="Informatika_BS_KLS_XII.pdf"
                                href="https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Informatika_BS_KLS_XII.pdf"
                            >
                                <span>⬇️</span> Unduh PDF
                            </a>
                        </div>
                    </div>
                </div>
                <!-- Right Column: Metadata, Availability, Borrow Action -->
                <div class="book-details-col">
                    <span class="book-genre-pill"
                        >Pendidikan • Teknologi Informasi</span
                    >
                    <h1 class="book-title" id="bookTitleHeading">
                        Informatika Untuk SMA Kelas XII
                    </h1>
                    <div class="book-author-meta">
                        <span
                            >Oleh:
                            <strong
                                >Pri Ario Damar, Naning Widayati</strong
                            ></span
                        >
                        <span class="meta-divider">•</span>
                        <span>Tahun: <strong>2022</strong></span>
                        <span class="meta-divider">•</span>
                        <span
                            >Penerbit:
                            <strong>Kementerian Pendidikan</strong></span
                        >
                    </div>
                    <!-- Stock & Availability Indicator -->
                    <div
                        aria-label="Informasi ketersediaan stok buku"
                        class="stock-status-box"
                    >
                        <div class="stock-box-header">
                            <span class="stock-box-title"
                                >Status Ketersediaan Perpustakaan</span
                            >
                            <div
                                class="stock-badge-live stock-badge-available"
                                id="stockStatusBadge"
                            >
                                <span class="dot"></span>
                                <span id="stockStatusText"
                                    >Tersedia untuk Dipinjam</span
                                >
                            </div>
                        </div>
                        <div class="stock-channels">
                            <div class="channel-card">
                                <span class="channel-name"
                                    >🏢 Salinan Fisik di Balai Desa</span
                                >
                                <div
                                    class="channel-value"
                                    id="physicalStockCount"
                                >
                                    5 Eksemplar Tersedia
                                </div>
                                <div class="channel-note">
                                    Bisa diambil langsung di meja layanan
                                </div>
                            </div>
                            <div class="channel-card">
                                <span class="channel-name"
                                    >🌐 Akses Digital Warga</span
                                >
                                <div class="channel-value">Tersedia Bebas</div>
                                <div class="channel-note">
                                    Tanpa kuota antrean, gratis
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Main CTA: Borrow & Favorite -->
                    <div class="primary-actions-row">
                        <a
                            class="btn-borrow-main"
                            href="form_peminjaman.html?book=informatika-xii"
                            id="btnPinjamBuku"
                        >
                            <span>▤</span> Pinjam Buku Ini
                        </a>
                        <button
                            aria-label="Tambah buku ini ke koleksi favorit"
                            class="btn-favorite-detail"
                            id="btnFavoriteDetail"
                            type="button"
                        >
                            <span class="heart-icon">♥</span>
                            <span id="favDetailLabel">Tambah ke Favorit</span>
                        </button>
                    </div>
                    <!-- Synopsis / Description -->
                    <section
                        aria-labelledby="synopsis-title"
                        class="section-block"
                    >
                        <h2 id="synopsis-title">Sinopsis Buku</h2>
                        <p class="synopsis-text">
                            Buku teks Informatika untuk SMA Kelas XII ini
                            disusun berdasarkan Kurikulum Merdeka untuk
                            membekali siswa dengan pemahaman mendalam tentang
                            berpikir komputasional, rekayasa perangkat lunak,
                            analisis data, keamanan siber, dan dampak sosial
                            informatika di era kecerdasan buatan. Materi
                            disajikan secara kontekstual dengan latihan praktis
                            yang mudah diaplikasikan oleh pelajar di lingkungan
                            desa maupun perkotaan.
                        </p>
                    </section>
                    <!-- Specifications Table / Editorial Meta -->
                    <section
                        aria-labelledby="specs-title"
                        class="section-block"
                    >
                        <h2 id="specs-title">
                            Spesifikasi &amp; Detail Katalog
                        </h2>
                        <div class="specs-grid">
                            <div class="spec-item">
                                <span class="spec-label">Penulis</span>
                                <span class="spec-val"
                                    >Pri Ario Damar, Naning Widayati</span
                                >
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Penerbit</span>
                                <span class="spec-val"
                                    >Pusat Perbukuan Kemendikbudristek</span
                                >
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Tahun Terbit</span>
                                <span class="spec-val"
                                    >2022 (Cetakan Pertama)</span
                                >
                            </div>
                            <div class="spec-item">
                                <span class="spec-label"
                                    >ISBN / Identifikasi</span
                                >
                                <span class="spec-val">978-602-244-884-6</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Jumlah Halaman</span>
                                <span class="spec-val">288 Halaman</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Bahasa</span>
                                <span class="spec-val">Bahasa Indonesia</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Format Buku</span>
                                <span class="spec-val"
                                    >Buku Cetak Softcover &amp; Digital
                                    PDF</span
                                >
                            </div>
                            <div class="spec-item">
                                <span class="spec-label"
                                    >Lokasi Rak Balai Desa</span
                                >
                                <span class="spec-val"
                                    >Lantai 1, Rak ED-012 (Pendidikan)</span
                                >
                            </div>
                        </div>
                    </section>
                </div>
            </article>
            <!-- Related Books Section -->
            <section class="related-section">
                <div class="related-header">
                    <div>
                        <p
                            style="
                                font-size: 11px;
                                font-weight: 700;
                                color: var(--blue);
                                letter-spacing: 0.1em;
                                text-transform: uppercase;
                            "
                        >
                            REKOMENDASI TERKAIT
                        </p>
                        <h2>Buku Serupa untuk Dipelajari</h2>
                    </div>
                    <a class="related-link" href="produk.html"
                        >Lihat Semua di Katalog →</a
                    >
                </div>
                <div class="related-grid">
                    <article class="related-card">
                        <div class="related-cover">
                            <img
                                alt="Informatika Kelas XI"
                                src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
                            />
                        </div>
                        <h3 class="related-title">
                            Informatika Untuk SMA Kelas XI
                        </h3>
                        <p class="related-author">Pri Ario Damar</p>
                    </article>
                    <article class="related-card">
                        <div class="related-cover">
                            <img
                                alt="Dasar Pemrograman Python"
                                src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
                            />
                        </div>
                        <h3 class="related-title">
                            Dasar Jaringan Komputer Desa
                        </h3>
                        <p class="related-author">Tim Litbang Desa</p>
                    </article>
                    <article class="related-card">
                        <div class="related-cover">
                            <img
                                alt="Kewirausahaan Agribisnis"
                                src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
                            />
                        </div>
                        <h3 class="related-title">Kewirausahaan Agribisnis</h3>
                        <p class="related-author">Dr. Hendra Gunawan</p>
                    </article>
                    <article class="related-card">
                        <div class="related-cover">
                            <img
                                alt="Konservasi Mata Air"
                                src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
                            />
                        </div>
                        <h3 class="related-title">
                            Konservasi Hutan &amp; Mata Air
                        </h3>
                        <p class="related-author">Komunitas Sahabat Bumi</p>
                    </article>
                </div>
            </section>
        </main>
        <!-- Footer Konsisten dari beranda.html -->
        <footer id="kontak">
            <div class="container footer-main">
                <div class="footer-brand">
                    <a class="logo" href="beranda.html">
                        <span class="logo-mark">♧</span>
                        <span>PERPUSTAKAAN<small>DESA SUKAMAJU</small></span>
                    </a>
                    <p>
                        Ruang belajar bersama milik warga. Menumbuhkan
                        pengetahuan dan budaya membaca bagi generasi masa depan.
                    </p>
                    <div class="socials">
                        <a aria-label="Facebook" href="#kontak">f</a>
                        <a aria-label="Instagram" href="#kontak">ig</a>
                        <a aria-label="YouTube" href="#kontak">▶</a>
                    </div>
                </div>
                <div class="footer-links">
                    <div>
                        <h3>JELAJAHI</h3>
                        <a href="beranda.html">Beranda</a>
                        <a href="produk.html">Katalog Buku</a>
                        <a href="form_peminjaman.html">Form Pinjam</a>
                    </div>
                    <div>
                        <h3>INFORMASI</h3>
                        <a href="beranda.html#tentang">Tentang Kami</a>
                        <a href="beranda.html#tentang">Jam Buka</a>
                        <a href="#kontak">Kontak</a>
                    </div>
                    <div>
                        <h3>ALAMAT</h3>
                        <a href="beranda.html#tentang">Balai Desa Sukamaju</a>
                        <a href="beranda.html#tentang">Kab. Bandung</a>
                        <a href="tel:+62221234567">(022) 123-4567</a>
                    </div>
                </div>
                <div class="footer-news">
                    <h3>BERITA LITERASI</h3>
                    <p>
                        Dapatkan informasi buku baru &amp; agenda bedah buku
                        mingguan warga.
                    </p>
                    <div style="font-size: 11px; color: #93c5fd">
                        Buka: Senin–Jumat 08.00–16.00
                    </div>
                </div>
            </div>
            <div class="copyright">
                © 2026 Perpustakaan Desa Sukamaju. Seluruh hak cipta dilindungi.
            </div>
        </footer>
        <!-- Interactive Script for Detail Actions -->
        <script>
            document.addEventListener("DOMContentLoaded", () => {
              const favBtn = document.getElementById("btnFavoriteDetail");
              const favLabel = document.getElementById("favDetailLabel");
              const borrowBtn = document.getElementById("btnPinjamBuku");

              // Favorite Button Toggle
              let isFav = false;
              favBtn.addEventListener("click", () => {
                isFav = !isFav;
                if (isFav) {
                  favBtn.classList.add("active");
                  favLabel.textContent = "Tersimpan di Favorit";
                } else {
                  favBtn.classList.remove("active");
                  favLabel.textContent = "Tambah ke Favorit";
                }
              });

              // Demo Stock Handler (Jika buku diset habis)
              window.setStockState = function(state) {
                const badge = document.getElementById("stockStatusBadge");
                const text = document.getElementById("stockStatusText");
                const count = document.getElementById("physicalStockCount");

                if (state === "out") {
                  badge.className = "stock-badge-live" style="background: #fef2f2; color: #991b1b;";
                  text.textContent = "Saat Ini Habis Dipinjam";
                  count.textContent = "0 Eksemplar Tersisa";
                  borrowBtn.classList.add("disabled");
                  borrowBtn.removeAttribute("href");
                  borrowBtn.innerHTML = "<span>✕</span> Stok Fisik Habis";
                }
              };
            });
        </script>
    </body>
</html>


<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Form Peminjaman - Perpustakaan Buku Desa</title>
<link rel="stylesheet" href="/styles/form_peminjaman.css">
<link rel="stylesheet" href="/styles/global.css">

</head>
<body>
    <div class="wrap">
        <div class="brand-row">
            <span class="brand-mark" aria-hidden="true">&#128214;</span>
            <span class="brand">Perpustakaan Desa</span>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="header-content">
                    <h1>Form Peminjaman</h1>
                    <p>Lengkapi form berikut untuk mengajukan peminjaman buku.</p>
                </div>
            </div>

            <form id="loanForm">
                <div class="field">
                    <label for="nama">Nama Peminjam</label>
                    <input type="text" id="nama" name="nama" placeholder="Nama lengkap" required>
                </div>

                <div class="row-2">
                    <div class="field">
                        <label for="anggota">No. Anggota <span class="hint">(opsional)</span></label>
                        <input type="text" id="anggota" name="anggota" placeholder="Mis. A-0231">
                    </div>
                    <div class="field">
                        <label for="telepon">No. WhatsApp</label>
                        <input type="tel" id="telepon" name="telepon" placeholder="08xx-xxxx-xxxx" required>
                    </div>
                </div>

                <div class="field">
                    <label for="judul">Judul Buku</label>
                    <input type="text" id="judul" name="judul" placeholder="Judul buku yang ingin dipinjam" required>
                </div>

                <div class="row-2">
                    <div class="field">
                        <label for="tglPinjam">Tanggal Pinjam</label>
                        <input type="date" id="tglPinjam" name="tglPinjam" required>
                    </div>
                    <div class="field">
                        <label for="tglKembali">Tanggal Kembali</label>
                        <input type="date" id="tglKembali" name="tglKembali" required>
                    </div>
                </div>

                <div class="field">
                    <label for="catatan">Catatan <span class="hint">(opsional)</span></label>
                    <textarea id="catatan" name="catatan" placeholder="Tambahkan catatan jika diperlukan"></textarea>
                </div>

                <button type="submit" class="btn-submit">Ajukan Peminjaman &nbsp;&rarr;</button>
                <p class="note">Data Anda hanya digunakan untuk keperluan administrasi peminjaman buku.</p>
            </form>

            <div class="confirm" id="confirmBox">
                <div class="check">&#10003;</div>
                <h2>Pengajuan Terkirim</h2>
                <p>Terima kasih. Permintaan peminjaman buku Anda telah diterima dan akan segera diproses.</p>
                <button type="button" class="btn-secondary" id="resetBtn">Ajukan Peminjaman Lain</button>
            </div>
        </div>
    </div>

    <script>
        const form = document.getElementById('loanForm');
        const confirmBox = document.getElementById('confirmBox');
        const resetBtn = document.getElementById('resetBtn');

        const tglPinjam = document.getElementById('tglPinjam');
        const tglKembali = document.getElementById('tglKembali');
        tglPinjam.addEventListener('change', () => {
            tglKembali.min = tglPinjam.value;
        });

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            form.style.display = 'none';
            confirmBox.style.display = 'block';
        });

        resetBtn.addEventListener('click', function () {
            form.reset();
            confirmBox.style.display = 'none';
            form.style.display = 'block';
        });
    </script>
</body>
</html>

<!doctype html>

<html lang="id">
    <head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
            content="Katalog Koleksi Buku Perpustakaan Desa Sukamaju. Pinjam buku digital dan buku fisik secara gratis untuk seluruh warga desa."
            name="description"
        />
        <title>Katalog Koleksi Buku | Perpustakaan Desa Sukamaju</title>
        <!--<link href="/styles/global.css" rel="stylesheet" />-->
        <link href="../styles/produk.css" rel="stylesheet" />
    </head>
    <body>
        <!-- Topbar -->
        <div class="topbar">
            <div class="container">
                <p>
                    🚚 Layanan peminjaman buku perpustakaan untuk seluruh warga
                    desa
                </p>
                <div class="utility">
                    <span>✦ Ruang baca, digital &amp; buku fisik</span>
                    <span>☎ (022) 123-4567</span>
                </div>
            </div>
        </div>
        <!-- Header Navigation -->
        <header class="site-header">
            <div class="container">
                <a class="logo" href="beranda.html">
                    <span class="logo-mark">♧</span>
                    <span>PERPUSTAKAAN<small>DESA SUKAMAJU</small></span>
                </a>
                <nav aria-label="Navigasi utama" class="main-nav">
                    <a href="beranda.html">BERANDA</a>
                    <a class="active" href="produk.html">KATALOG BUKU</a>
                    <a href="auth-login.html">LOGIN</a>
                    <a href="auth-regist.html">REGIST</a>
                    <a href="form_peminjaman.html">PINJAM BUKU</a>
                </nav>
                <div class="header-actions">
                    <form class="search-box" role="search">
                        <input
                            type="search"
                            aria-label="Cari buku"
                            placeholder="Cari buku..."
                        /><button type="button" aria-label="Cari" disabled>
                            ⌕
                        </button>
                    </form>
                    <a href="#kontak" aria-label="Hubungi kami">♙</a>
                </div>
            </div>
        </header>
        <main class="container">
            <!-- Page Header Intro -->
            <section class="catalog-intro">
                <nav aria-label="Breadcrumb" class="breadcrumb">
                    <a href="beranda.html">Beranda</a>
                    <span>/</span>
                    <span style="color: var(--ink); font-weight: 600"
                        >Katalog Buku</span
                    >
                </nav>
                <p class="eyebrow">KOLEKSI LENGKAP WARGA</p>
                <h1>Jelajahi Koleksi Buku</h1>
                <p>
                    Temukan dan pinjam ribuan buku berkualitas, mulai dari buku
                    bacaan digital gratis hingga buku cetak fisik yang siap
                    diambil di balai desa.
                </p>
            </section>
            <!-- Search & Filter Card -->
            <section
                aria-label="Alat pencarian dan penyaringan"
                class="toolbar-card"
            >
                <!-- Search bar -->
                <div class="search-container">
                    <span class="search-icon">🔍</span>
                    <input
                        aria-label="Cari buku dalam katalog"
                        class="main-search-input"
                        id="bookSearchInput"
                        placeholder="Cari judul buku, penulis, atau genre (cth: Informatika, Pri Ario, Pendidikan)..."
                        type="search"
                    />
                    <button
                        aria-label="Hapus pencarian"
                        class="search-clear-btn"
                        id="searchClearBtn"
                        type="button"
                    >
                        ✕
                    </button>
                </div>
                <!-- Filter Row -->
                <div class="filter-row">
                    <!-- Filter 1: Format Buku -->
                    <div class="filter-group">
                        <span class="filter-label">Jenis Buku</span>
                        <div
                            aria-label="Pilih format buku"
                            class="segmented-control"
                            role="group"
                        >
                            <button
                                class="seg-btn active"
                                data-filter-type="all"
                                type="button"
                            >
                                Semua
                            </button>
                            <button
                                class="seg-btn"
                                data-filter-type="digital"
                                type="button"
                            >
                                Buku Digital
                            </button>
                            <button
                                class="seg-btn"
                                data-filter-type="physical"
                                type="button"
                            >
                                Buku Fisik
                            </button>
                            <button
                                class="seg-btn"
                                data-filter-type="both"
                                type="button"
                            >
                                Fisik &amp; Digital
                            </button>
                        </div>
                    </div>
                    <!-- Filter 2: Ketersediaan Stok -->
                    <div class="filter-group">
                        <span class="filter-label">Ketersediaan Stok</span>
                        <select
                            aria-label="Pilih ketersediaan stok"
                            class="custom-select"
                            id="stockFilter"
                        >
                            <option value="all">Semua Status</option>
                            <option value="available">Tersedia</option>
                            <option value="limited">Stok Terbatas</option>
                            <option value="out">Habis Dipinjam</option>
                        </select>
                    </div>
                    <!-- Filter 3: Genre / Kategori -->
                    <div class="filter-group">
                        <span class="filter-label">Genre Buku</span>
                        <select
                            aria-label="Pilih genre buku"
                            class="custom-select"
                            id="genreFilter"
                        >
                            <option value="all">Semua Genre</option>
                            <option value="Pendidikan">
                                Pendidikan &amp; Sekolah
                            </option>
                            <option value="Teknologi">
                                Teknologi &amp; Komputer
                            </option>
                            <option value="Fiksi">Fiksi &amp; Cerita</option>
                            <option value="Nonfiksi">
                                Nonfiksi &amp; Umum
                            </option>
                            <option value="Bisnis">
                                Bisnis &amp; Pertanian
                            </option>
                            <option value="Sejarah">Sejarah Kebangsaan</option>
                            <option value="Pengembangan Diri">
                                Pengembangan Diri
                            </option>
                        </select>
                    </div>
                    <!-- Filter Reset -->
                    <button
                        class="filter-reset-btn"
                        id="resetFilterBtn"
                        type="button"
                    >
                        <span>↺</span> Reset Filter
                    </button>
                </div>
            </section>
            <!-- Active Filter Status & Count -->
            <div class="results-bar">
                <p class="results-count" id="resultsCount">
                    Menampilkan <strong>8 koleksi buku</strong> siap pinjam
                </p>
                <div class="active-chips" id="activeChipsContainer">
                    <!-- Filter chips dynamically injected or displayed -->
                    <span class="chip">Status: Semua</span>
                </div>
            </div>
            <!-- Book Catalog Grid -->
            <section aria-label="Daftar buku" class="book-grid" id="bookGrid">
                <!-- Item 1 (Main Sample Book) -->
                <article
                    class="book-card"
                    data-genre="Pendidikan"
                    data-stock="available"
                    data-type="both"
                >
                    <div class="card-cover-wrapper">
                        <span class="card-format-tag tag-both"
                            >FISIK &amp; DIGITAL</span
                        >
                        <button
                            aria-label="Tambah Informatika Untuk SMA Kelas XII ke Favorit"
                            class="btn-favorite"
                            title="Tambah ke Favorit"
                            type="button"
                        >
                            ♥
                        </button>
                        <img
                            alt="Sampul buku Informatika Untuk SMA Kelas XII"
                            loading="lazy"
                            src="https://static-sc.cloudapp.web.id/content/image/coverteks/coverkurikulum21/Informatika_BS_KLS_XII_Cover.png"
                        />
                    </div>
                    <div class="card-content">
                        <span class="card-genre">Pendidikan • Teknologi</span>
                        <h2 class="card-title">
                            <a href="detail_produk.html"
                                >Informatika Untuk SMA Kelas XII</a
                            >
                        </h2>
                        <p class="card-author">
                            Oleh: Pri Ario Damar, Naning Widayati
                        </p>
                        <div class="stock-status status-available">
                            <span class="status-dot"></span>
                            <span>Tersedia — 5 eksemplar fisik</span>
                        </div>
                        <div class="card-footer">
                            <a class="btn-detail" href="detail_produk.html">
                                <span>Lihat Detail Buku</span> →
                            </a>
                        </div>
                    </div>
                </article>
                <!-- Item 2 -->
                <article
                    class="book-card"
                    data-genre="Teknologi"
                    data-stock="available"
                    data-type="digital"
                >
                    <div class="card-cover-wrapper">
                        <span class="card-format-tag tag-digital"
                            >DIGITAL (PDF/EPUB)</span
                        >
                        <button
                            aria-label="Tambah ke Favorit"
                            class="btn-favorite"
                            title="Tambah ke Favorit"
                            type="button"
                        >
                            ♥
                        </button>
                        <img
                            alt="Sampul Dasar Jaringan Komputer &amp; Internet"
                            loading="lazy"
                            src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
                        />
                    </div>
                    <div class="card-content">
                        <span class="card-genre">Teknologi</span>
                        <h2 class="card-title">
                            <a href="detail_produk.html"
                                >Dasar Jaringan Komputer &amp; Internet Warga</a
                            >
                        </h2>
                        <p class="card-author">
                            Oleh: Pusat Kurikulum &amp; Perbukuan
                        </p>
                        <div class="stock-status status-available">
                            <span class="status-dot"></span>
                            <span>Tersedia — Akses Digital Bebas</span>
                        </div>
                        <div class="card-footer">
                            <a class="btn-detail" href="detail_produk.html">
                                <span>Lihat Detail Buku</span> →
                            </a>
                        </div>
                    </div>
                </article>
                <!-- Item 3 -->
                <article
                    class="book-card"
                    data-genre="Pendidikan"
                    data-stock="limited"
                    data-type="physical"
                >
                    <div class="card-cover-wrapper">
                        <span class="card-format-tag tag-physical">FISIK</span>
                        <button
                            aria-label="Hapus dari Favorit"
                            class="btn-favorite active"
                            title="Tersimpan di Favorit"
                            type="button"
                        >
                            ♥
                        </button>
                        <img
                            alt="Sampul Panduan Pembelajaran Interaktif"
                            loading="lazy"
                            src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
                        />
                    </div>
                    <div class="card-content">
                        <span class="card-genre">Pendidikan</span>
                        <h2 class="card-title">
                            <a href="detail_produk.html"
                                >Informatika Lanjutan &amp; Logika Komputasi</a
                            >
                        </h2>
                        <p class="card-author">Oleh: Pri Ario Damar</p>
                        <div class="stock-status status-limited">
                            <span class="status-dot"></span>
                            <span>Stok Terbatas — Tersisa 2 eksemplar</span>
                        </div>
                        <div class="card-footer">
                            <a class="btn-detail" href="detail_produk.html">
                                <span>Lihat Detail Buku</span> →
                            </a>
                        </div>
                    </div>
                </article>
                <!-- Item 4 -->
                <article
                    class="book-card"
                    data-genre="Fiksi"
                    data-stock="out"
                    data-type="physical"
                >
                    <div class="card-cover-wrapper">
                        <span class="card-format-tag tag-physical">FISIK</span>
                        <button
                            aria-label="Tambah ke Favorit"
                            class="btn-favorite"
                            title="Tambah ke Favorit"
                            type="button"
                        >
                            ♥
                        </button>
                        <img
                            alt="Sampul Cerita Rakyat &amp; Kearifan Nusantara"
                            loading="lazy"
                            src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
                        />
                    </div>
                    <div class="card-content">
                        <span class="card-genre">Fiksi • Sejarah</span>
                        <h2 class="card-title">
                            <a href="detail_produk.html"
                                >Cerita Rakyat &amp; Kearifan Pasundan</a
                            >
                        </h2>
                        <p class="card-author">Oleh: Tim Balai Pustaka Desa</p>
                        <div class="stock-status status-out">
                            <span class="status-dot"></span>
                            <span>Habis Dipinjam — Kembali 28 Okt</span>
                        </div>
                        <div class="card-footer">
                            <a class="btn-detail" href="detail_produk.html">
                                <span>Lihat Detail Buku</span> →
                            </a>
                        </div>
                    </div>
                </article>
                <!-- Item 5 -->
                <article
                    class="book-card"
                    data-genre="Bisnis"
                    data-stock="available"
                    data-type="both"
                >
                    <div class="card-cover-wrapper">
                        <span class="card-format-tag tag-both"
                            >FISIK &amp; DIGITAL</span
                        >
                        <button
                            aria-label="Tambah ke Favorit"
                            class="btn-favorite"
                            title="Tambah ke Favorit"
                            type="button"
                        >
                            ♥
                        </button>
                        <img
                            alt="Sampul Manajemen Usaha Tani Desa Mandiri"
                            loading="lazy"
                            src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
                        />
                    </div>
                    <div class="card-content">
                        <span class="card-genre">Bisnis • Pertanian</span>
                        <h2 class="card-title">
                            <a href="detail_produk.html"
                                >Kewirausahaan Agribisnis &amp; UMKM Desa</a
                            >
                        </h2>
                        <p class="card-author">
                            Oleh: Dr. Hendra Gunawan, M.Si
                        </p>
                        <div class="stock-status status-available">
                            <span class="status-dot"></span>
                            <span>Tersedia — 7 eksemplar fisik</span>
                        </div>
                        <div class="card-footer">
                            <a class="btn-detail" href="detail_produk.html">
                                <span>Lihat Detail Buku</span> →
                            </a>
                        </div>
                    </div>
                </article>
                <!-- Item 6 -->
                <article
                    class="book-card"
                    data-genre="Pengembangan Diri"
                    data-stock="available"
                    data-type="digital"
                >
                    <div class="card-cover-wrapper">
                        <span class="card-format-tag tag-digital"
                            >DIGITAL (E-BOOK)</span
                        >
                        <button
                            aria-label="Tambah ke Favorit"
                            class="btn-favorite"
                            title="Tambah ke Favorit"
                            type="button"
                        >
                            ♥
                        </button>
                        <img
                            alt="Sampul Menata Finansial Keluarga Sejahtera"
                            loading="lazy"
                            src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
                        />
                    </div>
                    <div class="card-content">
                        <span class="card-genre">Pengembangan Diri</span>
                        <h2 class="card-title">
                            <a href="detail_produk.html"
                                >Cerdas Finansial Rumah Tangga</a
                            >
                        </h2>
                        <p class="card-author">Oleh: Wening Sulistyowati</p>
                        <div class="stock-status status-available">
                            <span class="status-dot"></span>
                            <span>Tersedia — Akses Digital Bebas</span>
                        </div>
                        <div class="card-footer">
                            <a class="btn-detail" href="detail_produk.html">
                                <span>Lihat Detail Buku</span> →
                            </a>
                        </div>
                    </div>
                </article>
                <!-- Item 7 -->
                <article
                    class="book-card"
                    data-genre="Sejarah"
                    data-stock="limited"
                    data-type="physical"
                >
                    <div class="card-cover-wrapper">
                        <span class="card-format-tag tag-physical">FISIK</span>
                        <button
                            aria-label="Tambah ke Favorit"
                            class="btn-favorite"
                            title="Tambah ke Favorit"
                            type="button"
                        >
                            ♥
                        </button>
                        <img
                            alt="Sampul Babad Tanah Priangan &amp; Sukamaju"
                            loading="lazy"
                            src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
                        />
                    </div>
                    <div class="card-content">
                        <span class="card-genre">Sejarah</span>
                        <h2 class="card-title">
                            <a href="detail_produk.html"
                                >Jejak Langkah &amp; Babad Desa Sukamaju</a
                            >
                        </h2>
                        <p class="card-author">
                            Oleh: Lembaga Adat Desa Sukamaju
                        </p>
                        <div class="stock-status status-limited">
                            <span class="status-dot"></span>
                            <span>Stok Terbatas — Tersisa 1 eksemplar</span>
                        </div>
                        <div class="card-footer">
                            <a class="btn-detail" href="detail_produk.html">
                                <span>Lihat Detail Buku</span> →
                            </a>
                        </div>
                    </div>
                </article>
                <!-- Item 8 -->
                <article
                    class="book-card"
                    data-genre="Nonfiksi"
                    data-stock="available"
                    data-type="both"
                >
                    <div class="card-cover-wrapper">
                        <span class="card-format-tag tag-both"
                            >FISIK &amp; DIGITAL</span
                        >
                        <button
                            aria-label="Tambah ke Favorit"
                            class="btn-favorite"
                            title="Tambah ke Favorit"
                            type="button"
                        >
                            ♥
                        </button>
                        <img
                            alt="Sampul Menjaga Kelestarian Air Desa"
                            loading="lazy"
                            src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
                        />
                    </div>
                    <div class="card-content">
                        <span class="card-genre">Nonfiksi • Lingkungan</span>
                        <h2 class="card-title">
                            <a href="detail_produk.html"
                                >Konservasi Mata Air &amp; Hutan Desa</a
                            >
                        </h2>
                        <p class="card-author">Oleh: Komunitas Sahabat Bumi</p>
                        <div class="stock-status status-available">
                            <span class="status-dot"></span>
                            <span>Tersedia — 4 eksemplar fisik</span>
                        </div>
                        <div class="card-footer">
                            <a class="btn-detail" href="detail_produk.html">
                                <span>Lihat Detail Buku</span> →
                            </a>
                        </div>
                    </div>
                </article>
                <!-- Empty State UI -->
                <div class="empty-state" id="emptyState">
                    <div class="empty-state-icon">📖</div>
                    <h3>Tidak ada buku yang sesuai</h3>
                    <p>
                        Coba gunakan kata kunci pencarian lain atau setel ulang
                        filter kategori dan ketersediaan stok.
                    </p>
                    <button
                        class="btn-detail"
                        onclick="resetAllFilters()"
                        style="width: auto; margin: auto; padding: 8px 20px"
                        type="button"
                    >
                        Kembalikan Semua Buku
                    </button>
                </div>
            </section>
            <!-- Pagination -->
            <nav aria-label="Navigasi halaman katalog" class="pagination-row">
                <button
                    aria-label="Halaman sebelumnya"
                    class="page-btn"
                    disabled=""
                    type="button"
                >
                    ‹
                </button>
                <button
                    aria-current="page"
                    class="page-btn active"
                    type="button"
                >
                    1
                </button>
                <button class="page-btn" type="button">2</button>
                <button class="page-btn" type="button">3</button>
                <button
                    aria-label="Halaman berikutnya"
                    class="page-btn"
                    type="button"
                >
                    ›
                </button>
            </nav>
        </main>
        <!-- Footer Konsisten dari beranda.html -->
        <footer id="kontak">
            <div class="container footer-main">
                <div class="footer-brand">
                    <a class="logo" href="beranda.html">
                        <span class="logo-mark">♧</span>
                        <span>PERPUSTAKAAN<small>DESA SUKAMAJU</small></span>
                    </a>
                    <p>
                        Ruang belajar bersama milik warga. Menumbuhkan
                        pengetahuan dan budaya membaca bagi generasi masa depan.
                    </p>
                    <div class="socials">
                        <a aria-label="Facebook" href="#kontak">f</a>
                        <a aria-label="Instagram" href="#kontak">ig</a>
                        <a aria-label="YouTube" href="#kontak">▶</a>
                    </div>
                </div>
                <div class="footer-links">
                    <div>
                        <h3>JELAJAHI</h3>
                        <a href="beranda.html">Beranda</a>
                        <a href="produk.html">Katalog Buku</a>
                        <a href="form_peminjaman.html">Form Pinjam</a>
                    </div>
                    <div>
                        <h3>INFORMASI</h3>
                        <a href="beranda.html#tentang">Tentang Kami</a>
                        <a href="beranda.html#tentang">Jam Buka</a>
                        <a href="#kontak">Kontak</a>
                    </div>
                    <div>
                        <h3>ALAMAT</h3>
                        <a href="beranda.html#tentang">Balai Desa Sukamaju</a>
                        <a href="beranda.html#tentang">Kab. Bandung</a>
                        <a href="tel:+62221234567">(022) 123-4567</a>
                    </div>
                </div>
                <div class="footer-news">
                    <h3>BERITA LITERASI</h3>
                    <p>
                        Dapatkan informasi buku baru &amp; agenda bedah buku
                        mingguan warga.
                    </p>
                    <form
                        class="subscribe-box"
                        onsubmit="
                            event.preventDefault();
                            alert('Terima kasih telah mendaftar!');
                        "
                    >
                        <input
                            aria-label="Email buletin"
                            placeholder="Masukkan email Anda..."
                            required=""
                            type="email"
                        />
                        <button aria-label="Kirim" type="submit">"&gt;→</button>
                    </form>
                </div>
            </div>
            <div class="copyright">
                © 2026 Perpustakaan Desa Sukamaju. Seluruh hak cipta dilindungi.
            </div>
        </footer>
        <!-- Interactive Script for Real-time Search, Filters & Favorites -->
        <!--<script>
            document.addEventListener("DOMContentLoaded", () => {
                const searchInput = document.getElementById("bookSearchInput");
                const clearBtn = document.getElementById("searchClearBtn");
                const segButtons = document.querySelectorAll(".seg-btn");
                const stockFilter = document.getElementById("stockFilter");
                const genreFilter = document.getElementById("genreFilter");
                const resetBtn = document.getElementById("resetFilterBtn");
                const bookCards = document.querySelectorAll(".book-card");
                const emptyState = document.getElementById("emptyState");
                const resultsCount = document.getElementById("resultsCount");
                const chipsContainer = document.getElementById(
                    "activeChipsContainer",
                );
                const favButtons = document.querySelectorAll(".btn-favorite");

                let activeType = "all";

                // Favorite Toggle
                favButtons.forEach((btn) => {
                    btn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        btn.classList.toggle("active");
                        if (btn.classList.contains("active")) {
                            btn.setAttribute("title", "Tersimpan di Favorit");
                        } else {
                            btn.setAttribute("title", "Tambah ke Favorit");
                        }
                    });
                });

                // Filter Logic
                function filterBooks() {
                    const query = searchInput.value.toLowerCase().trim();
                    const selectedStock = stockFilter.value;
                    const selectedGenre = genreFilter.value;
                    let visibleCount = 0;

                    clearBtn.style.display = query ? "block" : "none";

                    bookCards.forEach((card) => {
                        const cardType = card.getAttribute("data-type");
                        const cardStock = card.getAttribute("data-stock");
                        const cardGenre = card.getAttribute("data-genre");
                        const title = card
                            .querySelector(".card-title")
                            .textContent.toLowerCase();
                        const author = card
                            .querySelector(".card-author")
                            .textContent.toLowerCase();

                        // Match Type
                        let matchType =
                            activeType === "all" ||
                            cardType === activeType ||
                            (activeType === "digital" && cardType === "both") ||
                            (activeType === "physical" && cardType === "both");

                        // Match Stock
                        let matchStock =
                            selectedStock === "all" ||
                            cardStock === selectedStock;

                        // Match Genre
                        let matchGenre =
                            selectedGenre === "all" ||
                            cardGenre.includes(selectedGenre);

                        // Match Search
                        let matchSearch =
                            !query ||
                            title.includes(query) ||
                            author.includes(query) ||
                            cardGenre.toLowerCase().includes(query);

                        if (
                            matchType &&
                            matchStock &&
                            matchGenre &&
                            matchSearch
                        ) {
                            card.style.display = "flex";
                            visibleCount++;
                        } else {
                            card.style.display = "none";
                        }
                    });

                    // Update count & empty state
                    resultsCount.innerHTML = `Menampilkan <strong>${visibleCount} koleksi buku</strong> siap pinjam`;
                    if (visibleCount === 0) {
                        emptyState.style.display = "block";
                    } else {
                        emptyState.style.display = "none";
                    }

                    updateChips(query, selectedStock, selectedGenre);
                }

                function updateChips(query, stock, genre) {
                    chipsContainer.innerHTML = "";
                    if (activeType !== "all") {
                        const labelMap = {
                            digital: "Digital",
                            physical: "Fisik",
                            both: "Fisik & Digital",
                        };
                        chipsContainer.innerHTML += `<span class="chip">Jenis: ${labelMap[activeType]}</span>`;
                    }
                    if (stock !== "all") {
                        const stockMap = {
                            available: "Tersedia",
                            limited: "Stok Terbatas",
                            out: "Habis",
                        };
                        chipsContainer.innerHTML += `<span class="chip">Stok: ${stockMap[stock]}</span>`;
                    }
                    if (genre !== "all") {
                        chipsContainer.innerHTML += `<span class="chip">Genre: ${genre}</span>`;
                    }
                    if (query) {
                        chipsContainer.innerHTML += `<span class="chip">Cari: "${query}"</span>`;
                    }
                    if (!chipsContainer.innerHTML) {
                        chipsContainer.innerHTML = `<span class="chip">Semua Buku Aktif</span>`;
                    }
                }

                // Segmented control click
                segButtons.forEach((btn) => {
                    btn.addEventListener("click", () => {
                        segButtons.forEach((b) => b.classList.remove("active"));
                        btn.classList.add("active");
                        activeType = btn.getAttribute("data-filter-type");
                        filterBooks();
                    });
                });

                // Search input
                searchInput.addEventListener("input", filterBooks);
                clearBtn.addEventListener("click", () => {
                    searchInput.value = "";
                    filterBooks();
                    searchInput.focus();
                });

                // Select changes
                stockFilter.addEventListener("change", filterBooks);
                genreFilter.addEventListener("change", filterBooks);

                // Reset
                window.resetAllFilters = function () {
                    searchInput.value = "";
                    stockFilter.value = "all";
                    genreFilter.value = "all";
                    segButtons.forEach((b) => b.classList.remove("active"));
                    segButtons[0].classList.add("active");
                    activeType = "all";
                    filterBooks();
                };

                resetBtn.addEventListener("click", window.resetAllFilters);
            });
        </script>-->
    </body>
</html>


```