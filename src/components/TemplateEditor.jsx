import React, { useEffect, useState } from "react";

const TemplateEditor = ({ template, onSave }) => {
  const [title, setTitle] = useState(null);
  const [subjective, setSubjective] = useState(null);
  const [pexam, setPexam] = useState(null);

  useEffect(() => { 
    setTitle(template.title);
    setSubjective(template.subjective);
    setPexam(template.pexam);
  }
  , [template]);

  const handleSave = () => {
    onSave({ ...template, title, subjective, pexam });
  };

  return (
    <div className="bg-white shadow rounded p-4 col-span-2">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded h-40"
        ></textarea>
      </div>
      <button
        onClick={handleSave}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
};

export default TemplateEditor;
