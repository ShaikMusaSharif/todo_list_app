import React, { useState } from "react";
import TodoItem from "./TodoItem";
import ShinyButton from "./components/magicui/shiny-button";
import { CoolMode } from "./components/magicui/cool-mode";
import StarsCanvas from "./StarBackground";

// Define the type for a todo item
interface Todo {
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo.trim() }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setNewTodo(todoToEdit.text);
      deleteTodo(id);
    }
  };

  const removeAllTodos = () => {
    setTodos([]);
  };

  return (
    <div className="relative z-10 p-4 flex flex-col items-center w-full h-full min-h-screen">
      <StarsCanvas />
      <div className="relative z-20 w-full max-w-6xl p-4 m-4 rounded bg-white/30 backdrop-filter backdrop-blur-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 flex justify-center text-white">
          Todo List
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="border border-gray-500 px-3 py-2 rounded-lg mr-2 w-full md:w-3/4 lg:w-1/2"
            placeholder="Add a new task"
          />
          <div className="flex flex-col md:flex-row items-center md:ml-2 mt-2 md:mt-0">
            <CoolMode>
              <button
                onClick={addTodo}
                className="mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
              >
                <ShinyButton text="Add Todo" />
              </button>
            </CoolMode>
            <CoolMode>
              <button onClick={removeAllTodos} className="w-full md:w-auto">
                <ShinyButton text="Remove All" />
              </button>
            </CoolMode>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-6xl mt-4 relative z-20">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
