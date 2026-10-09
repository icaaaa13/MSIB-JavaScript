import React from 'react';

function Team() {
  const members = [
    { id: 1, name: 'Alifa Fazilatun Nisa', role: 'Frontend Developer', img: 'https://i.pravatar.cc/150?img=5' },
    { id: 2, name: 'Rizky', role: 'UI/UX Designer', img: 'https://i.pravatar.cc/150?img=11' },
    { id: 3, name: 'Maulana', role: 'Backend Developer', img: 'https://i.pravatar.cc/150?img=12' },
  ];

  return (
    <div className="container my-5">
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
    </div>
  );
}

export default Team;