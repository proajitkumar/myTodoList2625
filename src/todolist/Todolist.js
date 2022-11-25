import React from 'react';
import TodoItem from './TodoItem';

import styles from './todolist.module.css';

const Todolist = ({todos, onDelete, onDeleteAll, onEdit}) => {

    return (
        <div id={styles.todoList}>
            <h1>Todos</h1>
            {todos.length === 0 ? <h3 id={styles.noTodo}>No Todos...</h3> :
                <>
                    <button className={styles.deleteAll} onClick={onDeleteAll}>Delete All</button>
                    {todos.map((todo, index) => <TodoItem key={todo.sno} todo={todo} onDelete={onDelete} onEdit={(data)=>onEdit(data, index)} />)}
                </>
            }
            
        </div>
    )
}

export default Todolist
