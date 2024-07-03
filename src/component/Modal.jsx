/* eslint-disable react/prop-types */

/* 1. line 12 is a solution to prevent dialog from closing when we clicked on children / newPost.
   2. OnClose need to declare on div because it will close the dialog when we click outside the dialog. */

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
