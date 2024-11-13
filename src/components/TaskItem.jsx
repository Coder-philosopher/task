import React, { useState, useEffect } from 'react';
import { useTodo } from '../contexts/ManagerContext';

function TaskItem({ todo }) {
    const { updateTodo, deleteTodo } = useTodo();
    const [isEditable, setIsEditable] = useState(false);
    const [text, setText] = useState(todo.text);
    const [completed, setCompleted] = useState(todo.completed);

    useEffect(() => {
        setCompleted(todo.completed);
    }, [todo.completed]);

    const toggleCompleted = () => {
        setCompleted(!completed);
        updateTodo(todo.id, { ...todo, completed: !completed });
    };

    const saveTodo = () => {
        updateTodo(todo.id, { ...todo, text });
        setIsEditable(false);
    };

    return (
        <div className={`border rounded-lg p-4 shadow-md flex items-center gap-3 ${completed ? "bg-green-900" : "bg-gray-700"}`}>
            <input
                type="checkbox"
                checked={completed}
                onChange={toggleCompleted}
                className="cursor-pointer"
            />
            <div className="flex flex-col flex-grow">
                <h2 className="font-bold text-lg text-white">{todo.title}</h2>
                <p className="text-sm text-gray-400">Priority: {todo.priority}</p>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    readOnly={!isEditable}
                    className={`w-full mt-1 ${isEditable ? "border-b border-white" : "bg-transparent text-white"}`}
                />
            </div>
            <button
                className="text-xs text-gray-300"
                onClick={() => setIsEditable((prev) => !prev)}
            >
                {isEditable ? "Save" : "Edit"}
            </button>
            <button
                className="text-xs text-red-500"
                onClick={() => deleteTodo(todo.id)}
            >
                Delete
            </button>
        </div>
    );
}

export default TaskItem;
