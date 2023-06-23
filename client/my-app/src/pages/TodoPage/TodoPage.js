import React, {useState, useEffect} from 'react';
import { useNavigate} from "react-router-dom";
import TodoList from '../../components/TodoList';
import {createTask, getTasks} from '../../api/taskApi';
import TodoForm from '../../components/TodoForm';
import styles from './TodoPage.module.css';

const TodoPage = (props) => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  
    useEffect(()=> {
      /*якщо юзера не існує - йде на домашню сторінку*/
        if(!props.user) {
          return navigate('/');
        }
        getTasks(props.user._id)
        .then(result => {
            setTodos(result.data);
        })
        .catch(err => {
            console.error(err);
        })
    }, []);

      const getNewTd = (data) => {
        createTask({
          authorId: props.user._id,
          status: 'new',
          ...data
        }).then(({data:createdTask}) => {
          const newTodo = [...todos, createdTask];
          setTodos(newTodo);
        }).catch(error => {
          console.log(error);
        })
      }
  
  return (
    <>
    <div className={styles.container}>
      <h1>To-Do List</h1>
      <TodoForm sendData={getNewTd}/>
    <TodoList todos={todos}/>
    </div>
    </>
  )
}

export default TodoPage;
