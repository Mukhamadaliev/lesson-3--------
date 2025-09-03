import React, { useState } from 'react';

function Menyu() {
  const [menyuOchiq, setMenyuOchiq] = useState(false);

  return (
    <div style={uslub.menyu}>
      <button
        onClick={() => setMenyuOchiq(!menyuOchiq)}
        style={uslub.tugma}
      >
        Menyu {menyuOchiq ? '▼' : '►'}
      </button>

      {menyuOchiq && (
        <ul style={uslub.royxat}>
          <li style={uslub.element}>Bosh sahifa</li>
          <li style={uslub.element}>Profil</li>
          <li style={uslub.element}>Sozlamalar</li>
          <li style={uslub.element}>Chiqish</li>
        </ul>
      )}
    </div>
  );
}

const uslub = {
  menyu: {
    position: 'relative',
    display: 'inline-block',
    margin: '20px',
  },
  tugma: {
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  royxat: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '6px',
    width: '150px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  element: {
    padding: '12px 16px',
    cursor: 'pointer',
    borderBottom: '1px solid #eee',
  },
};

export default Menyu;