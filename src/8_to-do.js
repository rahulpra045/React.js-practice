import React, { useState } from 'react'

const Todo = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (input.trim() !== '') {
            // setTodos([...todos, input]);
            setTodos([...todos, {id: Date.now(), text: input}]);
            setInput('');
        }
    }
    // const removeTodo = ( index ) => {
    //     const updateTodos = todos.filter((_,i) => i !== index);
    //     setTodos(updateTodos)
        
    // }
    const removeTodo = ( id ) => {
        const updateTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updateTodos)
        
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    }
  return (
      <div>
          <input type='text' value={input} onKeyDown={handleKeyPress} onChange={(e)=> setInput(e.target.value)} />
          <button onClick={addTodo}>Add</button>
          <ul>
              {/* {todos.map((todo, index) => (
                  <li key={index}>
                      {todo} <button onClick={()=>removeTodo(index)}>Remove</button>
                  </li>
              ))} */}
              {todos.map((todo) => (
                  <li key={todo.id}>
                      {todo.text} <button onClick={()=>removeTodo(todo.id)}>Remove</button>
                  </li>
              ))}
          
          </ul>
    </div>
  )
}

export default Todo