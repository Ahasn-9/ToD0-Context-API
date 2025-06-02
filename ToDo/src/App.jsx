import './App.css'
import { ToDoProvider } from './contexts/Index'
import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const addTodo = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const updateTodo = (id, todoText) => {
    setTodos((prev) => 
      prev.map((t) => (t.id === id ? { ...t, todo: todoText } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
      <div className="min-h-screen flex flex-col justify-between">
        <header className="py-10 text-center">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-lg tracking-tight mb-2 animate-fade-in">✨ToDo App ✨</h1>
          <p className="text-lg text-white/80 font-medium animate-fade-in-slow">Organize your day with style!</p>
        </header>
        <main className="flex-1 flex items-start justify-center">
          <div className="w-full max-w-2xl mx-auto bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl px-8 py-8 text-gray-900 border border-white/30 animate-fade-in-up">
            <div className="mb-8">
              <TodoForm />
            </div>
            <div className="flex flex-col gap-4">
              {todos.length === 0 ? (
                <div className="text-center text-white/70 text-lg font-medium py-8">No todos yet. Add your first one!</div>
              ) : (
                todos.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} />
                ))
              )}
            </div>
          </div>
        </main>
        <footer className="py-6 text-center text-white/70 text-sm font-medium animate-fade-in-slow">
          Made with <span className="text-pink-400">♥</span> by YourName
        </footer>
      </div>
    </ToDoProvider>
  )
}

export default App
