import React from 'react';
import TodoItem from './TodoItem';

import styles from './todolist.module.css';

const Todolist = ({todos, onDelete}) => {

    return (
        <div id={styles.todoList}>
            <h1>Todos</h1>
            {todos.length === 0 ? <h3 id={styles.noTodo}>No Todos...</h3> :
                todos.map(todo => <TodoItem key={todo.sno} todo={todo} onDelete={onDelete} />)
            }
            
        </div>
    )
}

export default Todolist
