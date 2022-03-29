import { useState } from 'react'

const Header = ({ setRefresh }) => {
  const [title, setTitle] = useState('')

  // fungsi untuk menambah data todo melalui API ketika tombol "Add" di klik
  const addTodo = () => {
    const newTodo = { title, done: false }

    fetch('http://localhost:3200/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    }).then(() => {
      // ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string
      setTitle('')
      setRefresh(true)

      //ini untuk alert kalo mau
      alert('data berhasil ditambahkan')
    })
  }

  return (
    <div className="relative text-3xl text-black text-center after:table clear-both">
      <h2 className="text-center mt-5">My Daily Todo List</h2>
      <input
        type="text"
        value={title}
        className="w-96 bg-slate-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-500"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="m-1 shadow bg-pink-500 hover:bg-pink-400 focus:shadow-outline focus:outline-none py-2 px-4 text-white font-bold mr-2 rounded"
        onClick={addTodo}
      >
        Add
      </button>
      
    </div>
  )
}

export default Header;