import React, { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';

import styles from './todoItem.module.css';

const TodoItem = ({ todo, onDelete, onEdit }) => {
    const inputRef = useRef(null);
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const handleKeyUp = (event)=>{
        // console.log({event: event?.target})
        inputRef.current.style.height = `${event?.target?.scrollHeight}px`;
    }

    const onInputChange =(event)=>{
        if(editing){
            setTitle(event.target.value);
            handleKeyUp(event)
        }
    }
    const handleEdit =()=>{
        setEditing(true)
    }

    const cancel = ()=>{
        setEditing(false)
        setTitle(todo.title)
    }

    const submitHandler = (event) => {
        event?.preventDefault();
        let trimmedTitle = title?.trim()
        if (!trimmedTitle) {
            alert("Title cannot be blank!")
        }
        else {
            // addTodo(title);
            onEdit({...todo, title: trimmedTitle})
            setEditing(false)
            setTitle(trimmedTitle)
        }
    }

   
    useLayoutEffect(() => {
    //   console.log({clientHeight: inputRef.current.scrollHeight})
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`
    }, [inputRef])

    return (
        <Fragment>
            <div className={styles.todoItem} onSubmit={submitHandler}>
                {/* <h3>{todo.title}</h3> */}
                <form style={{margin: '10px 0', width: '100%', display: "flex", justifyContent: "center"}}>
                    {/* <input type="text" value={editing ? title : todo.title} onChange={onInputChange} placeholder="Enter your Todo..." disabled={!editing} /> */}
                    <textarea
                        onKeyUp={handleKeyUp}
                        // onLoad={onLoad}
                        ref={inputRef}
                        type="text"
                        value={editing ? title : todo.title}
                        onChange={onInputChange}
                        placeholder="Enter your Todo..."
                        disabled={!editing}
                        readOnly={!editing}
                        rows={1}
                        // style={{height: inputHeight}}
                    ></textarea>
                </form>
                <div className='btn-container'>
                    <button className={editing?styles.btnSave: styles.btnEdit} onClick={()=> {editing?submitHandler(): handleEdit()}}>{editing?"Save":"Edit"}</button>
                    <button className={editing?styles.btnCancel: styles.btnDelete} onClick={()=> {editing? cancel():onDelete(todo)}}>{editing?"Cancel":"Delete"}</button>
                </div>
            </div>
        </Fragment>
    )
}

export default TodoItem
