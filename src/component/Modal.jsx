/* eslint-disable react/prop-types */

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50" onClick={onClose}>
      <dialog
        open
        className="modal-content bg-red-900 h-72 w-72 mx-auto mb-10 py-4 rounded-lg" 
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
