import users from "./data.mjs";

const index = () => {
  console.log("=== DAFTAR USER ===");
  users.map((user, i) => {
    console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
  });
};

const store = (user) => {
  users.push(user);
  console.log(`\nSuccess: Data ${user.nama} berhasil ditambahkan!`);
};

const destroy = (indexHapus) => {
  if (indexHapus >= 0 && indexHapus < users.length) {
    const deletedUser = users.splice(indexHapus, 1);
    console.log(`\nSuccess: Data ${deletedUser[0].nama} berhasil dihapus!`);
  } else {
    console.log("\nError: Index tidak ditemukan!");
  }
};

export { index, store, destroy };