import { useState, useRef, useEffect } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock';

import './App.css';
import Modal from './Modal/Modal';

function App() {
  const [modalActive, setModalActive] = useState(false);

  const targetRef = useRef();

  useEffect(() => {
    const targetElement = targetRef.current;

    modalActive ? disableBodyScroll(targetElement) :
      enableBodyScroll(targetElement);

    return () => {
      clearAllBodyScrollLocks();
    }
  }, [modalActive])

  const modalOpen = () => {
    return setModalActive(true);
  };

  const modalClose = () => {
    return setModalActive(false);
  };

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') modalClose();
    })

    return document.removeEventListener('keydown', modalClose())
  }, [])

  return (
    <div ref={targetRef} className="app">
      <main>
        <button className="open__btn" onClick={modalOpen}>Open modal window</button>
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
      <Modal modalActive={modalActive} modalClose={modalClose}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
      </Modal>
    </div>
  );
}

export default App;
