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

    <link rel="stylesheet" href="../styles/global.css">

    <style>
      .container {
        margin: 0 auto;
        max-width: 1120px;
        padding: 48px 24px;
      }

      .login-wrapper {
        min-height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .login-card {
        width: 100%;
        max-width: 420px;
        padding: 32px;
        background: var(--surface);
        border: 1px solid #e5e7eb;
        border-radius: 12px;
      }

      .login-heading {
        margin-bottom: 8px;
        text-align: center;
        font-size: 28px;
      }

      .login-description {
        margin-bottom: 28px;
        color: var(--muted);
        text-align: center;
        font-size: 14px;
      }

      .form-group {
        margin-bottom: 20px;
      }

      .form-label {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
        font-size: 14px;
      }

      .form-input {
        width: 100%;
        padding: 11px 12px;
        border: 1px solid var(--border);
        border-radius: 6px;
        outline: none;
        font-size: 14px;
      }

      .form-input:focus {
        border-color: var(--primary);
      }

      .captcha {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
        padding: 12px;
        border: 1px solid var(--border);
        border-radius: 6px;
        font-size: 14px;
      }

      .captcha input {
        width: 18px;
        height: 18px;
      }

      .submit-button {
        width: 100%;
        padding: 11px 16px;
        border: none;
        border-radius: 6px;
        background: var(--primary);
        color: white;
        cursor: pointer;
        font-size: 15px;
        font-weight: bold;
      }

      .submit-button:hover {
        background: var(--primary-dark);
      }

      .form-footer {
        margin-top: 20px;
        text-align: center;
        color: var(--muted);
        font-size: 13px;
      }
    </style>
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

    <style>
        :root {
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --text: #1f2937;
            --muted: #6b7280;
            --background: #f3f6fb;
            --surface: #ffffff;
            --border: #d1d5db;

            --font: "Geist", sans-serif;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: var(--font);
        }

        body {
            background: var(--background);
            color: var(--text);
            line-height: 1.5;
        }

        .container {
            margin: 0 auto;
            max-width: 1120px;
            padding: 48px 24px;
        }

        .register-wrapper {
            min-height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .register-card {
            width: 100%;
            max-width: 420px;
            padding: 32px;
            background: var(--surface);
            border: 1px solid #e5e7eb;
            border-radius: 12px;
        }

        .register-heading {
            margin-bottom: 8px;
            text-align: center;
            font-size: 28px;
        }

        .register-description {
            margin-bottom: 28px;
            color: var(--muted);
            text-align: center;
            font-size: 14px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
            font-size: 14px;
        }

        .form-input {
            width: 100%;
            padding: 11px 12px;
            border: 1px solid var(--border);
            border-radius: 6px;
            outline: none;
            font-size: 14px;
        }

        .form-input:focus {
            border-color: var(--primary);
        }

        .captcha {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
            padding: 12px;
            border: 1px solid var(--border);
            border-radius: 6px;
            font-size: 14px;
        }

        .captcha input {
            width: 18px;
            height: 18px;
        }

        .submit-button {
            width: 100%;
            padding: 11px 16px;
            border: none;
            border-radius: 6px;
            background: var(--primary);
            color: white;
            cursor: pointer;
            font-size: 15px;
            font-weight: bold;
        }

        .submit-button:hover {
            background: var(--primary-dark);
        }

        .form-footer {
            margin-top: 20px;
            text-align: center;
            color: var(--muted);
            font-size: 13px;
        }
    </style>
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Beranda - Perpustakaan Buku Desa</title>
    <style>
      :root {
        --primary: #2563eb;
        --primary-dark: #1d4ed8;
        --text: #111827;
        --muted: #6b7280;
        --page-bg: #eef2f9;
        --surface: #ffffff;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        background: var(--page-bg);
        color: var(--text);
        font-family: Arial, "Segoe UI", sans-serif;
        line-height: 1.5;
        padding: 48px 24px 64px;
      }

      a {
        color: inherit;
      }

      .wrap {
        max-width: 1120px;
        margin: 0 auto;
      }

      /* Nav */
      .nav-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
        margin-bottom: 44px;
      }

      .brand {
        font-weight: bold;
        font-size: 1.05rem;
        color: var(--text);
      }

      .nav-links {
        display: flex;
        gap: 24px;
        list-style: none;
        flex-wrap: wrap;
      }

      .nav-links a {
        text-decoration: none;
        color: var(--muted);
        font-size: 0.92rem;
      }

      .nav-links a:hover,
      .nav-links a.active {
        color: var(--primary-dark);
        font-weight: bold;
      }

      /* Hero */
      .hero {
        text-align: center;
        margin-bottom: 56px;
      }

      .hero h1 {
        font-size: clamp(2.1rem, 5vw, 3.1rem);
        color: var(--text);
        margin-bottom: 14px;
      }

      .hero p {
        color: var(--muted);
        font-size: 1.05rem;
        max-width: 560px;
        margin: 0 auto 28px;
      }

      .hero-actions {
        display: flex;
        gap: 14px;
        justify-content: center;
        flex-wrap: wrap;
      }

      .btn-solid {
        display: inline-block;
        background: var(--primary);
        color: #ffffff;
        font-weight: bold;
        font-size: 0.95rem;
        padding: 14px 26px;
        border-radius: 9px;
        text-decoration: none;
        transition: background 0.2s ease;
      }

      .btn-solid:hover {
        background: var(--primary-dark);
      }

      .btn-outline {
        display: inline-block;
        background: #ffffff;
        color: var(--primary-dark);
        border: 1.5px solid var(--primary);
        font-weight: bold;
        font-size: 0.95rem;
        padding: 14px 26px;
        border-radius: 9px;
        text-decoration: none;
        transition: background 0.2s ease;
      }

      .btn-outline:hover {
        background: var(--page-bg);
      }

      section {
        margin-bottom: 56px;
      }

      .section-title {
        margin-bottom: 24px;
      }

      .section-title h2 {
        font-size: 1.65rem;
        color: var(--text);
        margin-bottom: 6px;
      }

      .section-title p {
        color: var(--muted);
        font-size: 0.95rem;
      }

      /* Book grid - mirrors Katalog.png card style */
      .book-grid {
        display: grid;
        gap: 24px;
        grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      }

      .book-card {
        background: var(--surface);
        border-radius: 16px;
        box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition:
          box-shadow 0.2s ease,
          transform 0.2s ease;
      }

      .book-card:hover {
        box-shadow: 0 12px 28px rgba(15, 23, 42, 0.14);
        transform: translateY(-4px);
      }

      .book-cover {
        aspect-ratio: 496 / 720;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: var(--page-bg);
      }

      .book-cover img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .book-cover.placeholder {
        color: var(--muted);
        font-size: 0.85rem;
        text-align: center;
        padding: 22px 28px;
      }

      .book-info {
        padding: 20px;
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      .book-title {
        font-size: 1.05rem;
        font-weight: 700;
        color: var(--text);
        margin-bottom: 4px;
      }

      .book-author {
        color: var(--muted);
        font-size: 0.88rem;
        margin-bottom: 18px;
      }

      .book-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;
      }

      .book-price {
        color: var(--primary);
        font-weight: bold;
        font-size: 1rem;
      }

      .detail-btn {
        background: var(--primary);
        color: #ffffff;
        font-size: 0.85rem;
        font-weight: 600;
        padding: 9px 14px;
        border-radius: 8px;
        text-decoration: none;
        transition: background 0.2s ease;
      }

      .detail-btn:hover {
        background: var(--primary-dark);
      }

      /* About panel - mirrors Detail.png's page-card layout */
      .crumb {
        color: var(--muted);
        font-size: 0.95rem;
        margin-bottom: 16px;
      }

      .info-panel {
        background: var(--surface);
        border-radius: 22px;
        box-shadow: 0 10px 30px rgba(15, 23, 42, 0.07);
        padding: 44px;
        display: grid;
        grid-template-columns: 0.85fr 1.15fr;
        gap: 44px;
        align-items: center;
      }

      .info-panel .art {
        background: var(--page-bg);
        border-radius: 16px;
        min-height: 260px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .info-panel .art svg {
        width: 62%;
        height: auto;
      }

      .info-panel .copy h2 {
        font-size: 1.55rem;
        margin-bottom: 14px;
        color: var(--text);
      }

      .info-panel .copy p {
        color: var(--muted);
        margin-bottom: 22px;
      }

      .info-panel .copy .hero-actions {
        justify-content: flex-start;
        margin-bottom: 0;
      }

      .detail-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 22px;
        margin-top: 26px;
        padding-top: 22px;
        border-top: 1px solid var(--page-bg);
      }

      .detail-grid .label {
        display: block;
        color: var(--muted);
        font-size: 0.85rem;
        margin-bottom: 4px;
      }

      .detail-grid .value {
        display: block;
        font-weight: 700;
        color: var(--text);
        font-size: 0.98rem;
      }

      .detail-grid .value.accent {
        color: var(--primary);
      }

      footer {
        text-align: center;
        color: var(--muted);
        font-size: 0.85rem;
        padding-top: 26px;
        border-top: 1px solid #e2e7f0;
      }

      .footer-links {
        display: flex;
        justify-content: center;
        gap: 22px;
        flex-wrap: wrap;
        margin-bottom: 10px;
      }

      .footer-links a {
        text-decoration: none;
        color: var(--muted);
        font-size: 0.88rem;
      }

      .footer-links a:hover {
        color: var(--primary-dark);
      }

      @media (max-width: 760px) {
        .info-panel {
          grid-template-columns: 1fr;
          padding: 30px;
        }
        .info-panel .art {
          min-height: 200px;
        }
        .detail-grid {
          grid-template-columns: 1fr 1fr;
        }
      }
    </style>
  </head>
  <body>
    <div class="wrap">
      <nav class="nav-row">
        <span class="brand">Perpustakaan Desa</span>
        <ul class="nav-links">
          <li><a href="beranda.html" class="active">Beranda</a></li>
          <li><a href="produk.html">Katalog Buku</a></li>
          <li><a href="#tentang">Tentang</a></li>
          <li><a href="#kontak">Kontak</a></li>
        </ul>
      </nav>

      <section class="hero">
        <h1>Perpustakaan Desa</h1>
        <p>
          Ruang baca dan belajar bersama milik warga — gratis untuk seluruh
          warga desa, dari anak-anak hingga lansia.
        </p>
        <div class="hero-actions">
          <a href="produk.html" class="btn-solid">Jelajahi Katalog Buku</a>
          <a href="#kontak" class="btn-outline">Jadi Anggota</a>
        </div>
      </section>

      <section id="unggulan">
        <div class="section-title">
          <h2>Buku pilihan bulan ini</h2>
          <p>Rekomendasi pustakawan, tersedia untuk dipinjam mulai hari ini.</p>
        </div>
        <div class="book-grid">
          <article class="book-card">
            <div class="book-cover">
              <img
                src="https://static-sc.cloudapp.web.id/content/image/coverteks/coverkurikulum21/Informatika_BS_KLS_XII_Cover.png"
                alt="Sampul buku Informatika Untuk SMA Kelas XII"
              />
            </div>
            <div class="book-info">
              <h3 class="book-title">Informatika Untuk SMA Kelas XII</h3>
              <p class="book-author">Oleh: Pri Ario Damar, Naning Widayati</p>
              <div class="book-footer">
                <span class="book-price">Rp45.000</span>
                <a class="detail-btn" href="detail_produk.html">Lihat Detail</a>
              </div>
            </div>
          </article>
          <article class="book-card">
            <div class="book-cover">
              <img
                src="https://static-sc.cloudapp.web.id/content/image/coverteks/coverkurikulum21/Informatika_BS_KLS_XII_Cover.png"
                alt="Sampul buku Informatika Untuk SMA Kelas XII"
              />
            </div>
            <div class="book-info">
              <h3 class="book-title">Informatika Untuk SMA Kelas XII</h3>
              <p class="book-author">Oleh: Pri Ario Damar, Naning Widayati</p>
              <div class="book-footer">
                <span class="book-price">Rp45.000</span>
                <a class="detail-btn" href="detail_produk.html">Lihat Detail</a>
              </div>
            </div>
          </article>
          <article class="book-card">
            <div class="book-cover">
              <img
                src="https://static-sc.cloudapp.web.id/content/image/coverteks/coverkurikulum21/Informatika_BS_KLS_XII_Cover.png"
                alt="Sampul buku Informatika Untuk SMA Kelas XII"
              />
            </div>
            <div class="book-info">
              <h3 class="book-title">Informatika Untuk SMA Kelas XII</h3>
              <p class="book-author">Oleh: Pri Ario Damar, Naning Widayati</p>
              <div class="book-footer">
                <span class="book-price">Rp45.000</span>
                <a class="detail-btn" href="detail_produk.html">Lihat Detail</a>
              </div>
            </div>
          </article>
          <article class="book-card">
            <div class="book-cover">
              <img
                src="https://static-sc.cloudapp.web.id/content/image/coverteks/coverkurikulum21/Informatika_BS_KLS_XII_Cover.png"
                alt="Sampul buku Informatika Untuk SMA Kelas XII"
              />
            </div>
            <div class="book-info">
              <h3 class="book-title">Informatika Untuk SMA Kelas XII</h3>
              <p class="book-author">Oleh: Pri Ario Damar, Naning Widayati</p>
              <div class="book-footer">
                <span class="book-price">Rp45.000</span>
                <a class="detail-btn" href="detail_produk.html">Lihat Detail</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="tentang">
        <div class="crumb">Tentang kami</div>
        <div class="info-panel">
          <div class="art">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <rect
                x="30"
                y="70"
                width="140"
                height="100"
                rx="6"
                fill="#ffffff"
                stroke="#2563eb"
                stroke-width="3"
              />
              <polygon points="24,70 176,70 100,26" fill="#2563eb" />
              <rect x="88" y="126" width="24" height="44" fill="#1d4ed8" />
              <rect
                x="46"
                y="90"
                width="34"
                height="26"
                fill="#eef2f9"
                stroke="#2563eb"
                stroke-width="2"
              />
              <rect x="52" y="96" width="22" height="5" fill="#2563eb" />
              <rect x="52" y="105" width="22" height="5" fill="#60a5fa" />
              <rect
                x="120"
                y="90"
                width="34"
                height="26"
                fill="#eef2f9"
                stroke="#2563eb"
                stroke-width="2"
              />
              <rect x="126" y="96" width="22" height="5" fill="#60a5fa" />
              <rect x="126" y="105" width="22" height="5" fill="#2563eb" />
            </svg>
          </div>
          <div class="copy">
            <h2>Tentang Perpustakaan Desa</h2>
            <p>
              Perpustakaan Desa adalah ruang belajar bersama milik warga. Semua
              koleksi buku dan kegiatan literasi kami terbuka gratis untuk siapa
              saja yang tinggal di desa, tanpa biaya keanggotaan.
            </p>
            <div class="hero-actions">
              <a href="produk.html" class="btn-solid">Jelajahi Koleksi</a>
              <a href="#kontak" class="btn-outline">Hubungi Kami</a>
            </div>
            <div class="detail-grid">
              <div class="item">
                <span class="label">Jam Buka</span>
                <span class="value">Senin – Jumat, 08.00–16.00</span>
              </div>
              <div class="item">
                <span class="label">Akhir Pekan</span>
                <span class="value">Sabtu 09.00–13.00, Minggu Tutup</span>
              </div>
              <div class="item">
                <span class="label">Lokasi</span>
                <span class="value">Balai Desa Sukamaju, Kab. Bandung</span>
              </div>
              <div class="item">
                <span class="label">Kontak</span>
                <span class="value accent">(022) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="kontak">
        <div class="footer-links">
          <a href="beranda.html">Beranda</a>
          <a href="produk.html">Katalog Buku</a>
          <a href="#tentang">Tentang</a>
        </div>
        <p>© 2026 Perpustakaan Desa. Seluruh hak cipta dilindungi.</p>
      </footer>
    </div>
  </body>
</html>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail Produk - Informatika Untuk SMA Kelas XII</title>
    <style>
        :root {
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --text: #1f2937;
            --muted: #6b7280;
            --background: #f3f6fb;
            --surface: #ffffff;
            --border: #e5e7eb;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background: var(--background);
            color: var(--text);
            font-family: Arial, sans-serif;
            line-height: 1.5;
        }

        .container {
            margin: 0 auto;
            max-width: 1120px;
            padding: clamp(24px, 6vw, 64px) 24px;
        }

        .page-heading {
            margin-bottom: 24px;
        }

        .page-heading p {
            color: var(--muted);
            font-size: 0.95rem;
        }

        .product-card {
            align-items: stretch;
            background: var(--surface);
            border-radius: 18px;
            box-shadow: 0 12px 32px rgba(15, 23, 42, 0.1);
            display: grid;
            gap: clamp(28px, 5vw, 56px);
            grid-template-columns: minmax(220px, 34%) 1fr;
            overflow: hidden;
            padding: clamp(24px, 5vw, 48px);
        }

        .book-cover {
            align-items: center;
            background: #eff6ff;
            border-radius: 12px;
            display: flex;
            justify-content: center;
            min-height: 360px;
            overflow: hidden;
            padding: 16px;
        }

        .book-cover img {
            border-radius: 4px;
            box-shadow: 0 10px 20px rgba(15, 23, 42, 0.18);
            display: block;
            height: auto;
            max-height: 520px;
            max-width: 100%;
            object-fit: contain;
        }

        .book-info {
            display: flex;
            flex-direction: column;
            min-width: 0;
        }

        .book-title {
            color: #111827;
            font-size: clamp(1.8rem, 4vw, 2.75rem);
            line-height: 1.15;
            margin-bottom: 20px;
        }

        .book-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 28px;
        }

        .action-button {
            align-items: center;
            border: 1px solid transparent;
            border-radius: 8px;
            cursor: pointer;
            display: inline-flex;
            font-size: 0.95rem;
            font-weight: 700;
            justify-content: center;
            min-width: 112px;
            padding: 11px 18px;
            text-decoration: none;
            transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }

        .download-button {
            background: var(--primary);
            color: #ffffff;
        }

        .download-button:hover {
            background: var(--primary-dark);
        }

        .read-button {
            background: #ffffff;
            border-color: var(--primary);
            color: var(--primary-dark);
        }

        .read-button:hover {
            background: #eff6ff;
        }

        .book-description {
            border-top: 1px solid var(--border);
            color: var(--muted);
            padding-top: 24px;
        }

        .book-description h2,
        .book-details h2 {
            color: var(--text);
            font-size: 1.1rem;
            margin-bottom: 8px;
        }

        .book-description p {
            max-width: 70ch;
        }

        .book-details {
            border-top: 1px solid var(--border);
            display: grid;
            gap: 12px 24px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            margin-top: 24px;
            padding-top: 24px;
        }

        .book-details h2 {
            grid-column: 1 / -1;
        }

        .detail-item {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .detail-label {
            color: var(--muted);
            font-size: 0.85rem;
        }

        .detail-value {
            color: var(--text);
            font-weight: 700;
        }

        .detail-price {
            color: var(--primary-dark);
        }

        @media (max-width: 700px) {
            .container {
                padding-left: 16px;
                padding-right: 16px;
            }

            .product-card {
                gap: 24px;
                grid-template-columns: 1fr;
                padding: 20px;
            }

            .book-cover {
                min-height: 0;
                padding: 20px;
            }

            .book-cover img {
                max-height: 420px;
            }

            .book-actions {
                margin-bottom: 24px;
            }
        }

        @media (max-width: 420px) {
            .book-actions {
                flex-direction: column;
            }

            .action-button {
                width: 100%;
            }

            .book-details {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <main class="container">
        <header class="page-heading">
            <p>Detail buku</p>
        </header>

        <article class="product-card">
            <div class="book-cover">
                <img
                    src="https://static-sc.cloudapp.web.id/content/image/coverteks/coverkurikulum21/Informatika_BS_KLS_XII_Cover.png"
                    alt="Sampul buku Informatika Untuk SMA Kelas XII"
                >
            </div>

            <div class="book-info">
                <h1 class="book-title">Informatika Untuk SMA Kelas XII</h1>

                <div class="book-actions" aria-label="Aksi buku">
                    <a  href="https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Informatika_BS_KLS_XII.pdf" download="Informatika_BS_KLS_XII.pdf">
                        <button class="action-button download-button" type="button">Unduh</button></a>
                    <a class="action-button read-button" href="https://static-sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Informatika_BS_KLS_XII.pdf">Baca</a>
                </div>

                <section class="book-description" aria-labelledby="sinopsis-title">
                    <h2 id="sinopsis-title">Sinopsis</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quidem ipsam natus voluptatibus dolor voluptatem culpa facilis, quam ullam, nesciunt, labore ratione expedita hic. Quae ut error neque labore inventore saepe debitis blanditiis quia quibusdam doloribus provident et voluptate, dolorem deserunt enim a! Tempora ipsam reprehenderit doloremque eos. Similique, libero!
                    </p>
                </section>

                <section class="book-details" aria-labelledby="detail-title">
                    <h2 id="detail-title">Detail Buku</h2>
                    <div class="detail-item">
                        <span class="detail-label">Penulis</span>
                        <span class="detail-value">Pri Ario Damar, Naning Widayati</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Penerbit</span>
                        <span class="detail-value">Kementerian Pendidikan</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Tahun Terbit</span>
                        <span class="detail-value">2022</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Harga</span>
                        <span class="detail-value detail-price">Rp45.000</span>
                    </div>
                </section>
            </div>
        </article>
    </main>
</body>
</html>

<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Form Peminjaman - Perpustakaan Buku Desa</title>
<style>
    :root {
        --primary: #2563eb;
        --primary-dark: #1d4ed8;
        --primary-light: #60a5fa;
        --text: #111827;
        --muted: #6b7280;
        --surface: #ffffff;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
        min-height: 100vh;
        font-family: Arial, "Segoe UI", sans-serif;
        color: var(--text);
        line-height: 1.5;
        background: #eef2f9;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 48px 20px;
        position: relative;
        overflow-x: hidden;
    }

    .wrap {
        width: 100%;
        max-width: 560px;
        position: relative;
        z-index: 1;
    }

    .brand-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 26px;
        color: var(--text);
    }

    .brand-row .brand {
        font-weight: bold;
        font-size: 1.05rem;
        letter-spacing: 0.2px;
    }

    .card {
        background: linear-gradient(160deg, #1d4ed8 0%, #2563eb 55%, #3b82f6 100%);
        border-radius: 22px;
        box-shadow: 0 20px 45px rgba(15, 23, 42, 0.28);
        overflow: hidden;
    }

    .card-header {
        color: #ffffff;
        padding: 32px 36px 22px;
    }

    .card-header .eyebrow {
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 6px;
    }

    .card-header h1 {
        font-size: 1.55rem;
        margin-bottom: 8px;
    }

    .card-header p {
        color: rgba(255, 255, 255, 0.88);
        font-size: 0.92rem;
        max-width: 42ch;
    }

    form { padding: 12px 36px 34px; }

    .field { margin-bottom: 20px; }

    .field label {
        display: block;
        font-size: 0.9rem;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 6px;
    }

    .field .hint {
        font-weight: normal;
        color: rgba(255, 255, 255, 0.72);
        font-size: 0.82rem;
    }

    .field input,
    .field select,
    .field textarea {
        width: 100%;
        font: inherit;
        font-size: 0.95rem;
        color: var(--text);
        padding: 12px 14px;
        border: 1.5px solid transparent;
        border-radius: 10px;
        background: #ffffff;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .field input::placeholder,
    .field textarea::placeholder { color: #9aa5b4; }

    .field input:focus,
    .field select:focus,
    .field textarea:focus {
        outline: none;
        border-color: #ffffff;
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.35);
    }

    .field textarea { resize: vertical; min-height: 84px; }

    .row-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
    }

    .btn-submit {
        width: 100%;
        background: #1e3a8a;
        color: #ffffff;
        font-weight: bold;
        font-size: 0.98rem;
        padding: 14px 20px;
        border: 1.5px solid rgba(255, 255, 255, 0.4);
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 10px 22px rgba(15, 23, 42, 0.25);
        transition: background 0.2s ease, transform 0.1s ease;
        margin-top: 4px;
    }

    .btn-submit:hover { background: #16306e; }
    .btn-submit:active { transform: translateY(1px); }

    .note {
        text-align: center;
        color: rgba(255, 255, 255, 0.75);
        font-size: 0.82rem;
        margin-top: 16px;
    }

    .confirm {
        display: none;
        padding: 30px 36px 34px;
        text-align: center;
        color: #ffffff;
    }

    .confirm .check {
        width: 56px;
        height: 56px;
        margin: 0 auto 16px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.18);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
    }

    .confirm h2 { font-size: 1.2rem; margin-bottom: 8px; }
    .confirm p { color: rgba(255, 255, 255, 0.8); font-size: 0.92rem; margin-bottom: 20px; }

    .confirm .btn-secondary {
        background: #1e3a8a;
        color: #ffffff;
        border: 1.5px solid rgba(255, 255, 255, 0.4);
        font-weight: bold;
        font-size: 0.92rem;
        padding: 11px 20px;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 10px 22px rgba(15, 23, 42, 0.25);
    }

    .confirm .btn-secondary:hover { background: #16306e; }

    @media (max-width: 480px) {
        .card-header, form, .confirm { padding-left: 24px; padding-right: 24px; }
        .row-2 { grid-template-columns: 1fr; }
    }
</style>
</head>
<body>
    <div class="wrap">
        <div class="brand-row">
            <span class="brand">Perpustakaan Desa</span>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="eyebrow">Peminjaman Buku</div>
                <h1>Form Peminjaman</h1>
                <p>Isi data di bawah ini untuk mengajukan peminjaman buku. Petugas akan menghubungi Anda untuk konfirmasi pengambilan.</p>
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

                <button type="submit" class="btn-submit">Ajukan Peminjaman</button>
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
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Katalog Buku - Perpustakaan Buku Desa</title>
    <style>
      :root {
        --primary: #2563eb;
        --primary-dark: #1d4ed8;
        --text: #1f2937;
        --muted: #6b7280;
        --background: #f3f6fb;
        --surface: #ffffff;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        background: var(--background);
        color: var(--text);
        font-family: Arial, sans-serif;
        line-height: 1.5;
      }

      .container {
        margin: 0 auto;
        max-width: 1120px;
        padding: 48px 24px;
      }

      .catalog-header {
        margin-bottom: 32px;
        text-align: center;
      }

      .catalog-header h1 {
        color: #111827;
        font-size: clamp(2rem, 5vw, 3rem);
        margin-bottom: 8px;
      }

      .catalog-header p {
        color: var(--muted);
        font-size: 1rem;
      }

      .book-grid {
        display: grid;
        gap: 24px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      }

      .book-card {
        max-width: 250px;
        background: var(--surface);
        border-radius: 14px;
        box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
        display: flex;
        flex-direction: column;
        transition:
          box-shadow 0.2s ease,
          transform 0.2s ease;
      }

      .book-card:hover {
        box-shadow: 0 12px 28px rgba(15, 23, 42, 0.14);
        transform: translateY(-4px);
      }

      .book-cover {
        aspect-ratio: 496 / 720;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: var(--page-bg);
      }

      .book-cover img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .book-cover.placeholder {
        color: var(--muted);
        font-size: 0.85rem;
        text-align: center;
        padding: 22px 28px;
      }

      .book-info {
        padding: 20px;
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      .book-title {
        font-size: 1.05rem;
        font-weight: 700;
        color: var(--text);
        margin-bottom: 4px;
      }

      .book-author {
        color: var(--muted);
        font-size: 0.88rem;
        margin-bottom: 18px;
      }

      .book-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;
      }

      .book-price {
        color: var(--primary);
        font-weight: bold;
        font-size: 1rem;
      }

      .detail-button {
        background: var(--primary);
        border-radius: 7px;
        color: #ffffff;
        font-size: 0.85rem;
        padding: 8px 12px;
        text-decoration: none;
        transition: background 0.2s ease;
      }

      .detail-button:hover {
        background: var(--primary-dark);
      }
    </style>
  </head>
  <body>
    <main class="container">
      <header class="catalog-header">
        <h1>Katalog Buku</h1>
        <p>Temukan buku pilihan untuk menambah wawasan dan inspirasi.</p>
      </header>

      <section class="book-grid" aria-label="Daftar buku">
        <article class="book-card">
          <div class="book-cover">
            <img
              src="https://static-sc.cloudapp.web.id/content/image/coverteks/coverkurikulum21/Informatika_BS_KLS_XII_Cover.png"
              alt="Logo"
            />
          </div>
          <div class="book-info">
            <h2 class="book-title">Informatika Untuk SMA Kelas XII</h2>
            <p class="book-author">Oleh: Pri Ario Damar, Naning Widayati</p>
            <div class="book-footer">
              <span class="book-price">Rp45.000</span>
              <a class="detail-button" href="detail_produk.html"
                >Lihat Detail</a
              >
            </div>
          </div>
        </article>
      </section>
    </main>
  </body>
</html>

<script>
  function loadBooks() {
    const bookGrid = document.querySelector(".book-grid");
    const cardTemplate = document.querySelector(".book-card");

    for (let i = 1; i < 12; i++) {
      const card = cardTemplate.cloneNode(true);
      bookGrid.appendChild(card);
    }
  }

  window.addEventListener("load", loadBooks);
</script>



```