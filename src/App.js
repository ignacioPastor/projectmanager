import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import Todos from './Components/Todos';
import AddProject from './Components/AddProject';
import $ from 'jquery';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getTodos() {
    $.ajax( {
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({todos: data}, () => {
          console.log(this.state);
        })
      },
      error: (xhr, status, err) => {
        console.error(err);
      }
    })
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    });
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects});
  }

  handleDeleteProject(id) {

    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects});

  }

  handleDeleteTodo(id) {
    let todos = this.state.todos;
    let index = todos.findIndex(p => p.id === id);
    todos.splice(index, 1);
    this.setState({todos});
  }

	render() {
		return (
			<div className="App">
				<AddProject addProject={this.handleAddProject.bind(this)}/>
				<Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <br />
        <Todos todos={this.state.todos} onDelete={this.handleDeleteTodo.bind(this)}/>
			</div>
		);
	}
}

export default App;
