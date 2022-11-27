import React from "react";
import "react-calendar/dist/Calendar.css";
import "toastr/build/toastr.css";
import TodoList from "./components/TodoList";

function App() {
  return (
      <div className="App bg-slate-200 h-screen">
        <TodoList/>
      </div>
  )
}

export default App;
