import React, {useEffect, useState} from "react";
import Todo from "./Todo";
import Calendar from 'react-calendar';
import toastr from 'toastr';

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoDate, setDate] = useState(new Date());
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos'));
    setTodos(localTodos);
  }, []);

  function setCompleted(index) {
    const todo = todos[index];
    todo.completed = !todo.completed;

    const completed = Object.assign(todos, todo);
    localStorage.setItem('todos', JSON.stringify(completed))
    setTodos([...completed]);
  }

  function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos))
    setTodos([...todos]);
  }

  function handleAddInputChange(event) {
    setTodo(event.target.value);
  }

  function addTodo() {
    if (todo !== '') {
      const newTodo = {
        title: todo,
        completed: false,
        date_due: todoDate.toLocaleDateString(),
      };
      localStorage.setItem('todos', JSON.stringify([...todos, newTodo]))
      setTodos(prev => [...prev, newTodo]);
      setTodo("");
      setDate(new Date());

      toastr.success('Todo added successfully');
    } else {
      toastr.error('Todo cannot be empty');
    }
  }

  return (
      <div className="h-screen flex flex-col justify-center">
        <div className="mb-4">
          <div className="flex flex-col items-center justify-center mb-2 gap-2">
            <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 p-1.5 mb-2"
                placeholder="Add todo"
                value={todo}
                onChange={handleAddInputChange.bind(this)}
            />

            <Calendar onChange={setDate} value={todoDate}/>
          </div>

          <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 rounded-sm text-sm px-3 py-1.5 flex m-auto"
              onClick={addTodo.bind(this)}
          >
            Add
          </button>
        </div>
        <table className="border-collapse border border-slate-300 m-4">
          <thead className="border-b-2 border-slate-300">
          <tr>
            <th>Title</th>
            <th>Completed</th>
            <th>Date due</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {todos && todos.length > 0 && todos.map((todo, index) => (
              <Todo
                  key={index}
                  object={todo}
                  onSetCompleted={() => setCompleted(index)}
                  onDelete={() => deleteTodo(index)}
              />
          ))}
          </tbody>
        </table>
      </div>
  );
}

export default TodoList;
