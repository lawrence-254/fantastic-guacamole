import React, {useState} from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')

    const addTodo = () => {
        setTodos(t => [...t, todo])
        setTodo('')
    }
    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index))
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo()
        }
    }

    const handleRemove = (index) => {
        removeTodo()
    }

    const InputForm = (
        <div>
            <input
                type="text"
                value={todo}
                onChange={e => setTodo(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={addTodo}>Add</button>
        </div>
    )

    const TodoList = (
        <ul>
            {todos.map((t, i) => (
                <li key={i}>
                    {t}
                    <button onClick={() => handleRemove(i)}>Remove</button>
                </li>
            ))}
        </ul>
    )
  return (
    <div>
        <div>
            <input
                type="text"
                value={todo}
                onChange={e => setTodo(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={addTodo}>Add</button>
        </div>
 <ul>
            {todos.map((t, i) => (
                <li key={i}>
                    {t}
                    <button onClick={() => handleRemove(i)}>Remove</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo