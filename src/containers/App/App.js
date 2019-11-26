//import react
import React, { Component } from "react";

//import css
import "./App.css";

//import components
import SearchBar from "../../components/SearchBar/SearchBar";
import Todo from "../../components/Todo/Todo";
import NewTodo from "../../components/NewTodo/NewTodo";

//import service
// import getAllData from "../../services/todo.service";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      todos: []
    };
    this.getAllData();
  }

  getData = async key => {
    let response = await fetch("http://localhost:3000/todo/" + key);
    let data = await response.json();
    return data;
  };

  getAllData = () => {
    fetch("http://localhost:3000/todo?_sort=created&_order=desc")
      .then(results => results.json())
      .then(data => {
        // console.log("success");
        this.setState({
          data: data
        });
      })
      .catch(err => {
        console.log("msg");
      });
  };

  getSearchedData = searchKey => {
    fetch("http://localhost:3000/todo?q=" + searchKey)
      .then(results => results.json())
      .then(data => {
        // console.log("success");
        this.setState({
          data: data
        });
      })
      .catch(err => {
        console.log("msg");
      });
  };

  updateData = async (key, attribute, value) => {
    return new Promise((resolve, reject) => {
      this.getData(key).then(data => {
        let dataTosend = { ...data };
        dataTosend[attribute] = value;
        fetch("http://localhost:3000/todo/" + key, {
          method: "PUT", // or 'PUT'
          body: JSON.stringify(dataTosend), // data can be `string` or {object}!
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(data => resolve("successs"))
          .catch(err => reject("error"));
      });
    });
  };

  createData = async () => {
    return new Promise((resolve, reject) => {
      let dataTosend = {
        title: "Add Title Here",
        desc: "Add Description Content Here",
        checked: false,
        deleted: false,
        edited: true,
        created: new Date()
      };
      fetch("http://localhost:3000/todo/", {
        method: "POST", // or 'PUT'
        body: JSON.stringify(dataTosend), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(data => resolve("successs"))
        .catch(err => reject("error"));
    });
  };

  getTodos() {
    let todoData = this.state.data;
    let filteredData = todoData.filter(i => i["deleted"] === false);
    let todos = filteredData.map((indData, key) => (
      <Todo
        description={indData.desc}
        title={indData.title}
        key={key}
        value={indData.id}
        ondelete={this.deleteHandler}
        onedit={this.editHandler}
        oncheck={this.checkHandler}
        checked={indData.checked}
        edited={indData.edited}
        ondone={this.doneHandler}
      ></Todo>
    ));
    return todos;
  }

  deleteHandler = key => {
    this.updateData(key, "deleted", true)
      .then(success => {
        this.getAllData();
      })
      .catch(err => {
        console.log(err);
      });
  };

  editHandler = key => {
    this.updateData(key, "edited", true)
      .then(success => {
        this.getAllData();
      })
      .catch(err => {
        console.log(err);
      });
  };

  doneHandler = (e, key) => {
    let editedElements = e.parentElement.previousSibling.children;
    let titleEdit = editedElements[1].innerHTML;
    let descriptionEdit = editedElements[2].innerHTML;
    this.updateData(key, "edited", false)
      .then(success => {
        this.updateData(key, "title", titleEdit).then(success => {
          this.updateData(key, "desc", descriptionEdit).then(success => {});
        });
        this.getAllData();
      })
      .catch(err => {
        console.log(err);
      });
  };

  checkHandler = (key, checked) => {
    this.updateData(key, "checked", checked)
      .then(success => {
        this.getAllData();
      })
      .catch(err => {
        console.log(err);
      });
  };

  searchHandler = searchData => {
    this.getSearchedData(searchData);
  };

  newtodoHandler = () => {
    this.createData()
      .then(success => {
        this.getAllData();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="main-wrapper">
        <SearchBar onsearch={this.searchHandler}></SearchBar>
        <NewTodo onnew={this.newtodoHandler}></NewTodo>
        <div className="listWrapper">{this.getTodos()}</div>
      </div>
    );
  }
}

export default App;
