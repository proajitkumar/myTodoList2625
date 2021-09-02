import React, { Fragment, useState } from 'react';

import styles from './addTodo.module.css';

const AddTodo = ({ addTodo }) => {

    const [title, setTitle] = useState("");

    const onInputChange = (event) => {
        setTitle(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!title) {
            alert("Title cannot be blank!")
        }
        else {
            addTodo(title);
            setTitle("");
        }
    }

    return (
        <Fragment>
            <h1 className={styles.header}>Add todo</h1>
            <form id={styles.addTodo_container} onSubmit={submitHandler}>
                <input type="text" value={title} onChange={onInputChange} placeholder="Enter your Todo..." />
                <button>Add Todo</button>
            </form>
        </Fragment>
    )
}

export default AddTodo
