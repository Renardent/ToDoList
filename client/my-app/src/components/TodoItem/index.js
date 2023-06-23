import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
    const {item: { body, deadline, status}} = props;

    return (
        <li>
            <span>{body}</span>
            <span>{new Date(deadline).toISOString()}</span>
            <span className={styles.status}>{status}</span>
        </li>
    );
}

export default TodoItem;