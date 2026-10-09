import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from '../../assets/hero.jpg';

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            Atomic Habits: Perubahan Kecil yang memberikan hasil luar biasa.
          </h1>
          <p className="lead">
            Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
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
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg rounded-3">
          <img
            className="img-fluid rounded-3"
            src={heroImg}
            alt="Atomic Habits"
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;