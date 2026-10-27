// Program kondisi: mengecek kelayakan warga meminjam buku.

function cekKelayakan(nama, bukuDipinjam, anggotaAktif) {
    const batasPinjaman = 3;
    const sisaKuota = batasPinjaman - bukuDipinjam;

    if (anggotaAktif && bukuDipinjam >= 0 && bukuDipinjam < batasPinjaman) {
        return `Halo, ${nama}!\nAnda boleh meminjam buku.\nSisa kuota pinjaman: ${sisaKuota} buku.`;
    }

    if (!anggotaAktif) {
        return `Maaf, ${nama}.\nAkun Anda belum aktif. Silakan mengaktifkan keanggotaan terlebih dahulu.`;
    }

    return `Maaf, ${nama}.\nAnda sudah mencapai batas maksimal ${batasPinjaman} buku.`;
}

const nama = prompt("Masukkan nama warga:");
const bukuDipinjam = Number(prompt("Berapa buku yang sedang dipinjam?"));
const jawabanKeanggotaan = prompt("Apakah keanggotaan Anda aktif? (ya/tidak)");
const anggotaAktif = jawabanKeanggotaan !== null
    && jawabanKeanggotaan.toLowerCase() === "ya";

if (nama === null || jawabanKeanggotaan === null
    || nama.trim() === "" || Number.isNaN(bukuDipinjam) || bukuDipinjam < 0) {
    alert("Input tidak valid. Program selesai.");
} else {
    const hasil = cekKelayakan(nama.trim(), bukuDipinjam, anggotaAktif);
    alert(hasil);
    console.log(hasil);
}
