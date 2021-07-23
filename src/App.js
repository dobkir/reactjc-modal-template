import { useState } from 'react';
import './App.css';
import { ModalContainer } from './Modal/ModalContainer';

function App() {

  const [modalActive, setModalActive] = useState(false);

  const modalOpen = () => {
    return setModalActive(true);
  };

  const modalClose = () => {
    return setModalActive(false);
  };

  return (
    <div className="app">
      <main>
        <button className="open__btn" type="button" onClick={modalOpen}>Open modal window</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
      </main>
      <ModalContainer modalActive={modalActive} modalOpen={modalOpen} modalClose={modalClose} />
    </div>
  );
}

export default App;
