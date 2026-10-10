// src/pages/Home/index.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroJpg from '../../assets/hero.jpg';
import booksData from '../../Utils/Books';

function Home() {
  const navigate = useNavigate();

  // State untuk nilai tambah Hooks (Latihan/Nilai Tambah)
  const [totalCart, setTotalCart] = useState(0);

  const handleAddToCart = () => {
    setTotalCart(totalCart + 1);
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="container my-5">
        <div className="card shadow-lg border-0 rounded-3 overflow-hidden">
          <div className="row g-0 align-items-center">
            <div className="col-lg-7 p-4 p-md-5">
              <h1 className="display-5 fw-bold lh-1 text-body-emphasis mb-3">
                Atomic Habits: Perubahan Kecil yang memberikan hasil luar biasa.
              </h1>
              <p className="lead text-secondary mb-4">
                Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                  onClick={handleAddToCart}
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                  onClick={() => navigate('/books')}
                >
                  Detail
                </button>
              </div>
              <div className="mt-3">
                <span className="badge bg-success fs-6">
                  Keranjang Belanja: {totalCart} Buku
                </span>
              </div>
            </div>

            <div className="col-lg-5 p-0 overflow-hidden">
              <img
                className="img-fluid"
                src={heroJpg}
                alt="Atomic Habits"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '400px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* BEST SELLER SECTION (Daftar Buku Menggunakan MAP) */}
      <section className="album py-5 bg-light">
        <div className="container">
          <div className="py-3 text-center container">
            <h2 className="fw-bold">Koleksi Buku Best Seller</h2>
            <p className="lead text-body-secondary">
              Pilihan buku terbaik untuk meningkatkan pengetahuan dan keterampilan Anda.
            </p>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {/* Menggunakan metode map untuk menampilkan data dari src/utils/books.js */}
            {booksData.slice(0, 6).map((book) => (
              <div key={book.id} className="col">
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={book.image}
                    className="card-img-top"
                    alt={book.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title fw-bold">{book.title}</h5>
                      <p className="card-text text-muted small">Penulis: {book.author} ({book.year})</p>
                      <p className="card-text text-secondary small">{book.description}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <button 
                        type="button" 
                        className="btn btn-sm btn-outline-primary"
                        onClick={handleAddToCart}
                      >
                        + Tambah
                      </button>
                      <small className="text-muted">ID: #{book.id}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;