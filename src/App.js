import React, {Component} from 'react'
import Todos from './todos';
import Addlist from './addlist';
import "./App.css";
import Descard from './descard';
class App extends Component {
  state = {
    todos: [
      {id:1,content: "CS 357", description:"final exam review"},
      {id:2,content: "CS 233", description:"final exam review"}
    ],
    id : 2,
    title: null,
    infor: null
  }
  handleinfo = (title, info) => {
  
    this.setState({
      title: title
    })
    this.setState({
      infor: info
    })
    console.log(this.state);
    console.log(title);
    console.log(info);
  }
  deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }
  addTodo = (todo) => {
    this.setState({
      id : this.state.id + 1
    })
    todo.id = this.state.id + 1;
    let todos  = [...this.state.todos, todo]
    this.setState({
      todos:todos
    })
    console.log(this.state)

  }
  render() {
    return (
    <div className="todo-app continer">
      <h1 className='center blue-text'>TodoList</h1>
      <Todos className = "todos"  todos ={this.state.todos} deleteTodo = {this.deleteTodo} handleinfo = {this.handleinfo}/>
      <Addlist addTodo = {this.addTodo}/>
      <Descard className = "card" title = {this.state.title} infor = {this.state.infor}/>
    </div>
    );
  }
}

export default App;
