import { useRef, useEffect } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock';
import { Modal } from './Modal';

export const ModalContainer = ({ modalActive, modalClose }) => {

  // Closing the Modal window with the Esc key.
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') modalClose();
    })

    return document.removeEventListener('keydown', modalClose())
  }, [])


  const modalRef = useRef();
  // Disabling scroll after opening a Modal window.
  useEffect(() => {
    const targetElement = modalRef.current;

    modalActive ? disableBodyScroll(targetElement) :
      enableBodyScroll(targetElement);

    return () => {
      clearAllBodyScrollLocks();
    }
  }, [modalActive])

  return (
    <Modal modalActive={modalActive} modalClose={modalClose} modalRef={modalRef}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum sit iste rerum ex sequi?</p>
    </Modal>
  )
};
