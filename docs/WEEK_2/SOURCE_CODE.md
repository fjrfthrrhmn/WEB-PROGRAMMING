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

    <link rel="stylesheet" href="regist.css"/>

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


<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Katalog Buku - Perpustakaan Buku Desa</title>
    <link rel="stylesheet" href="../styles/produk.css">
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

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail Produk - Informatika Untuk SMA Kelas XII</title>
    <link rel="stylesheet" href="../styles/detail_produk.css">
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


```