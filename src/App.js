import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import Users from './Components/Users';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      projects: [],
      users: []
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
    console.log('will mount');
  }

  componentDidMount(){
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

  render() {
    return (
      <div className="App">
        <Users users={this.state.users} />
        <hr />
        <hr />
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects}
          onDelete={this.handleDeleteProject.bind(this)} />
      </div>
    );
  }
}

export default App;
