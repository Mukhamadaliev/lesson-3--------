// App.js
import React, { useState } from 'react';
import Modal from './components/Modal';
import Menyu from './components/Menyu';
import Karta from './components/Karta';

function App() {
  const [modalOchiq, setModalOchiq] = useState(false);

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>React Komponentlari</h1>

      <Menyu />

      <Karta
        sarlavha="Yangilik"
        matn="Yangi dastur chiqdi. Batafsil o'qing!"
        rasm="https://via.placeholder.com/300x180"
        tugmaMatni="O'qish"
      />

      <button onClick={() => setModalOchiq(true)}>
        Modal Ochish
      </button>

      <Modal
        ochiq={modalOchiq}
        yop={() => setModalOchiq(false)}
        bolim="Bu yerda muhim xabar!"
      />
    </div>
  );
}

export default App;