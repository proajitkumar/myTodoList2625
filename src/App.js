import React, { Fragment, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

import './App.css';
import Todolist from './todolist/Todolist';
import AddTodo from './todolist/AddTodo';
import Footer from './components/Footer';
import Contact from './contact/Contact';

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // const defaultItems = [
  //   {
  //     sno: 0,
  //     title: "Welcome To My-Todolist !"
  //   },
  //   {
  //     sno: 1,
  //     title: "Add your todos here..."
  //   },
  //   {
  //     sno: 2,
  //     title: "Delete them when completed !"
  //   }
  // ]

  const [todos, setTodos] = useState(initTodo);

  const addTodo = (title)=> {
    let sno;
    if(todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno,
      title
    }
    setTodos([...todos, myTodo]);
  }

  const onDelete = (todo)=> {
    setTodos(todos.filter((e)=> {return e!==todo}))
  }

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])

  return (
    <Fragment>
      <Navbar />

      <Switch>

        <Route exact path='/'>
          <AddTodo addTodo={addTodo} />
          <Todolist todos={todos} onDelete={onDelete} />
        </Route>

        <Route exact path='/contact'>
          <Contact />
        </Route>

      </Switch>

      <Footer />
    </Fragment>
  );
}

export default App;
