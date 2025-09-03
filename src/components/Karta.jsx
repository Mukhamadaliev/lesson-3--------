import React from 'react';

function Karta({ sarlavha, matn, rasm, tugmaMatni = "Batafsil" }) {
  return (
    <div style={uslub.karta}>
      <img src="https://www.shkolazhizni.ru/img/content/i243/243489_or.jpg" alt={sarlavha} style={uslub.rasm} />
      <div style={uslub.tarkib}>
        <h3>{sarlavha}</h3>
       
        <p>{matn}</p>
        <button style={uslub.tugma}>{tugmaMatni}</button>
      </div>
    </div>
  );
}

const uslub = {
  karta: {
    width: '300px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    margin: '15px',
  },
  rasm: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  tarkib: {
    padding: '15px',
  },
  tugma: {
    padding: '8px 12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Karta;