const TodoItem = ({ todo, setRefresh }) => {
    const updateTodo = () => {
      todo.done = !todo.done
  
      fetch(`http://localhost:3200/api/todos/update?id=${todo.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      }).then(() => {
        setRefresh(true)
        alert('Todo successfully updated!')
      })
    }
  
    const deleteTodo = () => {
      fetch(`http://localhost:3200/api/todos/delete?id=${todo.id}`, {
        method: 'GET',
      }).then(() => {
        setRefresh(true)
        alert('Todo successsfully Deleted!')
      }) //.catch(Error) {
      //console.log(`Error: ${Error}`)
      //});
    }
  
    return (
      <li
        className={`flex w-full p-4 mb-2 justify-between items-center hover:bg-slate-200 rounded-xl ${
          todo.done ? 'line-through bg-pink-300 rounded-xl' : ''
        }`}
      >
        <div onClick={updateTodo}>{todo.title}</div>
        <span
          className="h-7 w-7 flex justify-center text-bold items-center bg-red-500 hover:bg-red-600 text-white font-bold  rounded hover:bg-salte-700 hover:text-yellow-300"
          onClick={deleteTodo}
        >
          x
        </span>
      </li>
    )
  }
  
  export default TodoItem;