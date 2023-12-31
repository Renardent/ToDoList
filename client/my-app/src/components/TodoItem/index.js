import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
    const {item: { _id, body, deadline, status}} = props;

    return (
        <li>
            <span>{body}</span>
            <span>{new Date(deadline).toISOString()}</span>
            <span className={styles.status}>{status}</span>
            <button onClick={() => props.delete(_id)}>X</button>
        </li>
    );
}

export default TodoItem;