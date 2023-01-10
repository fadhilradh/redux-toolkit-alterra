import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link } from "react-router-dom";

import Routes from "./route";
import { getTodo } from "./store/todo";

export default function App() {
  const jumlahBarang = useSelector((state) => state.keranjang.value);
  // const todo = useSelector((state) => state.todo.list);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTodo());
  //   console.log(todo);
  // }, []);
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul className="flex w-full justify-between items-center p-4 shadow-md sticky mb-4 top-0 left-0">
            <span className="flex gap-x-6 ">
              <li className="hover:text-blue-700 font-semibold cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-blue-700 font-semibold cursor-pointer">
                <Link to="/keranjang">Keranjang</Link>
              </li>

              <li className="hover:text-blue-700 font-semibold cursor-pointer">
                <Link to="/form">Form</Link>
              </li>
              <li className="hover:text-blue-700 font-semibold cursor-pointer">
                <Link to="/todo">Todo</Link>
              </li>
            </span>
            <li className="text-2xl font-semibold">
              Jumlah Item di Keranjang :{" "}
              <span className="text-blue-600">{jumlahBarang}</span>
            </li>
          </ul>
        </nav>

        <Routes />
      </div>
    </BrowserRouter>
  );
}
