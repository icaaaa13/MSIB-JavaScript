// src/pages/Books/index.jsx

import React, { useState } from 'react';
import booksData from '../../Utils/Books';

function Books() {
  const [likes, setLikes] = useState({});

  const handleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Daftar Lengkap Buku</h1>
        <p className="text-muted">Temukan berbagai judul buku pilihan di Katalog Bookstore kami.</p>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {/* Menggunakan metode map untuk menampilkan seluruh data buku */}
        {booksData.map((book) => (
          <div key={book.id} className="col">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={book.image}
                className="card-img-top"
                alt={book.title}
                style={{ height: '220px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-bold mb-1">{book.title}</h5>
                  <h6 className="card-subtitle mb-2 text-primary small">
                    {book.author} • {book.year}
                  </h6>
                  <p className="card-text text-secondary small">{book.description}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleLike(book.id)}
                  >
                    ❤️ Suka ({likes[book.id] || 0})
                  </button>
                  <span className="badge bg-secondary">Buku #{book.id}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;