import React from 'react'

const Modal = ({ message, onClose }: { message: string; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center justify-center gap-8 bg-white p-6 rounded-xl shadow-lg text-center w-96 h-52" >
        <h2 className="text-xl font-semibold mb-4 text-green-700">{message}</h2>
        <button
          className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal