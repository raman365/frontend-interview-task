import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalDialogProps {
  isOpen: boolean; // isOpen prop to determines whether the modal is open or not
  onClose: () => void; // onClose prop to close the modal
  title: string; // title prop to set the modal title
  children: React.ReactNode; // children prop to render the modal content
}

const ModalDialog: React.FC<ModalDialogProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (!isOpen) return;

    // Close the modal when the Escape key is pressed
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    // Add event listener when the modal is open
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Render the modal dialog using ReactDOM.createPortal
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-gray-100 via-teal-50 to-gray-200 rounded-lg shadow-lg p-6 w-96 relative animate-fade-in-down transform transition-all duration-300 scale-100 hover:scale-105"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-teal-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-teal-800 text-2xl leading-none"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default ModalDialog;
