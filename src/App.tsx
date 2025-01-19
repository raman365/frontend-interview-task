import React, { useState } from 'react';
import ModalDialog from './ModalDialog';

const App: React.FC = () => {
  // State to manage the modal open state
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-teal-700 to-gray-300">
      <h1 className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
        This is a Modal Dialog
      </h1>
      <button
        onClick={() => setModalOpen(true)} // Open the modal when the button is clicked
        className="px-6 py-3 bg-white text-teal-600 font-bold rounded-lg shadow-lg hover:bg-teal-100 transition duration-300 ease-in-out transform hover:scale-110"
      >
        Open Modal
      </button>

      <ModalDialog
        isOpen={isModalOpen} // Pass the state to the isOpen prop
        onClose={() => setModalOpen(false)} // Close the modal when the onClose function is called
        title="Modal Dialog"
      >
        <p className="text-gray-700 text-center">
          This is a modal dialog. Click outside
          or press <span className="font-bold text-teal-600">Escape</span> to close it.
        </p>
      </ModalDialog>
    </div>
  );
};

export default App;
