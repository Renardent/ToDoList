import React, {useState, useEffect} from 'react';
import { useNavigate} from "react-router-dom";
import TodoList from '../components/TodoList';
import {getTasks} from '../api/taskApi';
import TodoForm from '../components/TodoForm';

const TodoPage = (props) => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  
    useEffect(()=> {
      /*якщо юзера не існує - йде на домашню сторінку*/
        if(!props.user) {
          return navigate('/');
        }
        getTasks(props.user_id)
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.error(err);
        })
    }, []);

  
  return (
    <div>
      <h1>ToDo List</h1>
      {/* <TodoForm sendData={getNewTd}/> */}
    <TodoList todos={todos}/>
    </div>
  )
}

export default TodoPage;
