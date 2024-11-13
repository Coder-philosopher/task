
# Task Manager Application

A responsive and interactive Task Manager application built with React and Tailwind CSS. This application allows users to add, search, prioritize, and sort tasks with a visually appealing, dark-themed gradient UI. Tasks are saved in local storage, ensuring data persistence across sessions.

## Features

- Add Tasks: Users can add tasks with a title, description, and priority level.
- Search Tasks: Quickly search tasks by title or description.
- Priority Setting: Assign priority levels to tasks (High, Medium, Low).
- Task Sorting: Sort tasks by title, priority, or completion status.
- Dark Themed Gradient UI: Aesthetic dark gradient background with animations for a modern look.
- Task Persistence: Tasks are saved in local storage, maintaining state between sessions.

## Project Structure



├── public                 # Public assets
├── src                    # Main source folder
│   ├── assets             # Static assets like images
│   ├── components         # React components
│   │   ├── TaskForm.jsx   # Task form for adding new tasks
│   │   ├── TaskItem.jsx   # Individual task item component
│   ├── contexts           # Context for task state management
│   │   ├── ManagerContext.js
│   ├── App.jsx            # Main application component
│   └── index.jsx          # Entry point
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation


## Installation

1. Clone the repository:
   bash
   git clone https://github.com/your-username/task-manager-app.git
   
2. Navigate into the project directory:
   bash
   cd task-manager-app
   
3. Install dependencies:
   bash
   npm install
   
4. Start the development server:
   bash
   npm run dev
   

The app should now be running on `http://localhost:3000`.

## Usage

1. Add a Task: Enter a title, description, and select a priority level. Click "Add Task" to save it.
2. Search Tasks: Use the search bar to find specific tasks by title or description.
3. Toggle Task Completion: Click the checkbox to mark a task as complete or incomplete.
4. Edit/Delete a Task: Click "Edit" to modify a task's details or "Delete" to remove it.
5. Sort Tasks: Use the dropdown to sort tasks by title, priority, or status (completed/incomplete).

## Project Components

### `App.jsx`

- Contains the main layout, search bar, and sorting functionality.
- Manages task state and local storage to persist tasks between sessions.

### `TaskForm.jsx`

- A form component to add new tasks.
- Includes inputs for task title, description, priority level, and an animated "Add Task" button.

### `TaskItem.jsx`

- Represents individual task items.
- Displays task title, description, priority, and status.
- Provides edit and delete options.
- Toggle completion status with a checkbox.

### `ManagerContext.js`

- Implements the `TodoContext` for global state management.
- Exposes functions to add, update, delete, and toggle tasks for use in components.

## Code Explanation

### Task Sorting Logic

The sorting logic is based on a helper function in `App.jsx` that takes `sortOption` as a parameter:
- `sortTasks(a, b, sortOption)`:
  - Title: Sorts tasks alphabetically.
  - Priority: Sorts by priority levels (High, Medium, Low).
  - Completed: Orders by task completion status.

### Local Storage Management

Tasks are saved and retrieved from local storage, so tasks persist between page reloads. The `useEffect` hooks in `App.jsx` ensure tasks are saved to local storage whenever they change.

### Dark-Themed UI

The dark-themed gradient background and subtle animations provide a modern look:
- `bg-gradient-to-br from-gray-900 to-gray-700`: Gradient background styling in Tailwind CSS.
- Animated components for better user experience (e.g., "Add Task" button and titles).

## Technologies Used

- React: Component-based frontend library.
- Tailwind CSS: Utility-first CSS framework for styling.
- Local Storage: For persistent data storage in the browser.

## Future Improvements

- Task Categories: Add the ability to categorize tasks.
- Due Dates: Allow users to set due dates and filter tasks accordingly.
- User Authentication: Enable multi-user support with authentication.

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## Contact

For any questions, feel free to reach out:

- GitHub: [Coder-philosopher](https://github.com/Coder-philosopher)
- Email: tentaciouspersona@gmail.com
