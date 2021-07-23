import "./modal.css";


export const Modal = ({ modalActive, modalClose, modalRef, children }) => {

  return (
    <div ref={modalRef} className={modalActive ? "modal active" : "modal"} onClick={modalClose}>
      <div className={modalActive ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
        <button className="modal__close" type="button" onClick={modalClose}>
          <img src="close_icon.svg" alt="icon: Close modal" />
        </button>
        {children}
      </div>
    </div>
  )
}
