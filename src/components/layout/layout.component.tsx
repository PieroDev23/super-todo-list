import { Outlet } from "react-router-dom";

import Footer from "../footer/footer.component";
import Header from "../header/header.component";
import SearchForm from "../search-form/search-form.component";
import TodoForm from "../todo-from/todo-form.component";

import "./layout.component.css";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="main container">
        <TodoForm />
        <div className="main__list">
          <div className="page shadow">
            <SearchForm />
            <section className="page__list">
              <Outlet />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
