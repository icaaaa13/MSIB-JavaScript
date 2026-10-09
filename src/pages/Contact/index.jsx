import React from 'react';

function Contact() {
  return (
    <div className="container my-5" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4 fw-bold">Hubungi Kami</h2>
      <div className="card shadow-sm p-4 border-0">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label className="form-label">Nama Lengkap</label>
            <input type="text" className="form-control" placeholder="Masukkan nama Anda" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="nama@email.com" />
          </div>
          <div className="mb-3">
            <label className="form-label">Pesan</label>
            <textarea className="form-control" rows="4" placeholder="Tuliskan pesan Anda..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;