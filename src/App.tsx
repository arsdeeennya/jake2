import axios from 'axios';
import React,{useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState<any>('vvvvvv')

  const onClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => setTodos('aaaaa'))
  }

  return (
    <div className='App'>
      <button onClick={onClick}>{todos}</button>
    </div>
  );
}

export default App;
