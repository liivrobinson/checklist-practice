import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todos: [
        {
          id: 1,
          content: 'Clean room'
        },
        {
          id: 2,
          content: 'Do washing'
        },
        {
          id: 3,
          content: 'Make cake'
        },
      ],
      todoInputValue: ''
    }
  }

  handleTodoInputChange = (e)=>{
    this.setState({
      todoInputValue:e.target.value
    })
  }
  handleAddTodoClick = (e)=>{
    e.preventDefault()

    var newTodo = {
      id: Date.now(), //time stamp
      content: this.state.todoInputValue
    }

    var todos = this.state.todos //the todos list from above 

    var newList = [newTodo, ...todos] //created a new list, the ...todos is adding the new list to the old

    this.setState({
      todos: newList,
      todoInputValue: ''
    })
  }

  handleDeleteClick = (e) =>{
    var id = e.target.id //this is the id of the item that is clicked, in this case an x

    var todos = this.state.todos

    // https://alligator.io/js/filter-array-method/
    var filtered = todos.filter((todo)=>{
      return todo.id != id
    })

    this.setState({
      todos: filtered //sending new filtered list to todos list
    })
  }
  
  render(){
    return (
      <div className="wrap">
          <header>
              My to do list
          </header>
          <main>
              <div className="main-container">
                {
                  this.state.todos.map((todo)=>{
                    return(
                      <div className="task-group">
                        <input type="checkbox" id="task" name="task"/>
                        <label for="task">{todo.content}</label>
                        <button><i className="fas fa-times" id={todo.id} onClick={this.handleDeleteClick}></i></button>
                      </div>
                    )
                  })
                }

                  <div className="new-task-group">
                      <form>
                          <button type="submit" onClick={this.handleAddTodoClick}><i className="fas fa-plus"></i></button>
                          <div className="form-group">
                              <input type="text" placeholder="Add new task" className="todo-input" value={this.state.todoInputValue} onChange={this.handleTodoInputChange}/>
                          </div>
                      </form>
                  </div>
              </div>
          </main>
      </div>
    )
  }
}

export default App;
