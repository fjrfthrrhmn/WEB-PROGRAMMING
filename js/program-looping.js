// Program looping: menghitung total dan rata-rata durasi peminjaman buku.

function hitungRataRata(totalHari, jumlahBuku) {
    return totalHari / jumlahBuku;
}

const jumlahBuku = Number(prompt("Berapa buku yang ingin direkap?"));

if (!Number.isInteger(jumlahBuku) || jumlahBuku <= 0) {
    alert("Jumlah buku tidak valid. Program selesai.");
} else {
    let totalHari = 0;
    let daftarBuku = "";

    for (let nomorBuku = 1; nomorBuku <= jumlahBuku; nomorBuku++) {
        const judul = prompt(`Masukkan judul buku ke-${nomorBuku}:`);
        const durasiHari = Number(prompt(`Berapa hari buku "${judul}" dipinjam?`));

        if (judul === null || Number.isNaN(durasiHari) || durasiHari < 0) {
            alert("Data buku tidak valid. Program selesai.");
            break;
        }

        totalHari += durasiHari;
        daftarBuku += `${nomorBuku}. ${judul} - ${durasiHari} hari\n`;

        if (nomorBuku === jumlahBuku) {
            const rataRata = hitungRataRata(totalHari, jumlahBuku);
            const hasil = `${daftarBuku}\nTotal durasi: ${totalHari} hari\nRata-rata durasi: ${rataRata.toFixed(1)} hari`;

            alert(hasil);
            console.log(hasil);
        }
    }
}
