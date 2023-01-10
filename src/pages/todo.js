import clsx from "clsx";
import React, { useEffect, useState } from "react";

const TodoPage = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Tidur", completed: false },
    { id: 2, title: "Mangan", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {
        setTodos(json.slice(0, 10));
        console.log(json);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    // <div className="w-full h-screen flex flex-col justify-center items-center">
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold text-blue-600 mb-20">todos</h1>
      <input
        className=" mb-10 w-2/3 shadow-md rounded-full px-6 py-2 border-2 border-slate-100 focus:outline-blue-500 "
        placeholder="Add todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setTodos([
              ...todos,
              {
                id: todos.length + 1,
                text: newTodo,
                completed: false,
              },
            ]);
            setNewTodo("");
          }
        }}
      />
      <ul className="self-start px-40 w-full">
        {todos.map((todo, idx) => (
          <div
            key={todo.title}
            className="flex justify-between items-center py-2 border-b border-gray-200 w-full"
          >
            <span className="flex gap-x-4">
              <input
                type="checkbox"
                checked={todo.completed}
                className="cursor-pointer"
                onChange={() => {
                  setTodos(
                    todos.map((todo) => {
                      if (todo.id === idx + 1) {
                        return { ...todo, completed: !todo.completed };
                      } else {
                        return todo;
                      }
                    })
                  );
                }}
              />
              <li
                key={todo.id}
                className={clsx(
                  todo.completed && "line-through italic text-gray-400"
                )}
              >
                {todo.title}
              </li>
            </span>
            <button
              onClick={(e) =>
                setTodos(todos.filter((todo) => todo.id !== idx + 1))
              }
              className="bg-gray-200 rounded-full h-10 w-10 p-1 text-[11px] font-semibold hover:bg-gray-400"
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
    // </div>
  );
};

export default TodoPage;
