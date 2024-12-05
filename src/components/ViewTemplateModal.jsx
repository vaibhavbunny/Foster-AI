import React from "react";
import { FaCopy, FaEdit } from "react-icons/fa"; // Import icons

const ViewTemplateModal = ({
  isOpen,
  onClose,
  template,
  handleEditModalOpen,
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Content copied to clipboard!");
    });
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md max-h-screen overflow-y-auto">
        <div className="text-2xl text-[#417d91] font-bold flex justify-between items-center mb-1">
          <p className="">{template.title}</p>
          <div className="flex gap-2">
            <FaEdit
              className="cursor-pointer text-gray-500 hover:text-gray-800"
              title="Edit"
              onClick={handleEditModalOpen}
            />
            <FaCopy
              className="cursor-pointer text-gray-500 hover:text-gray-800"
              title="Copy"
              onClick={() => handleCopy(template.title)}
            />
          </div>
        </div>
        <div className="border-[1px] border-black mb-2"></div>

        <div className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <p className="text-xl text-[#374364] font-bold">Subjective</p>
            <FaCopy
              className="cursor-pointer text-gray-500 hover:text-gray-800"
              title="Copy"
              onClick={() => handleCopy(template.subjective)}
            />
          </div>

          <p className="whitespace-pre-wrap break-words">
            {template.subjective}
          </p>
        </div>

        <div className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <p className="text-xl text-[#374364] font-bold">
              Physical Examination
            </p>
            <FaCopy
              className="cursor-pointer text-gray-500 hover:text-gray-800"
              title="Copy"
              onClick={() => handleCopy(template.pexam)}
            />
          </div>
          <p className="whitespace-pre-wrap break-words">{template.pexam}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewTemplateModal;
