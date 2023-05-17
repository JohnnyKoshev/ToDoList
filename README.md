# Angular Task Management Project

This is a sample Angular project for managing tasks. It allows users to add new tasks, mark tasks as completed, edit task text, and delete tasks. The project consists of two components: `TasksListComponent` and `ToolsMenuComponent`.

## Features

- Add new tasks: Users can enter a task in the input field and click the "Add New Task" button to add it to the task list.
- Mark tasks as completed: Users can click on the checkbox next to a task to mark it as completed. Completed tasks are displayed with a line-through style.
- Edit task text: Users can right-click on a task to open a tools menu that provides an "Edit" option. Clicking on the "Edit" button allows users to modify the task text.
- Delete tasks: Users can also right-click on a task and select the "Delete" option from the tools menu to remove the task from the list.

## Components

### TasksListComponent

The `TasksListComponent` is responsible for displaying the list of tasks and handling user interactions related to tasks. It contains the main task management functionality, including adding tasks, marking tasks as completed, and showing the tools menu.

### ToolsMenuComponent

The `ToolsMenuComponent` is a reusable component used within the `TasksListComponent`. It displays a tools menu with options to edit and delete tasks. It communicates with the `TasksListService` to perform the corresponding actions on tasks.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd angular-task-management`
3. Install dependencies: `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Usage

1. Start the development server: `ng serve`
2. Open your browser and navigate to `http://localhost:4200` to access the application.

## Dependencies

The project has the following dependencies:

- Angular: The core framework for building the application.
- RxJS: A library for handling asynchronous operations and data streams.
- TypeScript: The programming language used in the project.

## Credits

This project was created as a sample application for demonstration purposes.

## License

The project is released under the MIT License. Feel free to use and modify the code according to your needs.



