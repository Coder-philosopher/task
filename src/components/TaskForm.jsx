import React, { useState } from 'react';
import { useTodo } from '../contexts/managercontext';

function TaskForm() {
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("Important");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (!text || !title) return;

        addTodo({ title, text, priority, completed: false });
        setText("");
        setTitle("");
        setPriority("Important");
    };

    return (
        <form onSubmit={add} className="flex flex-col gap-2">
            <h2 className="text-[32px] font-bold text-center bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text animate-pulse mb-4">
                Add a Task
            </h2>
            <input
                type="text"
                placeholder="Task Title"
                className="w-full border text-[22px] border-black/10 rounded-l-lg px-3 py-1.5 outline-none bg-white/20 text-white"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Task Description..."
                className="w-full border text-[20px] border-black/10 rounded-l-lg px-3 py-1.5 outline-none bg-white/20 text-white"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <select
                className="w-full border border-black/10 rounded-lg px-3 py-1.5 bg-white/20 text-white"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option className='bg-green-500' value="Very Important">Very Important</option>
                <option className='bg-orange-500' value="Important">Important</option>
                <option  className='bg-red-500' value="Not Important">Not Important</option>
            </select>
            <button type="submit" className="rounded-lg px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold">
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;
