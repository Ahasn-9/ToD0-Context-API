import React, { useState } from 'react'
import { useTodo } from '../contexts/ToDoContext'

function TodoForm() {
    const [todo, setTodo] = useState('')
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo.trim()) return
        addTodo({
            id: Date.now(),
            todo: todo.trim(),
            completed: false
        })
        setTodo('')
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border-none rounded-l-lg px-3 outline-none duration-150 bg-[#22304a] text-white py-1.5 focus:bg-[#22304a] focus:ring-2 focus:ring-green-600"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 hover:bg-green-700 focus:bg-green-700 border-none">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

