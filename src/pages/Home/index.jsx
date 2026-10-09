import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroJpg from '../../assets/hero.jpg';

function Home() {
  const navigate = useNavigate();

  // Data Buku Best Seller
  const books = [
    { id: 1, title: 'Atomic Habits', price: 'Rp 108.000' },
    { id: 2, title: 'Psychology of Money', price: 'Rp 85.000' },
    { id: 3, title: 'Filosofi Teras', price: 'Rp 98.000' },
  ];

  // Data Tim Kami
  const members = [
    { id: 1, name: 'Alifa Fazilatun Nisa', role: 'Frontend Developer', img: 'https://i.pravatar.cc/150?img=5' },
    { id: 2, name: 'Rizky', role: 'UI/UX Designer', img: 'https://i.pravatar.cc/150?img=11' },
    { id: 3, name: 'Maulana', role: 'Backend Developer', img: 'https://i.pravatar.cc/150?img=12' },
  ];

  return (
    <div>
      {/* 1. HERO SECTION (SUDAH DIRAPIKAN POSISI DAN PROPORSI GAMBARNYA) */}
      <section className="container my-5">
        <div className="card shadow-lg border-0 rounded-3 overflow-hidden">
          <div className="row g-0 align-items-center">
            {/* Kolom Kiri: Teks & Tombol (7 dari 12 bagian) */}
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
                  onClick={() => alert('Buku berhasil dibeli!')}
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
            </div>

            {/* Kolom Kanan: Gambar Sejajar (5 dari 12 bagian) */}
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

      {/* 2. BEST SELLER SECTION (DAPAT DI-SCROLL KE BAWAH) */}
      <section className="album py-5 bg-light">
        <div className="container">
          <div className="py-4 text-center container">
            <div className="row py-lg-3">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light fw-bold">Best Seller</h1>
                <p className="lead text-body-secondary">
                  Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                </p>
                <p>
                  <button className="btn btn-primary my-2 me-2">Views</button>
                  <button className="btn btn-secondary my-2">Other Book</button>
                </p>
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map((book) => (
              <div key={book.id} className="col">
                <div className="card shadow-sm border-0">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em" textAnchor="middle">
                      Thumbnail
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text fw-bold mb-1">{book.title}</p>
                    <p className="card-text text-secondary small">
                      This is a wider card with supporting text below as a natural lead-in to additional content.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary fw-bold text-success">{book.price}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TIM KAMI SECTION */}
      <section className="container my-5">
        <h2 className="text-center mb-4 fw-bold">Tim Kami</h2>
        <div className="row g-4">
          {members.map((m) => (
            <div className="col-md-4" key={m.id}>
              <div className="card h-100 shadow-sm border-0 text-center p-3">
                <img
                  src={m.img}
                  className="card-img-top rounded-circle mx-auto mt-2"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  alt={m.name}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{m.name}</h5>
                  <p className="card-text text-muted">{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HUBUNGI KAMI SECTION */}
      <section className="bg-light py-5">
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 className="text-center mb-4 fw-bold">Hubungi Kami</h2>
          <div className="card shadow-sm p-4 border-0">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label className="form-label fw-bold">Nama Lengkap</label>
                <input type="text" className="form-control" placeholder="Masukkan nama Anda" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input type="email" className="form-control" placeholder="nama@email.com" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Pesan</label>
                <textarea className="form-control" rows="4" placeholder="Tuliskan pesan Anda..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 fw-bold">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;