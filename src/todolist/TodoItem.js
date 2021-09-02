import React, { Fragment } from 'react';

import styles from './todoItem.module.css';

const TodoItem = ({ todo, onDelete }) => {
    return (
        <Fragment>
            <div className={styles.todoItem}>
                <h3>{todo.title}</h3>
                <button onClick={()=> {onDelete(todo)}}>Delete</button>
            </div>
        </Fragment>
    )
}

export default TodoItem
