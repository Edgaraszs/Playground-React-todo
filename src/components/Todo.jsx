function Todo(props) {
  return (
    <tr className="border-b-2 border-slate-300">
      <td className={props.object.completed ? 'line-through' : ''}>{props.object.title}</td>
      <td>
        <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300"
            checked={props.object.completed}
            onChange={props.onSetCompleted}
        />
      </td>
      <td>
        <span>{props.object.date_due}</span>
      </td>
      <td>
        <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 rounded-sm text-sm px-3 py-1.5"
            onClick={props.onDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Todo;
