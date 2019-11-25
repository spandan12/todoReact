//import react 
import React, { Component } from 'react';

//import css
import './App.css';

//import components
import SearchBar from '../../components/SearchBar/SearchBar';
import Todos from '../../components/Todos/Todos';
import NewTodo from '../../components/NewTodo/NewTodo';


class App extends Component {
  constructor() {
    super();

  }

  render() {
    const des = ['eat fruits', 'drink water'];
    return (
      <div className="main-wrapper">
        <SearchBar></SearchBar>
        <Todos descriptions={des}></Todos>
        <NewTodo></NewTodo>
      </div>
    )
  }

}

export default App;
