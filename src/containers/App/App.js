//import react
import React, { Component } from "react";

//import css
import "./App.css";

//import components
import SearchBar from "../../components/SearchBar/SearchBar";
import Todos from "../../components/Todos/TodoList";
import NewTodo from "../../components/NewTodo/NewTodo";

//import data
import TodoList from "../../constants/TodoData";
const data = new TodoList();

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data.getData()
    };
  }

  deleteHandler = key => {
    data.deleteData(key);
    this.setState({
      data: data.getData()
    });
  };

  editHandler = key => {
    console.log(key);
  };

  checkHandler = key => {
    console.log(key);
    data.completeTask(key);
    this.setState({
      data: data.getData()
    });
  };

  render() {
    return (
      <div className="main-wrapper">
        <SearchBar></SearchBar>
        <Todos
          todo_data={this.state.data}
          ondelete={this.deleteHandler}
          oncheck={this.checkHandler}
          onedit={this.editHandler}
        ></Todos>
        <NewTodo></NewTodo>
      </div>
    );
  }
}

export default App;
