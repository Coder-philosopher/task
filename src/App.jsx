import { useState, useEffect } from 'react';
import { TodoProvider } from './contexts';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';

function App() {
    const [todos, setTodos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("title");

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        if (storedTodos && storedTodos.length > 0) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    };

    const deleteTodo = (id) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const filteredTodos = todos.filter(todo =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sorting logic function
const sortTasks = (a, b, sortOption) => {
  switch (sortOption) {
      case "title":
          return a.title.localeCompare(b.title);
      case "priority":
          const priorityLevels = { High: 1, Medium: 2, Low: 3 };
          return priorityLevels[a.priority] - priorityLevels[b.priority];
      case "completed":
          return a.completed - b.completed;
      default:
          return 0;
  }
};


    const sortedTodos = [...filteredTodos].sort((a, b) => sortTasks(a, b, sortOption));

    return (
        <TodoProvider value={{ todos, addTodo ,deleteTodo}}>
            <div className="bg-gradient-to-br from-blue-900 via-pink-500 to-black min-h-screen py-8">
                <div className="max-w-2xl mx-auto p-4 bg-gradient-to-br from-black via-pink-500 to-blue-900 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold mb-6 text-center text-white">
                        Task Manager
                    </h1>
                    <TaskForm />
                    <input
                        type="text"
                        placeholder="Search tasks..."
                        className="border rounded-lg w-full px-3 py-1 my-4 bg-gray-700 text-white"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="border rounded-lg w-full px-3 py-1 mb-4 bg-gray-700 text-white"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="title">Search by Title or Description</option>
                        <option value="priority">Search by Priority</option>
                        <option value="completed">Search by Status</option>
                    </select>
                    <div className="flex flex-col gap-4">
                        {sortedTodos.map(todo => (
                            <TaskItem key={todo.id} todo={todo} />
                        ))}
                    </div>
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;
