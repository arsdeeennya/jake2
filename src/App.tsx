import axios from 'axios';
import React,{useState} from 'react';
import {Todo} from './components/Todo';
import {Text} from './components/Text';
import {TodoType} from './types/todo'
import './App.css';

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
    .then((res) => {setTodos(res.data)});
  };

  return (
    <div className='App'>
      <Text color='red' fontSize='18px'>aaaaaaaaaaa</Text>
      <button onClick={onClickFetchData}>じｋっく</button>
      {todos.map((todo: TodoType, index: number) =>(
        <div key={index}>
          <Todo title={todo.title} userId={todo.userId} completed ={todo.completed}/>
        </div>
      ))}
    </div>
  );
}

export default App;
