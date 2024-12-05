import React, { useState, useEffect } from "react";
import TemplateList from "./components/TemplateList";
import TemplateEditor from "./components/TemplateEditor";
import logo from "./assets/images.jpg";
import EditAndNewModal from "./components/EditAndNewModal";
import ViewTemplateModal from "./components/ViewTemplateModal";

function App() {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  useEffect(() => {
    const savedTemplates = JSON.parse(localStorage.getItem("templates")) || [];
    setTemplates(savedTemplates);
  }, []);

  const saveTemplates = (templates) => {
    setTemplates(templates);
    localStorage.setItem("templates", JSON.stringify(templates));
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  const handleTemplateSave = (updatedTemplate) => {
    const updatedTemplates = templates.map((t) =>
      t.id === updatedTemplate.id ? updatedTemplate : t
    );
    saveTemplates(updatedTemplates);
  };

  // Modal related code here

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setSelectedTemplate(null);
    setIsModalOpen(true);
  };
  const handleEditModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleNewTemplate = ({ title, subjective, pexam, adding }) => {
    if (adding) {
      const newTemplate = {
        id: Date.now(),
        title,
        subjective,
        pexam,
      };
      saveTemplates([newTemplate, ...templates]);
      setSelectedTemplate(newTemplate);
    } else {
      handleEditTemplate({ id: selectedTemplate.id, title, subjective, pexam });
    }
    setIsModalOpen(false);
  };

  const handleEditTemplate = ({ id, title, subjective, pexam }) => {
    const template = templates.find((t) => t.id === id);
    template.title = title;
    template.subjective = subjective;
    template.pexam = pexam;
    saveTemplates([...templates]);
    setSelectedTemplate(template);
  };

  return (
    <div className="min-h-screen px-4 text-black flex flex-col items-center">
      <img src={logo} className="w-52 object-contain" />
      <div className="w-full">
        <TemplateList
          templates={templates}
          onNewTemplate={handleModalOpen}
          onSelectTemplate={handleTemplateSelect}
          selectedTemplate={selectedTemplate}
          handleEditModalOpen={handleEditModalOpen}
        />
        <EditAndNewModal
          selectedTemplate={selectedTemplate}
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSubmit={handleNewTemplate}
        />
      </div>
    </div>
  );
}

export default App;
