import React, { useEffect, useState } from "react";

const EditAndNewModal = ({ selectedTemplate, isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  const [title, setTitle] = useState(null);
  const [subjective, setSubjective] = useState(null);
  const [pexam, setPexam] = useState(null);

  useEffect(() => {
    if (selectedTemplate) {
      setTitle(selectedTemplate.title);
      setSubjective(selectedTemplate.subjective);
      setPexam(selectedTemplate.pexam);
    }
  }, []);

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md overflow-y-auto max-h-screen">
        <h2 className="text-xl font-bold mb-4">Create New Template</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const title = e.target.title.value;
            const subjective = e.target.subjective.value;
            const pexam = e.target.pexam.value;
            onSubmit({ title, subjective, pexam, selectedTemplate });
          }}
        >
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-2 border rounded"
              placeholder="Enter note title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Subjective</label>
            <textarea
              name="subjective"
              value={subjective}
              onChange={(e) => setSubjective(e.target.value)}
              required
              className="w-full p-2 border rounded h-32"
              placeholder="Enter note content"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Physical Examination
            </label>
            <textarea
              name="pexam"
              value={pexam}
              onChange={(e) => setPexam(e.target.value)}
              required
              className="w-full p-2 border rounded h-32"
              placeholder="Enter note content"
            ></textarea>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAndNewModal;
