import { useState } from 'react';
import './App.css';
import Modal from './Modal/Modal';

function App() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="app">
      <main>
        <button className="open-btn" onClick={() => setModalActive(true)}>Open modal window</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
      </main>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
      </Modal>
    </div>
  );
}

export default App;
