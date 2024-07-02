/* eslint-disable react/prop-types */


function Modal({children, onClose}) {

  return (
    <>
        <div onClick={onClose} />
        <dialog open>
            {children}
        </dialog>
    </>
  )
}

export default Modal