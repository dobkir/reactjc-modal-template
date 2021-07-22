import "./modal.css";

const Modal = ({ modalActive, modalClose, children }) => {

  return (
    <div className={modalActive ? "modal active" : "modal"} onClick={modalClose}>
      <div className={modalActive ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
        <button className="modal__close" type="button" onClick={modalClose}>
          <img src="close_icon.svg" alt="icon: Close modal" />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal;