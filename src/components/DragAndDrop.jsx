import React from "react";

function DragAndDrop({ onDrop }) {
  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (
      file.type === "application/pdf" ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const reader = new FileReader();
      reader.onload = () => onDrop(reader.result);
      reader.readAsText(file);
    }
  };

  return (
    <div
      className="w-full h-20 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-lg mb-4"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleFileDrop}
    >
      <p className="text-gray-500">Drag and Drop File Here</p>
    </div>
  );
}

export default DragAndDrop;
