import React from 'react';
import TodoItem from '../TodoItem';
// import styles from './TodoList.module.css';

const TodoList = (props) => {

    return (
        <>
        {/* <form className={styles['text-field']}>
            <input type="text" className={styles['text-field_input']}/>
        </form> */}
        <ul>
            {props.todos.map(td => <TodoItem item={td} key={td._id}/>)}
        </ul>
        </>
    );
}

export default TodoList;