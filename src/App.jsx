import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
    <div className='p-4 bg-red-400 text-center text-4xl '>Welcome To Todos App With Redux-Toolkit</div>
    <AddTodo />
    <Todos />
    </>
  )
 
}


export default App