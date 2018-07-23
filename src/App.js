import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import Users from './Components/Users';
import Todos from './Components/Todos';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      projects: [],
      users: [],
      user_id: 1,
      todos: []
    }
  }

  getUsers(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      dataType: 'json',
      cached: false,
      success: function(data){
        this.setState({users: data}, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }

  getTodos(user_id){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users/' + user_id + '/todos',
      dataType: 'json',
      cached: false,
      success: function(data){
        this.setState({todos: data}, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }

  getProjects(){
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Legacy Refactoring',
        category: 'Programming'
      },
      {
        id: uuid.v4(),
        title: 'Office renew',
        category: 'Organize'
      }
    ]});
  }

  componentWillMount(){
    this.getProjects();
    this.getUsers();
    // TODO: why two times?
    // this.getTodos();
    console.log('will mount');
  }

  componentDidMount(){
    this.getTodos(1);
    console.log('did mount');
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
  }

  handleChooseUser(id){
    // this.setState({user_id: id});
    this.getTodos(id);
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects}
          onDelete={this.handleDeleteProject.bind(this)} />
        <hr />
        <Users users={this.state.users}
          onChoose={this.handleChooseUser.bind(this)} />
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
