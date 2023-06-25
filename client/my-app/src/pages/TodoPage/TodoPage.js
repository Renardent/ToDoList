import React, {useState, useEffect} from 'react';
import { useNavigate} from "react-router-dom";
import TodoList from '../../components/TodoList';
import {createTask, getTasks} from '../../api/taskApi';
import {authUser} from '../../api/userApi';
import TodoForm from '../../components/TodoForm';
import styles from './TodoPage.module.css';

const TodoPage = (props) => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  
    useEffect(()=> {
      if(!props.user) {
        const token = localStorage.getItem('token');
        if (token) {
            //// робимо запит на отримання юзера
            authUser(token)
            .then(userData => {
                props.sendUser(userData.data);
            }).catch(error => {
                // якщо токен невалідний - перенаправляємо на авторизацію
                return navigate('/');
            })
      } else {
          return navigate('/');
        }
      } else {
        getTasks(props.user._id)
        .then(result => {
            setTodos(result.data);
        })
        .catch(error => {
            console.error(error);
        })
    }}, [props.user]);

      const getNewTd = (data) => {
        createTask({
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
