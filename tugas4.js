
// 1. CLASS PELANGGAN

// Memiliki properti: nama, nomorTelepon, dan kendaraanDisewa
class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }

    // Method untuk menampilkan informasi singkat pelanggan
    getDetailPelanggan() {
        return `Nama: ${this.nama} | No. Telp: ${this.nomorTelepon} | Menyewa: ${this.kendaraanDisewa}`;
    }
}


// 2 & 3. SISTEM MANAJEMEN TRANSPORTASI

class SistemManajemenTransportasi {
    constructor() {
        // Array untuk menyimpan daftar pelanggan yang menyewa
        this.daftarPelanggan = [];
    }

    //  Metode untuk mencatat transaksi penyewaan kendaraan
    catatTransaksi(nama, nomorTelepon, kendaraanDisewa) {
        const pelangganBaru = new Pelanggan(nama, nomorTelepon, kendaraanDisewa);
        this.daftarPelanggan.push(pelangganBaru);
        console.log(`[BERHASIL] Transaksi penyewaan atas nama ${nama} telah dicatat.`);
    }

    //  Metode untuk menampilkan daftar pelanggan yang sedang menyewa
    tampilkanDaftarPelanggan() {
        console.log("\n==================================================");
        console.log("   DAFTAR PELANGGAN YANG SEDANG MENYEWA KENDARAAN  ");
        console.log("==================================================");

        if (this.daftarPelanggan.length === 0) {
            console.log("Saat ini belum ada pelanggan yang menyewa kendaraan.");
            return;
        }

        // Iterasi menggunakan forEach untuk menampilkan seluruh pelanggan
        this.daftarPelanggan.forEach((pelanggan, index) => {
            console.log(`${index + 1}. ${pelanggan.getDetailPelanggan()}`);
        });
        console.log("==================================================\n");
    }
}


// UJI COBA PRAKTIKUM / PENGGUNAAN SISTEM

const sistem = new SistemManajemenTransportasi();

//  Mencatat beberapa transaksi penyewaan oleh pelanggan
sistem.catatTransaksi("Abil Alqo Hira", "081234567890", "Toyota Avanza");
sistem.catatTransaksi("Intan Nurhidayah", "085678901234", "Honda Vario");
sistem.catatTransaksi("Adriano Ibragus Antoni", "089012345678", "Mitsubishi Pajero");

//  Menampilkan daftar seluruh pelanggan yang sedang menyewa
sistem.tampilkanDaftarPelanggan();