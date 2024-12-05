# Template Management App

This React-based application allows users to create, edit, view, and manage templates with fields such as title, subjective content, and physical examination notes. The app features a dynamic UI with modals for editing and viewing templates, ensuring a smooth user experience.

---

## Features

- **Add New Templates**: Create new templates with title, subjective, and physical examination fields.
- **Edit Templates**: Modify existing templates in a modal with live updates.
- **View Templates**: View templates in a modal with copy functionality for individual sections.
- **Copy Content**: Easily copy template content to the clipboard with a single click.
- **Responsive Design**: The app is fully responsive and adapts to different screen sizes.
- **Persistent Storage**: Templates are saved to `localStorage`, ensuring data is preserved across sessions.

---

## Installation

Follow these steps to set up and run the application locally:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Project Structure

```
src/
├── assets/
│   └── images.jpg          # Logo used in the app
├── components/
│   ├── EditAndNewModal.jsx # Modal for creating and editing templates
│   ├── TemplateEditor.jsx  # Template editor component
│   ├── TemplateList.jsx    # List view of templates
│   ├── ViewTemplateModal.jsx # Modal for viewing template details
├── App.jsx                 # Main application component
├── main.jsx                # Application entry point
├── index.css               # Global styles (with Tailwind CSS)
```

---

## Usage Guide

### Adding a New Template

1. Click the **"New Note +"** button.
2. Fill out the **Title**, **Subjective**, and **Physical Examination** fields in the modal.
3. Click **Save** to add the new template to the list.

### Viewing a Template

1. Click on a template in the list.
2. A modal will appear displaying the template details.
3. Use the **copy** icon to copy specific sections of the template to the clipboard.

### Editing a Template

1. Open a template by clicking it in the list.
2. Click the **edit** icon in the modal.
3. Modify the fields in the modal and click **Save** to update the template.

### Data Persistence

- Templates are saved to the browser's `localStorage` automatically.
- Data remains intact even after refreshing the page or reopening the app.

---

## Technologies Used

- **React**: Frontend library for building the UI.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Icons**: Icon library for modern UI components.

---

## Components Overview

### `App.jsx`

- Manages global state for templates.
- Handles template addition, editing, and selection.
- Integrates `TemplateList`, `EditAndNewModal`, and `ViewTemplateModal`.

### `TemplateList.jsx`

- Displays a grid of templates.
- Allows template selection for viewing and editing.

### `ViewTemplateModal.jsx`

- Displays template details in a modal.
- Includes copy functionality for sections.

### `EditAndNewModal.jsx`

- Handles template creation and editing in a modal form.

### `TemplateEditor.jsx`

- A standalone editor component (used if inline editing is needed).

---

## Additional Features

- **Copy Functionality**:

  - Copy any section of a template using the **copy** icon.
  - Alerts the user when the content is successfully copied.

- **Dynamic Styling**:
  - Highlights the selected template in the list.
  - Modals are styled for clarity and responsiveness.

---

## Future Improvements

- **Search Functionality**:

  - Add a search bar to filter templates by title or content.

- **Export/Import Templates**:

  - Allow users to export templates as `.json` and import them later.

- **Advanced Formatting**:
  - Support for rich text editing in the template fields.

---

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
