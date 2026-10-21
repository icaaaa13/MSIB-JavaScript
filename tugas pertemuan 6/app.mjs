import readline from "readline";
import { index, store, destroy } from "./controller.mjs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const showMenu = async () => {
  console.log("\n=========================");
  console.log("Pilih perintah:");
  console.log("1. Lihat Data");
  console.log("2. Tambah Data");
  console.log("3. Hapus Data");
  console.log("4. Keluar");
  console.log("=========================");

  const pilihan = await askQuestion("Pilih perintah: ");

  switch (pilihan.trim()) {
    case "1":
      index();
      showMenu();
      break;

    case "2":
      console.log("\nMasukkan data:");
      const nama = await askQuestion("Nama: ");
      const umur = await askQuestion("Umur: ");
      const alamat = await askQuestion("Alamat: ");
      const email = await askQuestion("Email: ");

      store({ nama, umur: Number(umur), alamat, email });
      showMenu();
      break;

    case "3":
      index();
      const idHapus = await askQuestion("\nMasukkan nomor/index data yang ingin dihapus (mulai dari 0): ");
      destroy(Number(idHapus));
      showMenu();
      break;

    case "4":
      console.log("Terima kasih!");
      rl.close();
      break;

    default:
      console.log("Pilihan tidak valid, coba lagi.");
      showMenu();
      break;
  }
};

showMenu();