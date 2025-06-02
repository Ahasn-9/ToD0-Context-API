import React from "react";
import { useState } from "react";
import { useTodo } from "../contexts/ToDoContext";

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        if (todoMsg.trim() === '') return
        updateTodo(todo.id, todoMsg.trim())
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex items-center border-none rounded-2xl px-5 py-4 gap-x-4 shadow-xl bg-white/60 backdrop-blur-md transition-all duration-200 ${
                todo.completed ? "bg-gradient-to-r from-green-200 to-green-100 opacity-80" : "hover:bg-white/80"
            } animate-fade-in-up`}
        >
            <input
                type="checkbox"
                className="cursor-pointer accent-pink-500 w-5 h-5 transition-all duration-200"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border-none outline-none w-full bg-transparent rounded-lg text-lg font-medium transition-all duration-200 ${
                    isTodoEditable ? "px-2 bg-white/80" : "bg-transparent"
                } ${todo.completed ? "line-through text-gray-400" : "text-gray-900"}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-10 h-10 rounded-xl text-lg border-none justify-center items-center bg-gradient-to-tr from-violet-400 to-pink-400 text-white shadow-md hover:scale-110 transition-all duration-200 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-10 h-10 rounded-xl text-lg border-none justify-center items-center bg-gradient-to-tr from-pink-400 to-violet-400 text-white shadow-md hover:scale-110 transition-all duration-200 ml-2"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
