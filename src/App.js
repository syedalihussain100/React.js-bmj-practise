import React, { useState, useEffect } from 'react';
import "./App.css";
import TodoHome from './components/TodoHome';
import TodoList from './components/TodoList';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div>
      <TodoHome />
      {loading ? <div style={{textAlign:'center',fontSize:'25px'}}>Loading...</div> : (<TodoList />)}
    </div>
  )
}

export default App
