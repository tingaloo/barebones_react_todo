import React, {Component} from 'react'
import Todos from './Todos'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      todos: [
        'Add CSS style imports',
        'Add HTML Webpack Plugin',
        'Use Redux if more time',
        'Replace remove buttons with actual X buttons'
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log("handling submit")

    let todos = this.state.todos.slice()
    todos.push(this.state.value)
    this.setState({
      todos: todos,
      value: ''}
    );

    event.preventDefault();
  }

  render() {

    return (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          <input type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Walk the dog"
          ref='box'
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default TodoList
