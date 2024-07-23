import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

// Define the types for props
interface TodoItemProps {
  todo: {
    id: number;
    text: string;
  };
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onEdit }) => {
  return (
    <div className="flex justify-between items-center p-4  bg-white/30 z-10 backdrop-filter backdrop-blur-sm shadow-lg rounded-lg mx-7 text-white">
      <span>{todo.text}</span>
      <div className="flex flex-row gap-5">
        <button onClick={() => onEdit(todo.id)}>
          <FaEdit className="text-blue-600 px-1 py-1 rounded w-7 h-7" />
        </button>
        <button onClick={() => onDelete(todo.id)}>
          <RiDeleteBin6Line className="text-red-600 px-1 py-1 rounded w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
