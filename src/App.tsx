import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TodosPage from "./component/TodosPage";
import UserItemPage from "./component/UserItemPage";
import UserPage from "./component/UserPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Link to={"/users"}>Показать пользователей</Link>
          <Link to={"/todos"}>показакать тудушки</Link>
        </div>
        <Routes>
          <Route path="/users" element={<UserPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/user/:id" element={<UserItemPage />} />
          {/* <Route path="/todos/:id" element={<TodosPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
