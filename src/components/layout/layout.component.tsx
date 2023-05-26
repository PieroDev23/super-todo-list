import { Outlet } from "react-router-dom";

import TodosProvider from "../../context/todo.context";
import Footer from "../footer/footer.component";
import Header from "../header/header.component";
import TodoForm from "../todo-from/todo-form.component";

import "./layout.component.css";
import ScoreProvider from "../../context/score.context";

export default function Layout() {
  return (
    <>
      <ScoreProvider>
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
      </ScoreProvider>
    </>
  );
}
