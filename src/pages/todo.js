import axios from "axios";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then((res) => res.json())
  //       .then((json) => {
  //         setTodos(json.slice(0, 10));
  //         console.log(json);
  //       })
  //       .catch((err) => console.error(err));
  //   }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((json) => {
        setTodos(json.data.slice(0, 10));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center mt-20">
      <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-300 to-blue-600 mb-20">
        todos
      </h1>
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
                title: newTodo,
                completed: false,
              },
            ]);
            setNewTodo("");
          }
        }}
      />
      <ul className="self-start px-40 w-full">
        {todos.map((item, idx) => (
          <div
            key={item.title}
            className="flex justify-between items-center py-2 border-b border-gray-200 w-full"
          >
            <span className="flex gap-x-4">
              <input
                type="checkbox"
                checked={item.completed}
                className="cursor-pointer"
                onChange={() => {
                  setTodos(
                    todos.map((todo) => {
                      if (item.title === todo.title) {
                        return { ...todo, completed: !todo.completed };
                      } else {
                        return todo;
                      }
                    })
                  );
                }}
              />
              <li
                key={item.id}
                className={clsx(
                  item.completed && "line-through italic text-gray-400"
                )}
              >
                {item.title}
              </li>
            </span>
            <button
              onClick={() =>
                setTodos(todos.filter((todo) => todo.title !== item.title))
              }
              className="bg-gray-100 rounded-full h-10 w-10 p-1 text-[11px] font-semibold hover:bg-gray-400"
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
