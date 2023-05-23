import { Outlet } from "react-router-dom";

import Header from "../header/header.component";
import Footer from "../footer/footer.component";
import TodoForm from "../todo-from/todo-form.component";
import TodosProvider from "../../context/todo.context";

import "./layout.component.css";

export default function Layout() {
  return (
    <>
      <TodosProvider>
        <Header />
        <main className="main container">
          <TodoForm />
          <div className="main__list">
            <Outlet />
          </div>
        </main>
        <Footer />
      </TodosProvider>
    </>
  );
}
