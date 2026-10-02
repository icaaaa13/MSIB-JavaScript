let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length + 1;

    produkToko.push({
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    });
}

function hapusProduk(id) {
    let index = produkToko.findIndex(produk => produk.id === id);

    if (index !== -1) {
        produkToko.splice(index, 1);
    }
}

function tampilkanProduk() {
    console.log("=== DAFTAR PRODUK ===");

    produkToko.forEach(produk => {
        console.log(
            `ID: ${produk.id}, Nama: ${produk.nama}, Harga: ${produk.harga}, Stok: ${produk.stok}`
        );
    });
}

// Menampilkan produk awal
tampilkanProduk();

// Menambahkan produk
tambahProduk("Headset", 250000, 8);

// Menampilkan setelah ditambahkan
tampilkanProduk();

// Menghapus produk ID 2
hapusProduk(2);

// Menampilkan setelah dihapus
tampilkanProduk();