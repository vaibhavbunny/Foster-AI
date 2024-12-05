import React, { useState } from "react";
import ViewTemplateModal from "./ViewTemplateModal";

const TemplateList = ({
  templates,
  onNewTemplate,
  onSelectTemplate,
  selectedTemplate,
  handleEditModalOpen,
}) => {
  const formatDateTime = (id) => {
    const date = new Date(id);
    return date.toLocaleString();
  };

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const handleViewModalOpen = () => {
    setIsViewModalOpen(true);
  };

  const handleViewModalClose = () => {
    setIsViewModalOpen(false);
  };

  const handleSelectTemplate = (template) => {
    onSelectTemplate(template);
    handleViewModalOpen();
  };

  return (
    <div className="shadow rounded p-4 flex flex-col items-center">
      <button
        className="bg-blue-500 shadow-2xl text-white px-10 py-2 rounded mb-4"
        onClick={onNewTemplate}
      >
        New Note +
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`p-3 rounded-lg cursor-pointer col-span-1 border-[1px] border-black flex flex-col ${
              template.id === selectedTemplate?.id ? "bg-[#dcf5f5]" : ""
            }`}
            onClick={() => handleSelectTemplate(template)}
          >
            <p className="text-lg lg:text-xl font-medium text-[#374462]">
              {template.title}
            </p>
            <p className="text-xs lg:text-sm font-medium text-[#374462] pt-4">
              {formatDateTime(template.id)}
            </p>
          </div>
        ))}
      </div>
      <ViewTemplateModal
        isOpen={isViewModalOpen}
        onClose={handleViewModalClose}
        template={selectedTemplate}
        handleEditModalOpen={handleEditModalOpen}
      />
    </div>
  );
};

export default TemplateList;
