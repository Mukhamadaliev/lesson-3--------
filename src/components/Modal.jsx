import React from 'react';

function Modal({ ochiq, yop, bolim }) {
  if (!ochiq) return null;

  return (
    <div style={uslub.modalOverlay}>
      <div style={uslub.modalWindow}>
        <h2>Modal Oyna</h2>
        <p>{bolim || "Bu yerda muhim ma'lumot bor."}</p>
        <button onClick={yop} style={uslub.button}>
          Yopish
        </button>
      </div>
    </div>
  );
}

const uslub = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalWindow: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '400px',
    textAlign: 'center',
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Modal;