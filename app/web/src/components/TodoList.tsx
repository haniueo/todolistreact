import { useEffect, useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ isRefresh, setRefresh }) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    // memanggil API buat ambil data todos
    if (isRefresh) {
      fetch('http://localhost:3200/api/todos')
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setRefresh(false)
          // ketika Rest API sukses, simpan data dari response ke dalam state lokal
          setTodos(data)
        })
        .catch((err) => {
          setRefresh(false)
          if (err.name === 'AbortError') {
            console.log('fetch aborted.')
          }
        })
    }
  }, [isRefresh, setRefresh])

  return (
    <div id="todo-list" className="flex justify-center">
      <div>{todos.map((todo, i) => (
        <TodoItem key={i} todo={todo} setRefresh={setRefresh} />
      ))}
      </div>
    </div>
  )
}

export default TodoList;